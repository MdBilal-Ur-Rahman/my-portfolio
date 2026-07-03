const validateContact = (req, res, next) => {
 

  const { name, email, message } = req.body;

  // Check Empty Fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  // Name Validation
  if (name.trim().length < 3) {
    return res.status(400).json({
      success: false,
      message: "Name must be at least 3 characters long.",
    });
  }

  // Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }

  // Message Validation
  if (message.trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: "Message must be at least 10 characters long.",
    });
  }

  next();
};

export default validateContact;