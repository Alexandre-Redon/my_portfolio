import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Nom: ${name} Email: ${email} Message: ${message}`);
  };

  return (
    <div id="contact">
      <h2 className="contactPageTitle">Me contacter</h2>
      <p className="contactDesc">
        Merci de remplir le formulaire ci-dessous afin de prendre contact avec
        moi.
      </p>
      <form className="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          className="contactFormInputName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="contactFormInputEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          className="contactFormInputMessage"
          rows={5}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="contactFormSubmitButton" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
