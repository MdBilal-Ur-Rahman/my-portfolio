import { useState } from "react";
import { sendContactMessage } from "../../services/contactService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await sendContactMessage(formData);

      setStatus({
        type: "success",
        message: response?.message || "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      let errorMessage = "Something went wrong. Please try again.";

      if (error.code === "ECONNABORTED") {
        errorMessage = "Request timed out. Please try again.";
      } else if (error.response) {
        errorMessage =
          error.response.data?.message ||
          `Server Error (${error.response.status})`;
      } else if (error.request) {
        errorMessage =
          "Unable to reach the server. Please check your internet connection.";
      } else if (error.message) {
        errorMessage = error.message;
      }

      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 py-20 text-white"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
            Have a project, internship, or job opportunity? I'd love to hear
            from you. Feel free to send me a message anytime.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium"
            >
              Subject
            </label>

            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium"
            >
              Message
            </label>

            <textarea
              id="message"
              rows={5}
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            />
          </div>

          {status.message && (
            <div
              className={`rounded-lg p-3 text-sm ${
                status.type === "success"
                  ? "border border-green-500/30 bg-green-500/10 text-green-400"
                  : "border border-red-500/30 bg-red-500/10 text-red-400"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-cyan-500 px-8 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;