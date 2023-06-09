"use client";
import React, { FormEvent, useState } from "react";

function Contact() {
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reset validation status
    setIsNameValid(true);
    setIsEmailValid(true);

    // Get form data
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));

    // Validate name
    if (name?.trim() === "") {
      setIsNameValid(false);
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email as string)) {
      setIsEmailValid(false);
    }

    // If both name and email are valid, submit the form
    if (isNameValid && isEmailValid) {
      event.currentTarget.submit();
    }
  };
  return (
    <div
      id="contact"
      className={`w-full sm:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white min-h-[50em]`}
    >
      <div
        className={`flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full`}
      >
        <div className={`pb-8`}>
          <p className={`text-4xl font-bold inline border-b-4 border-gray-500`}>
            Contact
          </p>
          <p className={`py-6`}>
            Submit the form below to get in touch with me. This will send a
            response to me via getform.io.
          </p>
        </div>

        <div className={`flex justify-center items-center`}>
          <form
            onSubmit={handleFormSubmit}
            action="https://getform.io/f/363e128f-06ee-4548-a9f8-3d43eb13b288"
            method="POST"
            className={`flex flex-col w-full md:w-1/2`}
          >
            <label id="name-label" className={`mb-1`}>
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              aria-labelledby="name-label"
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4 ${
                !isNameValid ? "border-red-500" : ""
              }`}
              maxLength={50}
              required
            />
            <label id="email-label" className={`mb-1`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              aria-labelledby="email-label"
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4 ${
                !isEmailValid ? "border-red-500" : ""
              }`}
              maxLength={50}
              required
            />
            <label id="message-label" className={`mb-1`}>
              Message
            </label>
            <textarea
              name="message"
              rows={10}
              placeholder="Enter your message"
              aria-labelledby="message-label"
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none`}
              maxLength={400}
              required
            ></textarea>

            <button
              className={`text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300`}
            >
              Let&apos;s talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
