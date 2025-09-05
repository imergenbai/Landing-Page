import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader } from "./ui/card";
import { toast } from "sonner@2.0.3";
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
        className="h-auto" 
        style={{ maxWidth: '2000px' }} 
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

// Ornamental divider SVG
function OrnamentalDivider() {
  return (
    <div className="flex justify-center">
      <svg className="w-full max-w-[200px] h-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 144 109">
        <g>
          <path d={svgPaths.p29cbc480} fill="white" />
          <path d={svgPaths.pc3fb500} fill="white" />
          <path d={svgPaths.p4494a00} fill="white" />
          <path d={svgPaths.p1c4fec00} fill="white" />
          <path d={svgPaths.p4e5d80} fill="white" />
          <path d={svgPaths.p1919e100} fill="white" />
          <path d={svgPaths.p2fe00280} fill="white" />
          <path d={svgPaths.p2c67a340} fill="white" />
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.guests || !formData.attending) {
      toast.error("Please fill in all fields");
      return;
    }
    
    console.log("RSVP submitted:", formData);
    toast.success("Thank you for your RSVP! We can't wait to celebrate with you.");
    
    // Reset form
    setFormData({
      name: "",
      guests: "",
      attending: ""
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
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
          style={{ backgroundImage: `url('${imgGroup897}')` }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-8">
            <div 
              className="w-36 h-[109px] mx-auto bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${imgVector1}')` }}
            />
          </div>
          
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 font-normal italic tracking-wide px-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            You're invited to The Wedding of
          </h1>
          
          <div className="mb-8">
            <CoupleNames />
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal italic tracking-wide px-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Saturday, 8<sup className="text-sm">th</sup> of November, 2025
          </p>
        </div>
        
        {/* Scroll indicator */}
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
          
          <div className="grid md:grid-cols-2 gap-0 max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg">
            {/* Ceremony */}
            <div className="relative h-[400px] md:h-[500px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${imgImage31}')` }}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 bg-[#f2f2f2] md:bg-transparent p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-light mb-4 md:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>12:00</h3>
                <p className="text-lg md:text-xl font-semibold md:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Church of Maria Bunda Karmel</p>
              </div>
            </div>
            
            {/* Reception */}
            <div className="relative h-[400px] md:h-[500px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${imgImage32}')` }}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 bg-[#f2f2f2] md:bg-transparent p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center md:text-right">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-light mb-4 md:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>19:00</h3>
                <p className="text-lg md:text-xl font-semibold md:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Angke Restaurant Ketapang</p>
              </div>
            </div>
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
              
              {/* Restricted Colors */}
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
              
              {/* Restrictions */}
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

      <form
  name="rsvp"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  className="space-y-6"
>
  {/* Required hidden input for Netlify */}
  <input type="hidden" name="form-name" value="rsvp" />

  {/* Honeypot */}
  <p className="hidden" aria-hidden="true">
    <label>
      Don’t fill this out: <input name="bot-field" />
    </label>
  </p>

  <div>
    <Label htmlFor="name" className="text-lg md:text-xl text-[#565656] mb-2 block" style={{ fontFamily: "'Playfair Display', serif" }}>
      Your Name
    </Label>
    <Input
      id="name"
      name="name"  // 🔑 added
      type="text"
      placeholder="Type your name"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      className="border-0 border-b border-gray-300 rounded-none px-2 py-3 text-base focus:border-gray-500 focus-visible:ring-0"
      style={{ fontFamily: "'Playfair Display', serif" }}
      required
    />
  </div>
  
  <div>
    <Label htmlFor="guests" className="text-lg md:text-xl text-[#565656] mb-2 block" style={{ fontFamily: "'Playfair Display', serif" }}>
      How many people?
    </Label>
    <Input
      id="guests"
      name="guests"  // 🔑 added
      type="number"
      placeholder="Enter amount"
      value={formData.guests}
      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
      className="border-0 border-b border-gray-300 rounded-none px-2 py-3 text-base focus:border-gray-500 focus-visible:ring-0"
      style={{ fontFamily: "'Playfair Display', serif" }}
      min="1"
      required
    />
  </div>
  
  <div>
    <Label htmlFor="attending" className="text-lg md:text-xl text-[#565656] mb-2 block" style={{ fontFamily: "'Playfair Display', serif" }}>
      Will you attend?
    </Label>
    <Select 
      value={formData.attending} 
      onValueChange={(value) => setFormData({ ...formData, attending: value })}
      required
    >
      <SelectTrigger className="border-0 border-b border-gray-300 rounded-none px-2 py-3 text-base focus:border-gray-500 focus-visible:ring-0" style={{ fontFamily: "'Playfair Display', serif" }}>
        <SelectValue placeholder="Yes/No" />
      </SelectTrigger>
      <SelectContent style={{ fontFamily: "'Playfair Display', serif" }}>
        <SelectItem value="yes">Yes</SelectItem>
        <SelectItem value="no">No</SelectItem>
      </SelectContent>
    </Select>

    {/* Hidden input so Netlify sees the value */}
    <input type="hidden" name="attending" value={formData.attending} />
  </div>
  
  <Button 
    type="submit" 
    className="w-full bg-zinc-900 hover:bg-zinc-800 text-white text-lg md:text-xl py-6 rounded-lg"
    style={{ fontFamily: "'Playfair Display', serif" }}
  >
    Submit
  </Button>
</form>


      {/* RSVP Form Section */}
      {/* {<section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>Form</h2>
              <UpArrowIcon />
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 md:p-8 shadow-lg">
              <CardHeader className="text-center pb-6">
                <h3 className="text-3xl md:text-4xl font-normal italic text-zinc-900" style={{ fontFamily: "'Playfair Display', serif" }}>RSVP</h3>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg md:text-xl text-[#565656] mb-2 block" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Type your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-0 border-b border-gray-300 rounded-none px-2 py-3 text-base focus:border-gray-500 focus-visible:ring-0"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="guests" className="text-lg md:text-xl text-[#565656] mb-2 block" style={{ fontFamily: "'Playfair Display', serif" }}>
                      How many people?
                    </Label>
                    <Input
                      id="guests"
                      type="number"
                      placeholder="Enter amount"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="border-0 border-b border-gray-300 rounded-none px-2 py-3 text-base focus:border-gray-500 focus-visible:ring-0"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      min="1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="attending" className="text-lg md:text-xl text-[#565656] mb-2 block" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Will you attend?
                    </Label>
                    <Select 
                      value={formData.attending} 
                      onValueChange={(value) => setFormData({ ...formData, attending: value })}
                      required
                    >
                      <SelectTrigger className="border-0 border-b border-gray-300 rounded-none px-2 py-3 text-base focus:border-gray-500 focus-visible:ring-0" style={{ fontFamily: "'Playfair Display', serif" }}>
                        <SelectValue placeholder="Yes/No" />
                      </SelectTrigger>
                      <SelectContent style={{ fontFamily: "'Playfair Display', serif" }}>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-zinc-900 hover:bg-zinc-800 text-white text-lg md:text-xl py-6 rounded-lg"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> } */}
    </div>
  );
}