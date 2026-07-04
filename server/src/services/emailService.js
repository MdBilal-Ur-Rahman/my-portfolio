import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();





const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async ({
  name,
  email,
  subject,
  message,
}) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,

    to: process.env.EMAIL_USER,

    subject: `📩 ${subject}`,

    html: `
      <h2>New Portfolio Contact Form Submission</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Subject:</strong> ${subject}</p>

      <p><strong>Message:</strong></p>

      <p>${message}</p>
    `,
  });
};