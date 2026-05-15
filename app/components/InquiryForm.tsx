"use client";

import { FormEvent, useState } from "react";

type InquiryFormProps = {
  source: "contact" | "wholesale";
  showInquiryType?: boolean;
};

type FormState = "idle" | "loading" | "success" | "error";

const inquiryTypes = [
  "General Inquiry",
  "Showroom Product Question",
  "Trade / Bulk Inquiry",
  "Custom Design Request",
  "Sustainability / Fair Trade Question",
  "Partnership Inquiry",
];

const successMessage =
  "Thank you. Your inquiry has been received. Our team will review your message and follow up with the appropriate next step.";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

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
      country: String(data.get("country") || "").trim(),
      inquiryType: String(data.get("inquiryType") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.inquiryType || !payload.message) {
      setState("error");
      setMessage("Please complete your name, email, inquiry type, and message.");
      return;
    }

    if (!isValidEmail(payload.email)) {
      setState("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.error || "Unable to submit inquiry");
      }

      form.reset();
      setState("success");
      setMessage(successMessage);
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error && error.message
          ? error.message
          : "The inquiry could not be sent. Please try again or email the team directly.",
      );
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field-label">
          Full Name
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
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field-label">
          Country
          <input className="field-input" name="country" type="text" autoComplete="country-name" />
        </label>
        {showInquiryType ? (
          <label className="field-label">
            Inquiry Type
            <select className="field-input" name="inquiryType" defaultValue="">
              <option value="" disabled>
                Select inquiry type
              </option>
              {inquiryTypes.map((type) => (
                <option value={type} key={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <div />
        )}
      </div>
      <label className="field-label">
        Message
        <textarea className="field-input min-h-40 resize-y py-4" name="message" required />
      </label>
      {message ? (
        <p
          aria-live="polite"
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
