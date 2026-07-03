import { Router } from "express";
import { submitContactForm } from "../controllers/contact.controller.js";
import validateContact from "../middleware/validateContact.js";

const router = Router();

router.post("/contact", validateContact, submitContactForm);

export default router;