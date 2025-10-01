import React, { useState } from "react";

// UI (shadcn/ui)
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader } from "./ui/card";

// Toasts
import { toast } from "sonner";

// Styles & assets
import "./weddinginvitation.css";
import svgPaths from "../imports/svg-4to3gamy3s";
import coupleNames from "../assets/couple-names.svg";
import imgGroup897 from "figma:asset/6a9488531aff11119fcce6c0f24f53c91faa38c0.png";
import imgImage32 from "figma:asset/a9b7b939ae7546b66e242e814f807b1ca7e30a0e.png";
import imgImage31 from "figma:asset/ed0f06480b9d00ae68608c4c6e87d141b1989b26.png";
import imgVector1 from "figma:asset/9c5bd42a316516ab117bef97c62bdea84c51b0c7.png";

/** Normalize imported assets to a URL string (handles figma:asset objects) */
function getAssetUrl(a: unknown): string {
  if (!a) return "";
  if (typeof a === "string") return a;
  if (typeof a === "object" && a !== null && "src" in (a as any)) return (a as any).src as string;
  return String(a);
}

// Decorative SVG component for the couple names
function CoupleNames() {
  return (
    <div className="flex justify-center">
      <svg
        className="h-auto w-full max-w-lg"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1156 235"
        role="img"
        aria-label="Couple names"
      >
        <g>
          <path d={svgPaths.p359ecd00} fill="white" />
          <path d={svgPaths.p3caa2200} fill="white" />
          <path d={svgPaths.p362ca700} fill="white" />
          <path d={svgPaths.p10037c00} fill="white" />
          <path d={svgPaths.pf9e8200} fill="white" />
          <path d={svgPaths.p5723e00} fill="white" />
          <path d={svgPaths.p2383ba00} fill="white" />
          <path d={svgPaths.p23313180} fill="white" />
          <path d={svgPaths.p25796080} fill="white" />
        </g>
      </svg>
    </div>
  );
}

// Arrow icon component for section headers
function UpArrowIcon() {
  return (
    <svg className="w-8 h-8 transform scale-y-[-100%]" fill="none" viewBox="0 0 32 32" aria-hidden>
      <g clipPath="url(#clip0_6_136)">
        <path d={svgPaths.p16bd3900} stroke="currentColor" strokeWidth="1.33333" />
      </g>
      <defs>
        <clipPath id="clip0_6_136">
          <rect fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
}

// Icon components for dress code restrictions
function TShirtIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" aria-hidden>
      <path d={svgPaths.p11042520} fill="currentColor" />
    </svg>
  );
}

function SneakerIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" aria-hidden>
      <path d={svgPaths.p2a45d680} fill="currentColor" />
    </svg>
  );
}

function ShortsIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 29 29" aria-hidden>
      <path d={svgPaths.p2c8a3780} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p32b03f80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

// replace your mapBtnClass with:
const mapBtnClass =
  "inline-flex items-center justify-center w-auto max-w-fit px-6 py-3 rounded-md " +
  "bg-white text-black text-base font-medium " +         // solid white, black text
  "hover:bg-gray-100 active:bg-gray-200 " +              // natural hover/active shades
  "transition-colors duration-300 ease-in-out";


