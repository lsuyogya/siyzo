"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        website: formState.website,
        message: formState.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  return (
    <form
      className="grid md:grid-cols-2 gap-x-8 gap-y-2 px-[10%] border rounded py-8 shadow-md"
      onSubmit={handleFormSubmit}>
      <legend className=" col-span-full font-semi-bold">
        Send Us a Message
      </legend>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-b-2 appearance-none  border-gray-600 focus:border-primaryColor focus:outline-none focus:ring-0 peer"
          placeholder=" "
          onChange={handleChange}
          required
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
          Name
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="email"
          id="email"
          className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-b-2 appearance-none  border-gray-600 focus:border-primaryColor focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label
          htmlFor="email"
          className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
          Email
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="phone"
          name="phone"
          id="phone"
          className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-b-2 appearance-none  border-gray-600 focus:border-primaryColor focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label
          htmlFor="phone"
          className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
          Phone
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="Website"
          name="Website"
          id="Website"
          className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-b-2 appearance-none  border-gray-600 focus:border-primaryColor focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label
          htmlFor="Website"
          className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
          Website
        </label>
      </div>
      <div className="col-span-full  relative z-0 w-full mb-6 group">
        <textarea
          name="message"
          id="message"
          rows={5}
          className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-b-2 appearance-none  border-gray-600 focus:border-primaryColor focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label
          htmlFor="message"
          className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
          Message
        </label>
      </div>
      <button
        type="submit"
        className="bg-primaryColor w-[11rem] px-4 py-2 rounded col-span-full place-self-center text-white ">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
