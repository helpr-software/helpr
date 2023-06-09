import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMagicLink(email: string, magicLink: string) {
  const frontendUrl = useRuntimeConfig().public.appDomain;
  return await resend.emails.send({
    from: "contact@helpr.tech",
    to: [email],
    subject: "Helpr - Magic Link",
    html: `<a href="${frontendUrl}/auth/connect?token=${magicLink}">Click here to login</a>`,
  });
}
