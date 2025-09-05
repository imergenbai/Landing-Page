import { useState } from "react";

export default function RSVPForm() {
  const [attending, setAttending] = useState("");

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <form
          name="rsvp"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-6"
        >
          {/* Required for Netlify to register the form */}
          <input type="hidden" name="form-name" value="rsvp" />
          {/* Honeypot (anti-bot) */}
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

            {/* EITHER use native <select> … */}
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

            {/* If you insist on a custom Select component, keep it AND add:
            <input type="hidden" name="attending" value={attending} />
            so a real form value is submitted. */}
          </div>

          <button
            type="submit"
            className="w-full bg-zinc-900 hover:bg-zinc-800 text-white text-lg md:text-xl py-6 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