export default function WeddingInvitation() {
  const heroBgUrl = getAssetUrl(imgGroup897);
  const ceremonyBgUrl = getAssetUrl(imgImage31);
  const receptionBgUrl = getAssetUrl(imgImage32);
  const logoUrl = getAssetUrl(imgVector1);
  const coupleNamesUrl = getAssetUrl(coupleNames);

  const [formData, setFormData] = useState({ name: "", guests: "" });

  // Netlify encoder
  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.guests) {
      toast.error("Please fill in all fields");
      return;
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "rsvp", ...formData }),
    })
      .then(() => {
        toast.success("Thank you for your RSVP! We can't wait to celebrate with you.");
        setFormData({ name: "", guests: "" });
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again.");
        console.error(error);
      });
  };

  const restrictedColors = ["#f6e8cb", "#f0dbc2", "#f7c5ad", "#f7e7cf", "#f7e5c6", "#f7f7f7", "#eaeaea", "#d1d5db"];

  return (
    <div className="min-h-screen bg-[#f2f2f2] text-[#444444] scroll-smooth">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: heroBgUrl ? `url("${heroBgUrl}")` : undefined }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden />

        {/* Logo */}
        <div
          style={{ width: "154px", height: "169px", backgroundImage: `url("${logoUrl}")` }}
          className="absolute top-4 left-1/2 -translate-x-1/2 mt-12 bg-contain bg-center bg-no-repeat z-[999]"
          aria-hidden
        />

        {/* Content */}
        <div className="relative z-[100] text-center text-white px-4">
          <h1
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 font-normal italic tracking-wide px-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            You're invited to the Wedding of
          </h1>

          <div className="mb-8">
            <img src={coupleNamesUrl} alt="Islam & Gracia" className="mx-auto w-80 sm:w-96 md:w-[28rem]" draggable={false} />
          </div>

          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal italic tracking-wide px-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Saturday, 8<sup className="text-sm">th</sup> of November, 2025
          </p>
        </div>

        {/* Scroll button */}
        <button
          onClick={() => document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer group z-[100]"
          aria-label="Scroll to locations"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
              Locations
            </span>
            <svg className="w-6 h-6 animate-bounce group-hover:animate-none transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m19 9-7 7-7-7" />
            </svg>
          </div>
        </button>
      </section>

      

      {/* Locations Section */}
      <section id="locations" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                Locations
              </h2>
              <UpArrowIcon />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg">
            {/* Ceremony card */}
            <div className="relative h-[400px] md:h-[500px] group">
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: ceremonyBgUrl ? `url("${ceremonyBgUrl}")` : undefined }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" aria-hidden />

              {/* Content */}
              <div className="relative z-[1] p-8 md:p-12 lg:p-16 h-full
                flex flex-col justify-center items-center md:items-start gap-8">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  12:00
                </h3>
                <p className="text-lg md:text-xl font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Maria Bunda Karmel Catholic Church
                </p>
                <a
                  href="https://maps.google.com/?q=Maria+Bunda+Karmel+Church"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mapBtnClass} btn-map`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Open Map
                </a>
              </div>

              {/* Full-card click target */}
              <a
                href="https://maps.google.com/?q=Maria+Bunda+Karmel+Church"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-0 focus:outline-none"
                tabIndex={-1}
                aria-hidden="true"
                role="presentation"
              />
            </div>

            {/* Reception card */}
            <div className="relative h-[400px] md:h-[500px] group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: receptionBgUrl ? `url("${receptionBgUrl}")` : undefined }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" aria-hidden />

              <div className="relative z-[1] p-8 md:p-12 lg:p-16 h-full
                flex flex-col justify-center items-center md:items-end gap-8
                text-center md:text-right">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  19:00
                </h3>
                <p className="text-lg md:text-xl font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Angke Restaurant Ketapang
                </p>
                <div className="flex justify-end">
                <a
                  href="https://www.google.com/maps/place/Angke+Restaurant+-+Ketapang/@-6.1621017,106.8104843,4452m/data=!3m1!1e3!4m6!3m5!1s0x2e69f6758d7769d5:0x3a72f6d89bf44ba4!8m2!3d-6.1599069!4d106.8167709!16s%2Fg%2F1tsw5cx0?entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mapBtnClass} btn-map self-center md:self-end`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Open Map
                </a>
              </div>
              </div>

              <a
                href="https://maps.google.com/?q=Angke+Restaurant+Ketapang"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-0 focus:outline-none"
                tabIndex={-1}
                aria-hidden="true"
                role="presentation"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Dress Code Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                Dress Code
              </h2>
              <UpArrowIcon />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Formalwear
              </h3>

              <div className="mb-8">
                <h4 className="text-xl md:text-2xl font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Restricted Colours
                </h4>
                <div className="text-base md:text-lg mb-4 px-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  No Champagne or White.
                </div>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Restrictions
                </h4>
                <div className="flex justify-center gap-8 md:gap-12 flex-wrap">
                  <div className="flex items-center gap-3">
                    <TShirtIcon />
                    <span className="text-base md:text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                      No T-Shirts
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShortsIcon />
                    <span className="text-base md:text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                      No Shorts
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <SneakerIcon />
                    <span className="text-base md:text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                      No Sneakers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Form Section */}
      <section className="py-16 md:py-24 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                Kindly Respond
              </h2>
              <UpArrowIcon />
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-6 md:p-8 shadow-2xl rounded-lg border-0">
              <CardHeader className="text-center pb-6">
                <h3 className="text-3xl md:text-4xl font-normal italic text-zinc-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                  RSVP
                </h3>
              </CardHeader>
              <CardContent>
                <form
                  name="rsvp"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <input type="hidden" name="form-name" value="rsvp" />
                  <p className="hidden" aria-hidden>
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  {/* Names */}
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-lg md:text-xl text-[#565656] mb-2 block"
                      style={{
                        fontWeight: 400,
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                      }}
                    >
                      Your name(s)
                    </Label>
                    <Input
                      id="name"
                      name="name" // Netlify needs this
                      type="text"
                      placeholder="Type full name(s)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-0 border-b-2 border-gray-300 mb-6 rounded-lg px-3 text-base focus:border-zinc-600 focus-visible:ring-0 transition-colors"
                      style={{
                        height: 40, // hard override to ensure taller field
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                      }}
                      required
                    />
                  </div>

                  {/* Guest count */}
                  <div>
                    <Label
                      htmlFor="guests"
                      className="text-lg md:text-xl text-[#565656] mb-2 block"
                      style={{
                        fontWeight: 400,
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                      }}
                    >
                      How many people?
                    </Label>
                    <Input
                      id="guests"
                      name="guests" // Netlify needs this
                      type="number"
                      placeholder="Enter total number of guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full border-0 border-b-2 border-gray-300 rounded-lg px-3 mb-8 text-base focus:border-zinc-600 focus-visible:ring-0 transition-colors"
                      style={{
                        height: 40, // hard override
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                      }}
                      inputMode="numeric"
                      step={1}
                      min={1}
                      required
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full bg-zinc-900 hover:bg-zinc-700 text-white text-xl md:text-2xl rounded-lg h-[160px] transition-colors duration-300 ease-in-out"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
