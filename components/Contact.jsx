"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_83c4czp", 
        "template_gba6dns",
        formRef.current,
        "orhf8Tvyf2Oe1ELTZ"
      )
      .then(() => {
        toast.success("✅ Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => toast.error("❌ Something went wrong. Try again!"));
  };

  return (
    <section id="contact" className="my-16 scroll-mt-28">
      <Toaster richColors position="top-right" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold"
      >
        Contact
      </motion.h2>

      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 container-card p-6 flex flex-col gap-3"
      >
        <input name="from_name" placeholder="Your Name" className="bg-transparent border p-2 rounded" required />
        <input name="reply_to" placeholder="Email" className="bg-transparent border p-2 rounded" required />
        <textarea name="message" rows="5" placeholder="Message" className="bg-transparent border p-2 rounded" required />

        <button className="bg-primary text-black px-4 py-2 rounded font-semibold hover:opacity-90">
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
