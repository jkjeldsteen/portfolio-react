import { useRef, useState, type FormEvent } from "react";
import "./styles/Contact.css";
import { Button } from "@/components/ui/button";

type Delivery = "idle" | "sending" | "sent" | "failed" | "unavailable";

function clearFieldError(event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
  event.currentTarget.setCustomValidity("");
}

export default function Contact() {
  const [delivery, setDelivery] = useState<Delivery>("idle");
  const sending = useRef(false);

  async function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;

    const form = event.currentTarget;
    const nameField = form.elements.namedItem("name");
    const emailField = form.elements.namedItem("email");
    const messageField = form.elements.namedItem("message");
    if (!(nameField instanceof HTMLInputElement) ||
        !(emailField instanceof HTMLInputElement) ||
        !(messageField instanceof HTMLTextAreaElement)) return;

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();
    nameField.setCustomValidity(name ? "" : "Enter your name.");
    messageField.setCustomValidity(message ? "" : "Enter a message.");
    if (!form.reportValidity()) return;

    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!service || !template || !publicKey) {
      setDelivery("unavailable");
      return;
    }

    sending.current = true;
    setDelivery("sending");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
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
    } finally {
      sending.current = false;
    }
  }

  return (
    <main className="contact-wrapper">
      <div className="contact-area">
        <h1>Contact</h1>
        <form onSubmit={sendEmail} onInput={() => {
          if (delivery === "sent" || delivery === "failed") setDelivery("idle");
        }} className="contact-form">
          <fieldset disabled={delivery === "sending"} className="contact-fields">
            <label>
              Name
              <input className="contact-input" name="name" autoComplete="name" onInput={clearFieldError} required />
            </label>
            <label>
              Email
              <input className="contact-input" name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Message
              <textarea className="contact-input" name="message" rows={6} onInput={clearFieldError} required />
            </label>
            <Button type="submit" variant="contactSubmit">
              {delivery === "sending" ? "Sending..." : "Send email"}
            </Button>
          </fieldset>
          <div role="status">
            {delivery === "sending" && "Sending your message…"}
            {delivery === "sent" && "Thanks, your message was sent."}
            {delivery === "failed" && "Your message could not be sent. Your draft is still here. Please try again."}
            {delivery === "unavailable" && "Email delivery is unavailable. You can still reach me on "}
            {delivery === "unavailable" && <a href="https://www.linkedin.com/in/jkjeldsteen/">LinkedIn</a>}
          </div>
        </form>
      </div>
    </main>
  );
}
