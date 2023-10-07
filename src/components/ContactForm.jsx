import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Geoff",
          from_email: formData.email,
          to_email: "geoff.ijamieson@gmail.com",
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      .catch((err) => {
        console.error(`Error sending message: ${err}`);
        alert("Something went wrong 🙁 please try again!");
      })
      .then(() => {
        setLoading(false);
        alert(
          "Thanks for reaching out 😁 I will get back to you as soon as possible!"
        );
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => console.error(`Post message error: ${err}`));
  };

  return (
    <div className="flex flex-col p-8 rounded bg-[#0D101E] border-2 border-secondary">
      <p className="uppercase font-medium mb-3 text-sm text-primary">
        Get in touch
      </p>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-syne mb-10 text-accent">
        Contact
      </h3>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-3">Your Name</span>
          <input
            type="text"
            name="name"
            placeholder="Please enter your name"
            value={formData.name}
            onChange={handleChange}
            className="bg-tertiary py-4 px-6 rounded-lg outline-none border-none font-medium mb-4 bg-secondary text-white"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-3">Your email</span>
          <input
            type="email"
            name="email"
            placeholder="Please enter your email"
            value={formData.email}
            onChange={handleChange}
            className="bg-tertiary py-4 px-6 rounded-lg outline-none border-none font-medium mb-4 bg-secondary text-white"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-3">Your Message</span>
          <textarea
            rows={7}
            name="message"
            placeholder="What would you like to say?"
            value={formData.message}
            onChange={handleChange}
            className="bg-tertiary py-4 px-6 rounded-lg outline-none border-none font-medium mb-6 bg-secondary text-white"
          />
        </label>

        <button
          type="submit"
          className="py-3 px-8 rounded outline-none w-full md:w-fit bg-primary text-white font-semibold mb-2 active:scale-95"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
