import "./contact.css";
import { MutableRefObject, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageisSent, setMessageisSent] = useState<boolean>(false);
  const [messageButton] = useState<string>("Message envoyé");

  const form = useRef<HTMLFormElement>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form.current);

    form.current
      ? emailjs
          .sendForm(
            "service_v7z2d0r",
            "template_1h3gmuo",
            form.current,
            "lvJBVI9meZRwC1GHa"
          )
          .then(
            (result) => {
              console.log(result.text);
              setMessageisSent(true);
              setName("");
              setEmail("");
              setMessage("");
            },
            (error) => {
              console.log(error.text);
            }
          )
      : console.log("error");
  };

  return (
    <div id="contact">
      <h2 className="contactPageTitle">Me contacter</h2>
      <p className="contactDesc">
        Merci de remplir le formulaire ci-dessous afin de prendre contact avec
        moi.
      </p>
      <form
        ref={form as MutableRefObject<HTMLFormElement>}
        className="contactForm"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Nom"
          className="contactFormInputName"
          value={name}
          name="name"
          onChange={(e) => {
            setName(e.target.value);
            messageisSent ? setMessageisSent(false) : "Envoyer";
          }}
        />
        <input
          type="email"
          placeholder="Email"
          className="contactFormInputEmail"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            messageisSent ? setMessageisSent(false) : "Envoyer";
          }}
        />
        <textarea
          placeholder="Message"
          value={message}
          className="contactFormInputMessage"
          name="message"
          rows={5}
          onChange={(e) => {
            setMessage(e.target.value);
            messageisSent ? setMessageisSent(false) : "Envoyer";
          }}
        ></textarea>
        <button
          className="contactFormSubmitButton"
          disabled={messageisSent || !name || !email || !message}
          type="submit"
        >
          {messageisSent ? messageButton : "Envoyer"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
