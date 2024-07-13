import React, { useState } from "react";
import "./styles/Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    //EmailJS serviceID, templateID and Public Key
    const serviceID = "service_y09huxa";
    const templateID = "template_hx7mm6a";
    const publicKey = "KkyM09ugrGO4-lIE4";

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
          ></input>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <textarea
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
