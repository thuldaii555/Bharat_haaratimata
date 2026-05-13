"use client";

import { FormEvent, useState } from "react";

type InquiryFormProps = {
  source: "contact" | "wholesale";
  showInquiryType?: boolean;
};

type FormState = "idle" | "loading" | "success" | "error";

const inquiryTypes = [
  "Wholesale",
  "Bulk Buy",
  "Custom Design",
  "Export Partnership",
  "General Inquiry",
];

export function InquiryForm({ source, showInquiryType = true }: InquiryFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      source,
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      company: String(data.get("company") || "").trim(),
      inquiryType: String(data.get("inquiryType") || "Wholesale").trim(),
      message: String(data.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setState("error");
      setMessage("Please add your name, email, and message.");
      return;
    }

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to submit inquiry");
      }

      form.reset();
      setState("success");
      setMessage("Inquiry received. The next step is to connect this form to email or CRM handling.");
    } catch {
      setState("error");
      setMessage("The inquiry could not be sent. Please try again or email the team directly.");
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field-label">
          Name
          <input className="field-input" name="name" type="text" autoComplete="name" required />
        </label>
        <label className="field-label">
          Email
          <input className="field-input" name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field-label">
          Phone Number
          <input className="field-input" name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="field-label">
          Company
          <input className="field-input" name="company" type="text" autoComplete="organization" />
        </label>
      </div>
      {showInquiryType ? (
        <label className="field-label">
          Inquiry Type
          <select className="field-input" name="inquiryType" defaultValue="Wholesale">
            {inquiryTypes.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      ) : null}
      <label className="field-label">
        Message
        <textarea className="field-input min-h-36 resize-y py-4" name="message" required />
      </label>
      {message ? (
        <p
          className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${
            state === "success"
              ? "border-gold/30 bg-gold/10 text-walnut"
              : "border-clay/30 bg-clay/10 text-walnut"
          }`}
        >
          {message}
        </p>
      ) : null}
      <button className="button-dark justify-self-start" type="submit" disabled={state === "loading"}>
        {state === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
