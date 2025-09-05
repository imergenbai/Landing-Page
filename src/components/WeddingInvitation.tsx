import React, { useState } from "react";

// NOTE: Assuming these are your UI components from a library like shadcn/ui
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader } from "./ui/card";

// NOTE: Assuming 'sonner' is used for toast notifications
import { toast } from "sonner";

// NOTE: Assuming these are assets from your project setup
import "./weddinginvitation.css";
import svgPaths from "../imports/svg-4to3gamy3s";
import imgGroup897 from "figma:asset/6a9488531aff11119fcce6c0f24f53c91faa38c0.png";
import imgImage32 from "figma:asset/a9b7b939ae7546b66e242e814f807b1ca7e30a0e.png";
import imgImage31 from "figma:asset/ed0f06480b9d00ae68608c4c6e87d141b1989b26.png";
import imgVector1 from "figma:asset/9c5bd42a316516ab117bef97c62bdea84c51b0c7.png";

// Decorative SVG component for the couple names
function CoupleNames() {
  return (
    <div className="flex justify-center">
      <svg 
        className="h-auto w-full max-w-lg" 
        fill="none" 
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 1156 235">
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
    <svg className="w-8 h-8 transform scale-y-[-100%]" fill="none" viewBox="0 0 32 32">
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
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p11042520} fill="currentColor" />
    </svg>
  );
}

function SneakerIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p2a45d680} fill="currentColor" />
    </svg>
  );
}

function ShortsIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 29 29">
      <path d={svgPaths.p2c8a3780} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p32b03f80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export default function WeddingInvitation() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "",
    attending: ""
  });

  // This function handles the form submission logic for Netlify
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.guests || !formData.attending) {
      toast.error("Please fill in all fields");
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "rsvp", ...formData })
    })
    .then(() => {
        toast.success("Thank you for your RSVP! We can't wait to celebrate with you.");
        // Reset form
        setFormData({ name: "", guests: "", attending: "" });
    })
    .catch(error => {
        toast.error("Something went wrong. Please try again.");
        console.error(error);
    });
  };

  const restrictedColors = [
    "#f6e8cb", "#f0dbc2", "#f7c5ad", "#f7e7cf", "#f7e5c6", // Warm tones
    "#f7f7f7", "#eaeaea", "#d1d5db" // Light grays
  ];

  return (
    <div className="min-h-screen bg-[#f2f2f2] text-[#444444] scroll-smooth">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
          style={{ backgroundImage: `url('${imgGroup897}')` }}
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Logo (absolute top-center) */}
        <div 
          className="absolute top-4 left-1/2 -translate-x-1/2 w-36 h-[109px] bg-contain bg-center bg-no-repeat z-20"
          style={{ backgroundImage: `url('${imgVector1}')` }}
        />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 font-normal italic tracking-wide px-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            You're invited to The Wedding of
          </h1>
          
          <div className="mb-8">
            <img 
              src="src/assets/couple-names.svg" 
              alt="Sam & Gracia" 
              className="mx-auto w-80 sm:w-96 md:w-[28rem]" 
            />
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal italic tracking-wide px-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Saturday, 8<sup className="text-sm">th</sup> of November, 2025
          </p>
        </div>

        {/* Scroll button */}
        <button 
          onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer group"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>Locations</span>
            <svg className="w-6 h-6 animate-bounce group-hover:animate-none transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>Locations</h2>
              <UpArrowIcon />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg">
            
            {/* Ceremony */}
            <a 
              href="https://maps.google.com/?q=Maria+Bunda+Karmel+Church" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative h-[400px] md:h-[500px] group cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url('${imgImage31}')` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-light mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>12:00</h3>
                <p className="text-lg md:text-xl font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Maria Bunda Karmel Catholic Church</p>
              </div>
            </a>
            
            {/* Reception */}
            <a 
              href="https://maps.google.com/?q=Angke+Restaurant+Ketapang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative h-[400px] md:h-[500px] group cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url('${imgImage32}')` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center md:text-right">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-light mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>19:00</h3>
                <p className="text-lg md:text-xl font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Angke Restaurant Ketapang</p>
              </div>
            </a>
            
          </div>
        </div>
      </section>


      {/* Dress Code Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>Dress Code</h2>
              <UpArrowIcon />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Formalwear</h3>
              
              <div className="mb-8">
                <h4 className="text-xl md:text-2xl font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Restricted Colours</h4>
                <div className="flex justify-center gap-2 flex-wrap">
                  {restrictedColors.map((color, index) => (
                    <div 
                      key={index}
                      className="w-10 h-10 rounded border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl md:text-2xl font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Restrictions</h4>
                <div className="flex justify-center gap-8 md:gap-12 flex-wrap">
                  <div className="flex items-center gap-3">
                    <TShirtIcon />
                    <span className="text-base md:text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>No T-Shirts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShortsIcon />
                    <span className="text-base md:text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>No Shorts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <SneakerIcon />
                    <span className="text-base md:text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>No Sneakers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- RSVP Form Section (Corrected and Integrated) --- */}
      <section className="py-16 md:py-24 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>Kindly Respond</h2>
              <UpArrowIcon />
            </div>
          </div>
          
          {/* This container makes the form responsive and centered */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 md:p-8 shadow-2xl rounded-lg border-0">
              <CardHeader className="text-center pb-6">
                <h3 className="text-3xl md:text-4xl font-normal italic text-zinc-900" style={{ fontFamily: "'Playfair Display', serif" }}>RSVP</h3>
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
                  {/* Required hidden inputs for Netlify */}
                  <input type="hidden" name="form-name" value="rsvp" />
                  <p className="hidden" aria-hidden="true">
                    <label>Don’t fill this out: <input name="bot-field" /></label>
                  </p>

                  <div>
                    <Label htmlFor="name" className="text-lg md:text-xl text-[#565656] mb-2 block" style={{ fontWeight: 400, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"  }}>
                      Your name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Type your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-0 border-b-2 border-gray-300 mb-4 rounded-lg px-2 py-3 text-base focus:border-zinc-600 focus-visible:ring-0 transition-colors"
                      style={{  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"  }}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="guests" className="text-lg md:text-xl text-[#565656] mb-2 block" style={{ fontWeight: 400, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"  }}>
                      How many people?
                    </Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      placeholder="Enter total number of guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full border-0 border-b-2 border-gray-300 rounded-lg px-2 py-3 mb-4 text-base focus:border-zinc-600 focus-visible:ring-0 transition-colors"
                      style={{  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"  }}
                      min="1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="attending" className="text-lg md:text-xl text-[#565656] mb-2 block" style={{ fontWeight: 400, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"  }}>
                      Will you attend?
                    </Label>
                    <Select 
                      value={formData.attending} 
                      onValueChange={(value) => setFormData({ ...formData, attending: value })}
                      required
                    >
                      <SelectTrigger className="w-full border-0 border-b-2 border-gray-300 mb-8 rounded-lg px-2 py-3 text-base focus:border-zinc-600 focus-visible:ring-0 transition-colors" style={{  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"  }}>
                        <SelectValue placeholder="Please choose an option" />
                      </SelectTrigger>
                      <SelectContent style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }}>
                        <SelectItem value="Yes">Yes, with pleasure!</SelectItem>
                        <SelectItem value="No">No, with regrets.</SelectItem>
                      </SelectContent>
                    </Select>
                    {/* Hidden input to ensure Netlify captures the value from the custom Select component */}
                    <input type="hidden" name="attending" value={formData.attending} />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-zinc-900 hover:bg-zinc-700 space-y-4 text-white text-xl md:text-2xl py-7 rounded-lg transition-all"
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