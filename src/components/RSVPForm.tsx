import React, { useState } from "react";

export default function RSVPForm() {
  const [attending, setAttending] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      setStatus("success");
      form.reset();
      setAttending(""); // reset select state
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <form
          name="rsvp"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Required hidden fields for Netlify */}
          <input type="hidden" name="form-name" value="rsvp" />
          <p className="hidden" aria-hidden="true">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label htmlFor="name" className="block text-lg text-[#565656] mb-2">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Type your name"
              required
              className="w-full border-0 border-b border-gray-300 rounded-none px-2 py-3 text-base focus:border-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="guests" className="block text-lg text-[#565656] mb-2">
              How many people?
            </label>
            <input
              id="guests"
              name="guests"
              type="number"
              min={1}
              placeholder="Enter amount"
              required
              className="w-full border-0 border-b border-gray-300 rounded-none px-2 py-3 text-base focus:border-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="attending" className="block text-lg text-[#565656] mb-2">
              Will you attend?
            </label>
            <select
              id="attending"
              name="attending"
              required
              className="w-full border-0 border-b border-gray-300 rounded-none px-2 py-3 text-base focus:border-gray-500 focus:outline-none bg-transparent"
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
            >
              <option value="">Yes/No</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-zinc-900 hover:bg-zinc-800 text-white text-lg md:text-xl py-6 rounded-lg"
          >
            Submit
          </button>
        </form>

        {/* Submission feedback */}
        {status === "success" && (
          <p className="mt-4 text-green-600">✅ Thank you! Your RSVP was sent.</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600">❌ Oops! Something went wrong. Try again.</p>
        )}
      </div>
    </section>
  );
}
