type InquiryPayload = {
  source?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  inquiryType?: unknown;
  message?: unknown;
};

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: InquiryPayload;

  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return Response.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const inquiry = {
    source: asText(payload.source) || "website",
    name: asText(payload.name),
    email: asText(payload.email),
    phone: asText(payload.phone),
    company: asText(payload.company),
    inquiryType: asText(payload.inquiryType) || "Wholesale",
    message: asText(payload.message),
  };

  if (!inquiry.name || !inquiry.email || !inquiry.message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  return Response.json({
    ok: true,
    inquiry,
    note: "Inquiry accepted by the local API. Email or CRM delivery can be connected later.",
  });
}
