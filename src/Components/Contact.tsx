import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_2s1brwg", // ✅ Replace with your service ID
        "template_v4bbrsw", // ✅ Replace with your template ID
        form.current,
        "V0xbgsEwN8eIpDiuj" // ✅ Replace with your public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          setStatus("❌ Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Let’s work together! Fill out the form below:</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows={5} required />
        <button type="submit">Send Message</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
