import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
  name,
  email,
  subject,
  message,
}) => {
  const response = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.RECEIVER_EMAIL || "bilalurrahman27@gmail.com",
    replyTo: email,
    subject: `📩 ${subject}`,
    html: `
      <h2>New Portfolio Contact Form Submission</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>

      <hr />

      <p>${message}</p>
    `,
  });

  return response;
};