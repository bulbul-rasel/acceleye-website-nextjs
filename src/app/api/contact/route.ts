import { NextResponse } from "next/server";

type Body = {
  type?: "contact" | "newsletter" | "affiliate";
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  // affiliate registration
  firstName?: string;
  lastName?: string;
  phone?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  company?: string;
  websiteUrl?: string;
  agree?: string | boolean;
  website?: string; // honeypot: real users leave this empty
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fail = (error: string, status = 422) =>
  NextResponse.json({ ok: false, error }, { status });

const blank = (v?: string) => !v || !v.trim();

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return fail("Invalid request.", 400);
  }

  // Bots fill the hidden field: pretend success and drop it.
  if (body.website) return NextResponse.json({ ok: true });

  const email = body.email?.trim() ?? "";
  if (!emailRe.test(email)) return fail("Please enter a valid email address.");

  if (body.type === "affiliate") {
    const required: (keyof Body)[] = [
      "firstName",
      "lastName",
      "address1",
      "city",
      "state",
      "zip",
      "country",
      "company",
      "websiteUrl",
    ];
    if (required.some((k) => blank(body[k] as string | undefined))) {
      return fail("Please fill in all required fields.");
    }
    if (!body.agree) return fail("You must agree to the terms.");
    try {
      new URL(
        /^https?:\/\//i.test(body.websiteUrl!) ? body.websiteUrl! : `https://${body.websiteUrl}`,
      );
    } catch {
      return fail("Please enter a valid website URL.");
    }
  } else if (body.type !== "newsletter") {
    if (blank(body.name) || blank(body.message)) {
      return fail("Please fill in your name and message.");
    }
  }

  // TODO: send this somewhere real (email service, CRM, database).
  // For now it is only logged on the server.
  console.log("[form]", { ...body, email });

  return NextResponse.json({ ok: true });
}
