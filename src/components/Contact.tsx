import { FormEvent, useState } from "react";
import "../components/styles/Contact.css";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //EmailJS serviceID, templateID and Public Key from environment variables
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Jakob Kjeldsteen",
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent succesfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
      });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-area">
        <h1>Contact</h1>
        <form onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="contact-input"
          ></input>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="contact-input"
          ></input>
          <textarea
            cols={30}
            rows={10}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="contact-input"
          ></textarea>
          <Button type="submit" variant={"contactSubmit"}>
            Send Email
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
