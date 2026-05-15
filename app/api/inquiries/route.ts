type InquiryPayload = {
  source?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  country?: unknown;
  inquiryType?: unknown;
  message?: unknown;
};

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: InquiryPayload;

  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return Response.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const inquiry = {
    source: asText(payload.source) || "contact",
    name: asText(payload.name),
    email: asText(payload.email),
    phone: asText(payload.phone),
    company: asText(payload.company),
    country: asText(payload.country),
    inquiryType: asText(payload.inquiryType),
    message: asText(payload.message),
  };

  if (!inquiry.name || !inquiry.email || !inquiry.inquiryType || !inquiry.message) {
    return Response.json(
      {
        error: "Full name, email, inquiry type, and message are required.",
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(inquiry.email)) {
    return Response.json({ error: "A valid email address is required." }, { status: 400 });
  }

  // TODO: connect this endpoint to email delivery or Supabase storage.
  // TODO: add rate limiting and spam protection before accepting production traffic.

  return Response.json({
    ok: true,
    inquiry,
    note: "Inquiry accepted by the local API. Email or CRM delivery can be connected later.",
  });
}
