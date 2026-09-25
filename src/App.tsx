import React, { useState } from 'react';
import { 
  Activity, Shield, Sparkles, Award, ArrowRight, Check, CheckCircle2, 
  Calendar, Clock, MapPin, Phone, Mail, Flame, ThermometerSnowflake, 
  Droplets, Zap, UserCheck, Plus, Waves, SunMedium, HeartPulse
} from 'lucide-react';
import { AdminPortalModal } from './AdminPortalModal.tsx';

interface Service {
  id: string;
  name: string;
  category: string;
  tagline: string;
  price: string;
  duration: string;
  benefits: string[];
  specs: string;
  image: string;
}

const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Thermal Contrast Circuit (Fire & Ice)',
    category: 'VASODILATION & HRV',
    tagline: 'Custom cedar sauna heated to 212°F paired with 38°F filtered glacier cold plunge pools.',
    price: '$75 / session',
    duration: '50 Minutes',
    benefits: ['400% Norepinephrine Surge', 'Accelerated Lactic Clearance', 'Deep Autonomic Parasympathetic Reset', 'Lymphatic Muscle Pump'],
    specs: '38°F Plunge / 212°F Finnish Sauna',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's2',
    name: 'Hard-Shell Hyperbaric Oxygen (HBOT 2.0 ATA)',
    category: 'CELLULAR HYPOXIA REVERSAL',
    tagline: 'Medical-grade 100% pure oxygen pressurized to 2.0 atmospheres for deep tissue oxygen diffusion.',
    price: '$165 / session',
    duration: '60 Minutes',
    benefits: ['8x Stem Cell Mobilization', 'Cerebral Microcirculation', 'Collagen & Fibroblast Synthesis', 'Neuro-Inflammation Clearance'],
    specs: '2.0 ATA Pressure / 100% Medical O2',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's3',
    name: 'Cellular NAD+ & Micronutrient IV Lounge',
    category: 'INTRACELLULAR ATP INFUSION',
    tagline: 'High-dose coenzyme NAD+ (500mg) combined with Myers Cocktail and Glutathione IV push.',
    price: '$295 / infusion',
    duration: '90 Minutes',
    benefits: ['Immediate Sirtuin Gene Activation', 'Mitochondrial ATP Replenishment', 'Cognitive Brain Fog Eradication', 'Systemic Master Antioxidant'],
    specs: '500mg NAD+ / Glutathione Push',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's4',
    name: 'Full-Body Red Light & PBM Photobiomodulation',
    category: 'MITOCHONDRIAL PHOTONIC',
    tagline: 'Triple-spectrum 660nm & 850nm near-infrared LED array delivering 120 mW/cm² irradiance.',
    price: '$65 / session',
    duration: '20 Minutes',
    benefits: ['Cytochrome C Oxidase Uptake', 'Nitric Oxide Micro-Capillary Release', 'Rapid Skin Collagen Rebuilding', 'DOMS Muscle Soreness Reduction'],
    specs: '660nm + 850nm / 120 mW/cm²',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
  }
];

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [cart, setCart] = useState<Service[]>([]);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const toggleCart = (service: Service) => {
    if (cart.find(s => s.id === service.id)) {
      setCart(cart.filter(s => s.id !== service.id));
    } else {
      setCart([...cart, service]);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsBookModalOpen(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#08070d] text-purple-100 flex flex-col font-sans selection:bg-purple-500 selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#0e0a17] border-b border-purple-900/30 px-4 py-2 text-center text-xs tracking-wider text-slate-400 flex items-center justify-center space-x-3">
        <span className="flex items-center text-purple-400 font-mono font-semibold">
          <Sparkles className="w-3.5 h-3.5 mr-1" />
          HYPERBARIC & RECOVERY LAB CLINICAL OS
        </span>
        <span className="hidden sm:inline text-purple-800">•</span>
        <span className="hidden sm:inline">Contrast Circuit • HBOT 2.0 ATA • NAD+ Infusion Suites</span>
        <span className="text-purple-800">•</span>
        <button 
          onClick={() => setIsAdminOpen(true)}
          className="text-purple-400 hover:text-purple-300 font-mono text-[11px] underline ml-2 font-semibold"
        >
          [ STAFF PORTAL ]
        </button>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#08070d]/90 backdrop-blur-md border-b border-purple-950 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-700 flex items-center justify-center text-white font-extrabold shadow-lg shadow-purple-500/20">
              <ThermometerSnowflake className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-lg text-white font-mono flex items-center gap-1.5">
                RECOVERY<span className="text-purple-400">LAB</span>
              </span>
              <p className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">Contrast & Cellular Wellness OS</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#modalities" className="hover:text-purple-400 transition-colors">Modalities</a>
            <a href="#hbot" className="hover:text-purple-400 transition-colors">HBOT 2.0 Chamber</a>
            <a href="#iv-lounge" className="hover:text-purple-400 transition-colors">IV Lounge</a>
            <a href="#memberships" className="hover:text-purple-400 transition-colors">Memberships</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsBookModalOpen(true)}
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs tracking-wider transition-all shadow-lg shadow-purple-600/25 flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK SESSION</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 sm:px-8 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
              <ThermometerSnowflake className="w-3.5 h-3.5 text-cyan-400" />
              <span>ADVANCED HUMAN PERFORMANCE & REGENERATION</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Rapid Systemic Reset. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400">
                Cellular Recovery at Scale.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Step into private recovery suites engineered for elite restoration: clinical 2.0 ATA Hyperbaric Oxygen pods, sub-zero contrast cold immersion, infrared saunas, and doctor-prescribed NAD+ infusions.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsBookModalOpen(true)}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-sm transition-all shadow-xl shadow-purple-600/30 flex items-center justify-center space-x-2"
              >
                <span>RESERVE RECOVERY SUITE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#modalities"
                className="px-8 py-4 bg-slate-900/90 hover:bg-slate-800 border border-purple-900/50 rounded-xl text-sm font-semibold text-slate-200 transition-all flex items-center justify-center space-x-2"
              >
                <span>EXPLORE MODALITIES</span>
              </a>
            </div>

            {/* Metrics */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-purple-950">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">38°F</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Glacier Cold Plunge</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">2.0 ATA</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Medical Oxygen Depth</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">500mg</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Intracellular NAD+</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-purple-500/40 via-purple-950 to-slate-900 shadow-2xl">
              <div className="bg-[#0e0a17] rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-purple-900/60">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-purple-400 animate-ping"></div>
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">CHAMBER TELEMETRY FEED</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">ACTIVE SUITE 01</span>
                </div>

                <div className="space-y-4">
                  <div className="p-3.5 bg-black/60 border border-purple-900/40 rounded-xl">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Hyperbaric Pod Pressure (ATA)</span>
                      <span className="text-purple-400 font-mono font-bold">2.0 ATA (33ft Depth Equiv)</span>
                    </div>
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full w-[95%]"></div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-black/60 border border-purple-900/40 rounded-xl">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Thermal Contrast Plunge Temperature</span>
                      <span className="text-cyan-400 font-mono font-bold">38.4°F (Chilled & Filtered)</span>
                    </div>
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[92%]"></div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-black/60 border border-purple-900/40 rounded-xl">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Infrared Sauna Chamber Heat</span>
                      <span className="text-amber-400 font-mono font-bold">212°F (Far-Infrared Optimal)</span>
                    </div>
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-400 to-rose-500 h-full w-[88%]"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsBookModalOpen(true)}
                    className="w-full py-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 font-mono text-xs rounded-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <Activity className="w-4 h-4 text-purple-400" />
                    <span>Check Live Suite Availability</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section id="modalities" className="py-20 px-4 sm:px-8 bg-[#0b0813] border-t border-purple-950">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full">
              CLINICAL MODALITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Standardized Regeneration Protocols
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Book individual therapy sessions or combine them into an intensive multi-modality contrast & recovery circuit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const isInCart = !!cart.find(s => s.id === service.id);
              return (
                <div 
                  key={service.id}
                  className="bg-[#0f0b1a] border border-purple-950 hover:border-purple-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1a] via-transparent to-black/40"></div>
                    <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-purple-900/60 px-2.5 py-1 rounded-lg text-[10px] font-mono text-purple-300 uppercase">
                      {service.category}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-white text-base group-hover:text-purple-300 transition-colors">
                          {service.name}
                        </h3>
                        <span className="font-mono font-bold text-purple-400 text-sm">{service.price}</span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mt-2">
                        {service.tagline}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-purple-950">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Key Mechanisms:</span>
                      <ul className="text-xs space-y-1 text-slate-300">
                        {service.benefits.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-1.5">
                            <Check className="w-3 h-3 text-purple-400 flex-shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-purple-950 flex items-center justify-between gap-2">
                      <button
                        onClick={() => toggleCart(service)}
                        className={`flex-1 py-2 px-3 rounded-xl font-mono text-xs font-semibold transition-all flex items-center justify-center space-x-1.5 ${
                          isInCart 
                            ? 'bg-purple-600 text-white shadow-md' 
                            : 'bg-purple-950/60 hover:bg-purple-900/60 text-slate-200 border border-purple-800/50'
                        }`}
                      >
                        {isInCart ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>ADDED TO CIRCUIT</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-purple-400" />
                            <span>SELECT MODALITY</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HBOT 2.0 Chamber Section */}
      <section id="hbot" className="py-20 px-4 sm:px-8 bg-[#090710] border-t border-purple-950 scroll-mt-20">
        <div className="max-w-7xl mx-auto bg-[#0e0a17] border border-purple-900/50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full">
                HYPERBARIC OXYGEN 2.0 ATA
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
                Clinical Hard-Shell HBOT Chambers
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Pressurize to 2.0 ATA with 100% medical-grade oxygen. Drives up to 15x greater oxygen saturation into plasma, tissues, and mitochondrial energy cycles for neuro-recovery and stem cell mobilization.
              </p>
              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => setIsBookModalOpen(true)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold font-mono text-xs rounded-xl transition shadow-lg shadow-purple-900/40"
                >
                  RESERVE HBOT CHAMBER SESSION
                </button>
              </div>
            </div>

            <div className="p-6 bg-slate-900/60 border border-purple-900/40 rounded-2xl space-y-3 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-purple-950">
                <span className="text-slate-400">Atmospheric Pressure:</span>
                <span className="text-white font-bold">2.0 ATA (33ft Depth Equivalent)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-purple-950">
                <span className="text-slate-400">Oxygen Purity:</span>
                <span className="text-purple-400 font-bold">99.6% Medical-Grade USP</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">Session Protocol:</span>
                <span className="text-indigo-400 font-bold">60 or 90 Minutes with Air Breaks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IV Lounge Section */}
      <section id="iv-lounge" className="py-20 px-4 sm:px-8 bg-[#0b0813] border-t border-purple-950 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full">
              CELLULAR INFUSION LOUNGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              Physician-Formulated Micronutrient & NAD+ Drips
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              100% bioavailable intravenous therapy administered by certified RNs in zero-gravity ergonomic massage suites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#0e0a17] border border-purple-950 rounded-2xl">
              <span className="text-[10px] font-mono text-purple-400 uppercase">LONGEVITY PROTOCOL</span>
              <h4 className="text-lg font-bold text-white mt-2">Pure Cellular NAD+ (500mg)</h4>
              <p className="text-xs text-slate-400 mt-2">Mitochondrial repair, sirtuin activation, and cellular DNA rejuvenation.</p>
              <div className="mt-4 pt-4 border-t border-purple-950 text-xs font-mono text-purple-300 font-bold">$495 / Drip</div>
            </div>

            <div className="p-6 bg-[#0e0a17] border border-purple-950 rounded-2xl">
              <span className="text-[10px] font-mono text-indigo-400 uppercase">ATHLETIC RECHARGE</span>
              <h4 className="text-lg font-bold text-white mt-2">Glutathione & Amino Matrix</h4>
              <p className="text-xs text-slate-400 mt-2">High-dose master antioxidant flush paired with branched-chain amino acids.</p>
              <div className="mt-4 pt-4 border-t border-purple-950 text-xs font-mono text-indigo-300 font-bold">$225 / Drip</div>
            </div>

            <div className="p-6 bg-[#0e0a17] border border-purple-950 rounded-2xl">
              <span className="text-[10px] font-mono text-pink-400 uppercase">IMMUNITY & HYDRATION</span>
              <h4 className="text-lg font-bold text-white mt-2">Myers Cocktail Ultra</h4>
              <p className="text-xs text-slate-400 mt-2">Buffered vitamin C, B-complex, zinc sulfate, and balanced electrolytes.</p>
              <div className="mt-4 pt-4 border-t border-purple-950 text-xs font-mono text-pink-300 font-bold">$185 / Drip</div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section id="memberships" className="py-20 px-4 sm:px-8 bg-[#08070d] scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full">
              MONTHLY ALL-ACCESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Private Lounge Memberships
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Limited to 150 active members per clinic location to ensure zero wait times and guaranteed chamber reservations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0e0a17] border border-purple-950 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono text-slate-400 uppercase">TIER 1 // ATHLETE</span>
                <h3 className="text-2xl font-bold text-white">The Contrast Pass</h3>
                <div className="text-3xl font-extrabold text-purple-400 font-mono">$249 <span className="text-sm font-normal text-slate-500">/ mo</span></div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Unlimited access to thermal contrast suites: sub-zero cold plunge and Finnish cedar sauna.
                </p>
                <ul className="text-xs space-y-2 text-slate-300 pt-2 border-t border-purple-950">
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-purple-400" /> <span>Unlimited Daily Contrast Circuits</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-purple-400" /> <span>Complimentary Towel & Robe Service</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-purple-400" /> <span>10% Off IV Lounge & HBOT Pods</span></li>
                </ul>
              </div>
              <button onClick={() => setIsBookModalOpen(true)} className="w-full py-3 bg-purple-950 hover:bg-purple-900 border border-purple-800 text-white font-bold rounded-xl text-xs">
                JOIN CONTRAST CLUB
              </button>
            </div>

            <div className="bg-[#120c1f] border-2 border-purple-500 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between relative shadow-2xl shadow-purple-600/20">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-500 text-white font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                MOST POPULAR
              </div>
              <div className="space-y-4">
                <span className="text-xs font-mono text-purple-300 uppercase">TIER 2 // FOUNDERS</span>
                <h3 className="text-2xl font-bold text-white">The Longevity Core</h3>
                <div className="text-3xl font-extrabold text-white font-mono">$499 <span className="text-sm font-normal text-slate-400">/ mo</span></div>
                <p className="text-xs text-purple-200 leading-relaxed">
                  Full access to Contrast circuits + 4 Hyperbaric HBOT 2.0 ATA sessions and 1 NAD+ infusion monthly.
                </p>
                <ul className="text-xs space-y-2 text-slate-200 pt-2 border-t border-purple-900">
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-purple-400" /> <span>Unlimited Daily Contrast Circuits</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-purple-400" /> <span>4x HBOT 2.0 ATA Chambers / Month</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-purple-400" /> <span>1x 500mg NAD+ Infusion / Month</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-purple-400" /> <span>Priority Concierge Booking Gate</span></li>
                </ul>
              </div>
              <button onClick={() => setIsBookModalOpen(true)} className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs shadow-lg shadow-purple-600/30">
                JOIN LONGEVITY CORE
              </button>
            </div>

            <div className="bg-[#0e0a17] border border-purple-950 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono text-slate-400 uppercase">TIER 3 // EXECUTIVE VIP</span>
                <h3 className="text-2xl font-bold text-white">The Bio-Apex VIP</h3>
                <div className="text-3xl font-extrabold text-purple-400 font-mono">$899 <span className="text-sm font-normal text-slate-500">/ mo</span></div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Unlimited HBOT 2.0, unlimited contrast circuits, bi-weekly NAD+ drips, and private locker suite.
                </p>
                <ul className="text-xs space-y-2 text-slate-300 pt-2 border-t border-purple-950">
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-purple-400" /> <span>Unlimited HBOT & Contrast Access</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-purple-400" /> <span>2x 500mg NAD+ Drips / Month</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-purple-400" /> <span>Private Dedicated Locker & Valet</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-purple-400" /> <span>24/7 After-Hours Access Available</span></li>
                </ul>
              </div>
              <button onClick={() => setIsBookModalOpen(true)} className="w-full py-3 bg-purple-950 hover:bg-purple-900 border border-purple-800 text-white font-bold rounded-xl text-xs">
                APPLY FOR VIP ALL-ACCESS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-purple-950 bg-[#050408] px-4 sm:px-8 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <ThermometerSnowflake className="w-4 h-4 text-purple-400" />
              <span className="font-bold text-white font-mono tracking-wider">HYPERBARIC & RECOVERY LAB</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Medical wellness and human optimization operating system. Designed for hyperbaric centers, contrast therapy studios, and IV lounges.
            </p>
          </div>

          <div>
            <h5 className="font-mono text-white text-xs uppercase tracking-wider mb-3">Therapy Suites</h5>
            <ul className="space-y-1.5 text-slate-400">
              <li>HBOT 2.0 ATA Oxygen</li>
              <li>Glacier Cold Plunge (38°F)</li>
              <li>Finnish Cedar Sauna (212°F)</li>
              <li>Cellular NAD+ IV Drips</li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-white text-xs uppercase tracking-wider mb-3">Clinical Protocols</h5>
            <ul className="space-y-1.5 text-slate-400">
              <li>Ozone Water Filtration</li>
              <li>HIPAA Intake Encryption</li>
              <li>Medical Staff Supervised</li>
              <li>Supabase Row Level Security</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-mono text-white text-xs uppercase tracking-wider">Staff Door</h5>
            <p className="text-[11px] text-slate-400">
              Access the live chamber queue with the 1-click bypass passkey:
            </p>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-4 py-2 bg-purple-950/80 hover:bg-purple-900 border border-purple-700/50 text-purple-300 font-mono text-xs rounded-xl transition-all"
            >
              Staff Portal (/admin)
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-purple-950 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
          <div>© 2026 Hyperbaric & Recovery Lab OS. All Rights Reserved. Turnkey Clinical Operating System.</div>
          <div className="mt-2 sm:mt-0 font-mono text-purple-400">Passkey: recovery2026</div>
        </div>
      </footer>

      {/* Modals */}
      <AdminPortalModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      {/* Booking Modal */}
      {isBookModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0e0a17] border border-purple-500/40 rounded-2xl p-6 sm:p-8 text-slate-200 shadow-2xl">
            <button 
              onClick={() => setIsBookModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2"
            >
              ✕
            </button>

            {!bookingSuccess ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl text-purple-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Book Recovery Suite Reservation</h3>
                    <p className="text-xs text-slate-400">Select preferred modality and appointment time</p>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Full Legal Name</label>
                  <input required placeholder="Alexander Wright" className="w-full bg-slate-900 border border-purple-900/60 rounded-xl p-3 text-sm text-white focus:border-purple-500 outline-none" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Email</label>
                    <input required type="email" placeholder="alexander@example.com" className="w-full bg-slate-900 border border-purple-900/60 rounded-xl p-3 text-sm text-white focus:border-purple-500 outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Phone</label>
                    <input required type="tel" placeholder="+1 (555) 789-0123" className="w-full bg-slate-900 border border-purple-900/60 rounded-xl p-3 text-sm text-white focus:border-purple-500 outline-none" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Select Recovery Modality</label>
                  <select className="w-full bg-slate-900 border border-purple-900/60 rounded-xl p-3 text-sm text-white focus:border-purple-500 outline-none">
                    <option>Thermal Contrast Circuit (Sauna + Plunge) ($75)</option>
                    <option>Hard-Shell Hyperbaric Oxygen (HBOT 2.0 ATA) ($165)</option>
                    <option>Cellular NAD+ & Micronutrient IV Lounge ($295)</option>
                    <option>Full-Body Red Light & Photobiomodulation ($65)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs tracking-wider transition-all shadow-lg shadow-purple-600/25 mt-4"
                >
                  CONFIRM SUITE RESERVATION
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/50 rounded-full flex items-center justify-center mx-auto text-purple-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Suite Confirmed!</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Your recovery suite has been locked. Please arrive 10 minutes prior to your session for check-in and robe fitting.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
