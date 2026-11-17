import { FormEvent, useState } from "react";
import "./styles/Contact.css";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";

type Delivery = "idle" | "sending" | "sent" | "failed" | "unavailable" | "invalid";

export default function Contact() {
  const [delivery, setDelivery] = useState<Delivery>("idle");

  async function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (delivery === "sending") return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    const name = String(fields.get("name") ?? "").trim();
    const email = String(fields.get("email") ?? "").trim();
    const message = String(fields.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setDelivery("invalid");
      return;
    }

    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!service || !template || !publicKey) {
      setDelivery("unavailable");
      return;
    }

    setDelivery("sending");
    try {
      await emailjs.send(service, template, {
        from_name: name,
        from_email: email,
        to_name: "Jakob Kjeldsteen",
        message,
      }, publicKey);
      form.reset();
      setDelivery("sent");
    } catch {
      setDelivery("failed");
    }
  }

  return (
    <main className="contact-wrapper">
      <div className="contact-area">
        <h1>Contact</h1>
        <form onSubmit={sendEmail} className="contact-form">
          <fieldset disabled={delivery === "sending"} className="contact-fields">
            <label>
              Name
              <input className="contact-input" name="name" autoComplete="name" required />
            </label>
            <label>
              Email
              <input className="contact-input" name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Message
              <textarea className="contact-input" name="message" rows={6} required />
            </label>
            <Button type="submit" variant="contactSubmit">
              {delivery === "sending" ? "Sending..." : "Send email"}
            </Button>
          </fieldset>
          <div role="status">
            {delivery === "sent" && "Thanks, your message was sent."}
            {delivery === "invalid" && "Enter your name, email, and a message."}
            {delivery === "failed" && "Your message could not be sent. Your draft is still here. Please try again."}
            {delivery === "unavailable" && "Email delivery is unavailable. You can still reach me on "}
            {delivery === "unavailable" && <a href="https://www.linkedin.com/in/jkjeldsteen/">LinkedIn</a>}
          </div>
        </form>
      </div>
    </main>
  );
}
