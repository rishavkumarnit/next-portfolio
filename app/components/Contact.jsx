"use client";
import React from "react";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", `${process.env.NEXT_PUBLIC_ACCESS_KEY}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data.success ? "Thanks! I'll get back to you soon. ✅" : "Something went wrong. Try again?");
      if (data.success) event.target.reset();
    } catch {
      setResult("Something went wrong. Try again?");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-11/12 max-w-3xl mx-auto py-8 scroll-mt-32">
      <h2 className="text-2xl font-bold mb-2">Get in touch 📮</h2>
      <p className="text-muted mb-8">
        Have a role, project, or just want to say hi? Drop a message below.
      </p>

      <form onSubmit={onSubmit} className="max-w-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="p-3 outline-none border border-border rounded-md bg-card text-fg placeholder:text-muted focus:border-fg transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="p-3 outline-none border border-border rounded-md bg-card text-fg placeholder:text-muted focus:border-fg transition"
          />
        </div>
        <textarea
          name="message"
          rows={4}
          placeholder="Your message"
          required
          className="w-full p-3 outline-none border border-border rounded-md bg-card text-fg placeholder:text-muted focus:border-fg transition mb-4"
        />
        <button
          type="submit"
          disabled={submitting}
          className="py-2.5 px-8 bg-fg text-bg font-bold rounded-md hover:opacity-85 transition disabled:opacity-50"
        >
          {submitting ? "Sending..." : "Submit"}
        </button>
        {result && <p className="mt-4 text-muted">{result}</p>}
      </form>
    </div>
  );
};

export default Contact;
