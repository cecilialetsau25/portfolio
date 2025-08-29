import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "success", "error", or ""

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    try {
      await emailjs.send(
        "service_n3is57g",
        "template_65ivle5",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "vDrjvLa1flKRUiT0n"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-gray-300 px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h3>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded shadow border"
            whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(59,130,246,0.5)" }}
            required
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded shadow border"
            whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(59,130,246,0.5)" }}
            required
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded shadow border"
            rows={5}
            whileFocus={{ scale: 1.02, boxShadow: "0 0 10px rgba(59,130,246,0.5)" }}
            required
          />
          <motion.button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {status === "success" && (
          <motion.p
            className="mt-4 text-green-600 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Message sent successfully! 
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            className="mt-4 text-red-600 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Something went wrong. Make sure all fields are filled and try again.
          </motion.p>
        )}

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>Email: <a href="mailto:cmletsau@gmail.com" className="text-blue-500">cmletsau@gmail.com</a></p>
          <p>Phone: 072 484 1337</p>
          <p>
            <a href="https://github.com/cecilialetsau25" target="_blank" rel="noreferrer" className="text-blue-500">GitHub</a> | 
            <a href="https://linkedin.com/in/magalane-letsau" target="_blank" rel="noreferrer" className="text-blue-500 ml-2">LinkedIn</a>
          </p>

          {/* Resume Button with Pop Animation */}
          <motion.a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
