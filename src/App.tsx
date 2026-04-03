/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, CheckCircle2, Plus, Truck, MapPin, Anchor } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function App() {
  const phoneNumber = "023 9200 0000"; // Placeholder Portsmouth number
  const [expandedStep, setExpandedStep] = useState<number>(1);
const handleLocationShare = () => {
    const phone = "447366302341";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const mapLink = "https://www.google.com/maps?q=" + lat + "," + lng;
          const message = encodeURIComponent("URGENT: I need recovery. My location: " + mapLink);
          window.open("https://wa.me/" + phone + "?text=" + message, "_blank");
        },
        () => {
          // If they hit 'Block', open WhatsApp anyway with this:
          const failMsg = encodeURIComponent("URGENT: I need recovery assistance. (Location blocked).");
          window.open("https://wa.me/" + phone + "?text=" + failMsg, "_blank");
        }
      );
    }
  };
  const steps = [
    {
      id: 1,
      title: "1. Call & Quote",
      icon: (
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        >
          <Phone className="w-6 h-6" />
        </motion.div>
      ),
      description: "TAP THE ORANGE BUTTON ABOVE OR BELOW. Our local team answers 24/7. Provide your location and problem details.",
      hasButton: true,
    },
    {
      id: 2,
      title: "2. Dispatch & ETA",
      icon: (
        <div className="flex gap-1">
          <motion.div
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Truck className="w-5 h-5" />
          </motion.div>
          <MapPin className="w-5 h-5" />
        </div>
      ),
      description: "MATCHED WITH LOCAL VETTED SPECIALIST. We dispatch the nearest recovery vehicle to your exact GPS location for the fastest possible response.",
      shortDesc: "MATCHED WITH LOCAL VETTED SPECIALIST...",
    },
    {
      id: 3,
      title: "3. Recovery & Fix",
      icon: (
        <motion.div
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Anchor className="w-6 h-6" />
        </motion.div>
      ),
      description: "DAMAGE-FREE TOW TO YOUR DESIRED LOCATION. Whether it's a roadside repair or a tow to a garage, we ensure your vehicle is handled with care.",
      shortDesc: "DAMAGE-FREE TOW TO YOUR DESIRED...",
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-black text-white selection:bg-orange-500 selection:text-white relative">
      {/* Background Image with Dark Overlay - Fixed to cover scroll */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://github.com/dxk8dxk54q-ship-it/Recovero/blob/main/images/breakdown2-recovery.jpg?raw=true"
          alt="Recovery Truck"
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="https://github.com/dxk8dxk54q-ship-it/Recovero/blob/main/images/recovero-logo.png?raw=true" 
              alt="Recovero24/7 Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-black font-black text-xl tracking-tighter uppercase">
            RECOVERO<span className="text-orange-600">24</span>/<span className="text-orange-600">7</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <motion.a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              backgroundColor: ["#f97316", "#ea580c", "#f97316"],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="hidden md:flex items-center gap-2 bg-orange-500 text-black font-black px-4 py-2 rounded-lg text-sm uppercase tracking-widest shadow-lg relative overflow-hidden"
          >
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            />
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              className="relative z-10"
            >
              <Phone className="w-4 h-4 fill-black" />
            </motion.div>
            <span className="relative z-10">CALL NOW</span>
          </motion.a>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative z-10 pt-24 pb-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center px-6 mb-16">
          <div className="w-full max-w-lg flex flex-col items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tighter mb-4"
            >
              FAST, RELIABLE <br />
              VEHICLE RECOVERY <br />
              <span className="text-orange-500">IN PORTSMOUTH</span> <br />
              & BREAKDOWN ASSISTANCE
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-medium text-gray-300 leading-tight mb-8 max-w-md"
            >
              Stranded in Portsmouth? Our network of vetted recovery specialists is ready to get you moving again.
            </motion.h2>

            <motion.ul 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full text-left space-y-4 mb-10"
            >
              {[
                "Rapid-response vehicles available across Portsmouth and nearby areas.",
                "We reach you faster by dispatching the nearest specialist in our network.",
                "Call now for an immediate ETA and a fixed price quote."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg font-medium text-gray-100">{text}</span>
                </li>
              ))}
            </motion.ul>

            <motion.a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ 
                scale: [1, 1.02, 1],
                y: [0, -4, 0],
                boxShadow: [
                  "0 10px 40px -10px rgba(249,115,22,0.5)",
                  "0 15px 50px -5px rgba(249,115,22,0.7)",
                  "0 10px 40px -10px rgba(249,115,22,0.5)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#ea580c", // orange-600
              }}
              whileTap={{ scale: 0.95 }}
              className="group w-full bg-orange-500 text-black font-black text-2xl py-6 px-4 rounded-xl flex items-center justify-center gap-4 transition-colors relative overflow-hidden"
            >
              {/* Shimmer Effect */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
              />
              <motion.div
                animate={{ rotate: [0, -20, 20, -20, 20, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="relative z-10"
              >
                <Phone className="w-8 h-8 fill-black" />
              </motion.div>
             <span className="tracking-tighter relative z-10">CALL FOR FAST DISPATCH</span>
        </motion.a>

        {/* --- NEW WHATSAPP BUTTON GOES HERE --- */}
        <button 
          onClick={handleLocationShare}
          className="mt-4 w-full bg-[#25D366] text-white font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-[#1DA851] transition-colors shadow-lg"
        >
          <MapPin className="w-6 h-6" />
          📍 SHARE EXACT LOCATION
        </button>
        {/* -------------------------------------- */}

        <p className="mt-4 text-xs font-bold tracking-widest uppercase text-gray-400">
          APPROVED NETWORK PARTNER | 24/7 SERVICE
        </p>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {["24/7", "UPFRONT QUOTE", "NO MEMBERSHIP"].map((badge) => (
                <span 
                  key={badge} 
                  className="bg-white text-black text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-wider"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-6 mb-24 max-w-lg mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 text-center md:text-left">
            HOW IT WORKS.
          </h2>

          <div className="relative pl-4">
            {/* Vertical Progress Line */}
            <div className="absolute left-[27px] top-6 bottom-6 w-1 bg-orange-500/30">
              <motion.div 
                className="w-full bg-orange-500 origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.id} className="relative flex gap-6">
                  {/* Numbered Circle */}
                  <button 
                    onClick={() => setExpandedStep(step.id)}
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-black text-xl transition-all shrink-0 ${
                      expandedStep === step.id 
                        ? "bg-orange-500 text-black scale-110 shadow-[0_0_20px_rgba(249,115,22,0.4)]" 
                        : "bg-gray-800 text-gray-400 border-2 border-orange-500/30"
                    }`}
                  >
                    {step.id}
                  </button>

                  {/* Panel */}
                  <div 
                    className={`flex-1 bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 transition-all cursor-pointer ${
                      expandedStep === step.id ? "ring-1 ring-orange-500/50" : ""
                    }`}
                    onClick={() => setExpandedStep(step.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${expandedStep === step.id ? "text-orange-500" : "text-gray-500"}`}>
                          {step.icon}
                        </div>
                        <h3 className={`font-black uppercase tracking-tight ${expandedStep === step.id ? "text-white" : "text-gray-400"}`}>
                          {step.title}
                        </h3>
                      </div>
                      {expandedStep !== step.id && (
                        <Plus className="w-5 h-5 text-orange-500" />
                      )}
                    </div>

                    <AnimatePresence initial={false}>
                      {expandedStep === step.id ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            {step.description}
                          </p>
                          {step.hasButton && (
                            <motion.button 
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              animate={{ scale: [1, 1.01, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-full bg-orange-500 text-black font-black py-3 rounded-lg text-sm uppercase tracking-widest hover:bg-orange-600 transition-colors relative overflow-hidden"
                            >
                              <motion.div
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                              />
                              <span className="relative z-10">GET QUOTE</span>
                            </motion.button>
                          )}
                        </motion.div>
                      ) : (
                        <p className="text-gray-500 text-xs truncate">
                          {step.shortDesc}
                        </p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="px-6 mb-24 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 w-full">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">
                SERVICE AREAS.
              </h2>
              <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-8">
                24/7 COVERAGE ACROSS THE SOUTH COAST
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Portsmouth", "Petersfield", "Winchester", 
                  "Andover", "Fareham", "Havant", 
                  "Waterlooville", "Gosport"
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 group cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-sm font-black uppercase tracking-tight text-gray-300 group-hover:text-white transition-colors">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-4 border-l-2 border-orange-500 bg-gray-900/40 backdrop-blur-sm">
                <p className="text-xs font-medium text-gray-400 leading-relaxed italic mb-4">
                  "Our network of vetted specialists ensures we have a recovery vehicle within 30-40 minutes of most locations in the South Coast area."
                </p>
                <motion.a
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-orange-500 text-black font-black px-4 py-2 rounded-lg text-xs uppercase tracking-widest"
                >
                  <motion.div
                    animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Phone className="w-4 h-4 fill-black" />
                  </motion.div>
                  <span>CALL FOR QUOTE</span>
                </motion.a>
              </div>
            </div>
            
            <div className="flex-1 w-full relative group">
              {/* Map Container - Restored to original Google Maps colors */}
              <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80630.93240899484!2d-1.12745345!3d50.8225027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487442a40733a121%3A0x808560064f774d0!2sPortsmouth!5e0!3m2!1sen!2suk!4v1711838400000!5m2!1sen!2suk"
                  className="w-full h-full border-0 transition-opacity duration-500"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Portsmouth Service Area Map"
                ></iframe>
                
                {/* Technical Labels */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest border border-orange-500/50 pointer-events-none">
                  LIVE REGION: PORTSMOUTH
                </div>
              </div>
              
              {/* Technical Labels Footer */}
              <div className="absolute -bottom-4 -right-4 bg-gray-900 border border-white/10 p-3 rounded-lg shadow-xl hidden md:block z-10">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-green-500">LIVE NETWORK STATUS</span>
                </div>
                <div className="text-[10px] font-mono text-gray-500 uppercase">
                  AVG ETA: 30-40 MIN
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Mobile CTA */}
      <motion.a
        href={`tel:${phoneNumber.replace(/\s/g, '')}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden fixed bottom-24 right-6 z-50 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-black"
      >
        <motion.div
          animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <Phone className="w-8 h-8 text-black fill-black" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-orange-500 rounded-full -z-10"
        />
      </motion.a>

      {/* Sticky Footer Location Ticker */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-orange-500 py-3 overflow-hidden border-t border-orange-600/20">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-4 px-4 text-black font-black text-sm uppercase tracking-widest">
            <span className="text-black/60">RECOVERO 24/7</span>
            <span>&gt; PETERSFIELD</span>
            <span>&gt; WINCHESTER</span>
            <span>&gt; ANDOVER</span>
            <span>&gt; FAREHAM</span>
            <span>&gt; HAVANT</span>
            <span>&gt; WATERLOOVILLE</span>
            <span>&gt; GOSPORT</span>
            <span className="bg-black text-orange-500 px-2 py-0.5 rounded ml-2 flex items-center gap-1">
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <Phone className="w-3 h-3 fill-orange-500" />
              </motion.div>
              {phoneNumber}
            </span>
            {/* Duplicate for seamless loop */}
            <span className="text-black/60 ml-4">RECOVERO 24/7</span>
            <span>&gt; PETERSFIELD</span>
            <span>&gt; WINCHESTER</span>
            <span>&gt; ANDOVER</span>
            <span>&gt; FAREHAM</span>
            <span>&gt; HAVANT</span>
            <span>&gt; WATERLOOVILLE</span>
            <span>&gt; GOSPORT</span>
            <span className="bg-black text-orange-500 px-2 py-0.5 rounded ml-2 flex items-center gap-1">
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <Phone className="w-3 h-3 fill-orange-500" />
              </motion.div>
              {phoneNumber}
            </span>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
