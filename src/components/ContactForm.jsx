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
    <div className="flex flex-col p-8 rounded-lg max-w-[800px] mx-auto">
      <p className="uppercase font-medium mb-3 text-sm text-slate-500">
        Get in touch
      </p>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-[#9FFF8A]">
        Contact
      </h3>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-2">Your Name</span>
          <input
            type="text"
            name="name"
            placeholder="Please enter your name"
            value={formData.name}
            onChange={handleChange}
            className="py-4 px-6 rounded-lg outline-none font-medium mb-8 text-black text-sm"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-2">Your email</span>
          <input
            type="email"
            name="email"
            placeholder="Please enter your email"
            value={formData.email}
            onChange={handleChange}
            className="py-4 px-6 rounded-lg outline-none border-none font-medium mb-8 text-black text-sm"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-2">Your Message</span>
          <textarea
            rows={7}
            name="message"
            placeholder="What would you like to say?"
            value={formData.message}
            onChange={handleChange}
            className="py-4 px-6 rounded-lg outline-none border-none font-medium mb-8 text-black text-sm"
            required
          />
        </label>

        <button
          type="submit"
          className="py-3 px-8 rounded outline-none w-full md:w-fit font-medium mb-2 active:scale-95 border-2 border-[#9FFF8A] hover:text-[#9FFF8A]"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
