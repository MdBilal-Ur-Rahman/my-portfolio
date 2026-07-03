import Contact from "../models/Contact.js";
import { sendEmail } from "../services/emailService.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    await sendEmail({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully.",
      data: contact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};