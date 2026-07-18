import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe2,
  BookOpen,
  Scale,
  LayoutGrid,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Sparkle,
} from "lucide-react";
import Particles from "../components/Particles";
import Countdown from "../components/Countdown";
import Reveal from "../components/Reveal";

const features = [
  {
    icon: Globe2,
    title: "International Seminar",
    desc: "A globally-minded seminar bringing together visionary speakers and participants from across borders.",
  },
  {
    icon: BookOpen,
    title: "Political Literacy",
    desc: "Equipping future leaders with the knowledge and critical thinking essential for civic engagement.",
  },
  {
    icon: Scale,
    title: "Ethical Leadership",
    desc: "Cultivating integrity-driven leadership that inspires trust, accountability, and excellence.",
  },
  {
    icon: LayoutGrid,
    title: "Expo Ormawa",
    desc: "A dynamic showcase of student organizations and their innovative contributions to society.",
  },
];

const timeline = [
  {
    date: "18 July – 05 September 2026",
    time: "Open 24 Hours",
    title: "Registration",
    desc: "Google Form / BEM POLSRI Secretariat",
    isHeader: true,
  },
  {
    date: "13 September 2026",
    time: "07:45–08:45",
    title: "Opening Ceremony",
    desc: "Grand opening of INSPIRE 2026.",
  },
  {
    date: "13 September 2026",
    time: "08:45–11:50",
    title: "International Seminar",
    desc: "Keynote by Sherly Annavita Rahmi.",
  },
  {
    date: "13 September 2026",
    time: "11:50–11:55",
    title: "Closing Seminar",
    desc: "Seminar closing remarks.",
  },
  {
    date: "14 September 2026",
    time: "07:45–08:45",
    title: "Opening Expo",
    desc: "Doors open for Expo Ormawa.",
  },
  {
    date: "14 September 2026",
    time: "09:00–12:00",
    title: "Expo Ormawa",
    desc: "Student organization exhibitions.",
  },
  {
    date: "14 September 2026",
    time: "13:30–15:10",
    title: "Official Closing Ceremony",
    desc: "Grand closing of INSPIRE 2026.",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <Particles count={25} />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-cinzel text-6xl md:text-7xl lg:text-8xl font-bold text-gradient-gold-shimmer leading-tight"
              >
                INSPIRE
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-ivory/90 font-cormorant font-normal italic">
                  2026
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 font-cormorant text-lg md:text-xl text-ivory/70 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                International Seminar on Political Literacy, Integrity,
                Responsible Leadership, and Expo
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 font-poppins text-base text-gold/80 font-medium"
              >
                Empowering Ethical Leaders and Inspiring Organizational
                Excellence
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-2 font-cormorant text-lg text-ivory/50 italic"
              >
                Showcase Innovation, Inspire Action.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/contact" className="btn-gold group">
                  Register Seminar
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link to="/about" className="btn-outline-gold group">
                  Explore Event
                  <Sparkles
                    size={18}
                    className="group-hover:rotate-12 transition-transform"
                  />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-ivory/40"
              >
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} className="text-gold" />
                  <span>13–14 September 2026</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-gold" />
                  <span>Politeknik Negeri Sriwijaya</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 blur-[80px] rounded-full scale-150" />
                <img
                  src="/assets/images/maskot.png"
                  alt="Pyra the Phoenix"
                  className="relative z-10 w-72 md:w-96 lg:w-[420px] w-auto animate-float drop-shadow-[0_0_40px_rgba(255,215,0,0.3)]"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 rounded-full border-2 border-gold/40 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-gold"
            />
          </div>
        </motion.div>
      </section>

      {/* COUNTDOWN */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="font-poppins text-sm text-gold/60 uppercase tracking-[0.3em] mb-3">
                Counting Down
              </p>
              <h2 className="section-title">The Journey Begins In</h2>
              <p className="mt-4 section-subtitle">
                September 13, 2026 — Politeknik Negeri Sriwijaya
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Countdown />
          </Reveal>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-poppins text-sm text-gold/60 uppercase tracking-[0.3em] mb-3">
                Why Join
              </p>
              <h2 className="section-title">Why Join INSPIRE</h2>
              <p className="mt-4 section-subtitle">
                Four pillars of an extraordinary experience
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="group glass rounded-3xl p-8 h-full transition-all duration-500 hover:border-gold/40 hover:bg-gold/5 hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-2xl glass-gold flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]">
                    <f.icon size={26} className="text-gold" />
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-ivory mb-3 group-hover:text-gold transition-colors">
                    {f.title}
                  </h3>
                  <p className="font-poppins text-sm text-ivory/60 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SPEAKER */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-poppins text-sm text-gold/60 uppercase tracking-[0.3em] mb-3">
                Featured Speaker
              </p>
              <h2 className="section-title">Meet Our Keynote</h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2 items-center">
                <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-burgundy/30 to-charcoal-800 overflow-hidden">
                  <img
                    src="/assets/images/Sherly Annavita Rahmi.png"
                    alt="Sherly Annavita Rahmi"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="p-8 md:p-12">
                  <h3 className="font-cinzel text-3xl font-bold text-gradient-gold">
                    Sherly Annavita Rahmi
                  </h3>
                  <p className="mt-2 font-poppins text-sm text-gold/70 uppercase tracking-wider">
                    Keynote Speaker
                  </p>

                  <div className="mt-6 p-5 rounded-2xl glass-gold">
                    <p className="font-poppins text-xs text-gold/60 uppercase tracking-widest mb-2">
                      Presentation Topic
                    </p>
                    <p className="font-cormorant text-xl text-ivory italic">
                      "Ethical Leadership and Political Literacy"
                    </p>
                  </div>

                  <p className="mt-6 font-poppins text-sm text-ivory/60 leading-relaxed">
                    Sherly Annavita Rahmi is a distinguished advocate for
                    ethical governance and political literacy. With years of
                    experience in public discourse and leadership development,
                    she brings a powerful voice to the conversation on
                    responsible leadership and civic engagement.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-poppins text-sm text-gold/60 uppercase tracking-[0.3em] mb-3">
                Event Timeline
              </p>
              <h2 className="section-title">Two Days of Inspiration</h2>
              <p className="mt-4 section-subtitle">
                Every moment, meticulously crafted
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 md:-translate-x-1/2" />

            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 0.05} y={30}>
                <div
                  className={`relative flex items-center gap-6 mb-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gold -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(255,215,0,0.6)]" />

                  <div className="hidden md:block flex-1" />

                  <div
                    className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}
                  >
                    <div
                      className={`glass rounded-2xl p-6 transition-all duration-500 hover:border-gold/40 hover:bg-gold/5 ${item.isHeader ? "glass-burgundy" : ""}`}
                    >
                      <div
                        className={`flex items-center gap-2 mb-2 ${i % 2 !== 0 ? "md:justify-end" : ""}`}
                      >
                        <Clock size={14} className="text-gold" />
                        <span className="font-poppins text-xs text-gold/70 uppercase tracking-wider">
                          {item.time}
                        </span>
                      </div>
                      <h3 className="font-cinzel text-xl font-bold text-ivory mb-1">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-xs text-ivory/40 mb-2">
                        {item.date}
                      </p>
                      <p className="font-poppins text-sm text-ivory/60">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPO COMING SOON SECTION */}
      <section className="relative z-10 py-32 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-burgundy/10 blur-[130px] pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="group relative glass rounded-[2.5rem] p-8 md:p-16 border border-gold/20 hover:border-gold/40 transition-all duration-700 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden bg-charcoal/30 backdrop-blur-xl">
              {/* Background ambient accents */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-gold/15 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-1000" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-burgundy/20 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Left Side Info Area */}
                <div className="lg:col-span-6 text-center lg:text-left space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm shadow-[inset_0_0_12px_rgba(255,215,0,0.1)]">
                    <span className="font-poppins text-xs font-semibold uppercase tracking-[0.25em] bg-gradient-to-r from-gold via-ivory to-gold bg-[length:200%_auto] animate-text-shimmer text-transparent bg-clip-text">
                      Coming Soon
                    </span>
                    
                  </div>

                  <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold-shimmer tracking-wide leading-tight">
                    EXPO <br className="hidden lg:block" />
                    INSPIRE 2026
                  </h2>

                  <p className="font-cormorant text-xl md:text-2xl text-ivory/90 font-medium italic tracking-wide">
                    Sinergi, Inovasi, & Kreativitas Mahasiswa
                  </p>

                  <p className="font-poppins text-sm md:text-base text-ivory/60 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Membawa vibes baru yang dinamis dan interaktif.
                    Mempertemukan seluruh elemen organisasi kemahasiswaan dalam
                    display karya unggulan, kolaborasi strategis, dan perayaan
                    inovasi nyata. Persiapkan barisan dan nantikan info
                    resminya!
                  </p>

                  <div className="pt-4 flex justify-center lg:justify-start">
                    <div className="h-0.5 w-24 bg-gradient-to-r from-gold to-transparent rounded-full" />
                  </div>
                </div>

                {/* Right Side Poster Graphic Composition */}
                <div className="lg:col-span-6 flex justify-center items-center relative min-h-[400px]">
                  <div className="relative w-80 h-96 md:w-96 md:h-[420px] flex items-center justify-center">
                    {/* Dark Background Contrast Plate */}
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-charcoal-900/60 to-burgundy/40 border border-ivory/5 shadow-inner scale-105 pointer-events-none" />

                    {/* STACKED PAPERS COMPOSITION */}
                    <div className="absolute w-64 h-80 md:w-72 md:h-88 bg-ivory/10 rounded-xl shadow-md rotate-[-8deg] -translate-x-6 -translate-y-4 border border-gold/10 backdrop-blur-sm" />
                    <div className="absolute w-64 h-80 md:w-72 md:h-88 bg-burgundy/20 rounded-xl shadow-lg rotate-[-3deg] -translate-x-2 -translate-y-1 border border-gold/20 backdrop-blur-sm" />

                    {/* Front Principal Poster Canvas */}
                    <div className="absolute w-64 h-80 md:w-72 md:h-88 bg-gradient-to-b from-burgundy to-charcoal-900 rounded-xl shadow-[5px_15px_35px_rgba(0,0,0,0.5)] rotate-[3deg] translate-x-4 translate-y-3 p-6 flex flex-col justify-between overflow-hidden border border-gold/30 select-none">
                      <div className="flex justify-between items-center opacity-40 border-b border-gold/20 pb-2">
                        <span className="font-mono text-[9px] tracking-widest text-gold">
                          INSPIRE_2026 // POSTER_01
                        </span>
                        <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                      </div>

                      <div className="my-auto space-y-1 transform -rotate-1">
                        <div className="font-cinzel text-4xl md:text-5xl font-black text-gradient-gold tracking-tighter leading-none select-none">
                          COMING
                        </div>

                        <div className="flex items-center gap-1.5 py-0.5">
                          <div className="font-cinzel text-4xl md:text-5xl font-black text-gradient-gold tracking-tighter leading-none">
                            SOON
                          </div>

                          <div className="flex items-center text-gold pl-1 transform scale-110">
                            <div className="flex flex-col gap-0.5 items-end opacity-70 pr-0.5">
                              <div className="w-4 h-[2px] bg-gold rounded-full" />
                              <div className="w-6 h-[2px] bg-gold rounded-full" />
                              <div className="w-3 h-[2px] bg-gold rounded-full" />
                            </div>
                            <Clock
                              size={28}
                              strokeWidth={2.5}
                              className="animate-[spin_20s_linear_infinite]"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mt-2 pt-2 border-t border-dashed border-gold/20">
                        <div className="w-full bg-gold text-charcoal font-poppins text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] py-1.5 px-3 rounded-md shadow-sm transform -rotate-1 text-center">
                          SEMINAR &
                        </div>
                        <div className="w-[90%] bg-ivory/10 border border-gold/30 text-gold font-poppins text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] py-1.5 px-3 rounded-md shadow-sm transform rotate-1 text-center mx-auto backdrop-blur-sm">
                          EXPO ORMAWA
                        </div>
                      </div>
                    </div>

                    {/* IMMUTABLE INLINE VECTOR (SVG) MAGNIFYING GLASS */}
                    {/* Menggunakan kesatuan SVG murni sehingga rasio ukuran lingkaran dan gagang tidak akan terlepas saat animasi rotasi */}
                    <motion.div
                      animate={{
                        y: [-12, 12, -12],
                        x: [0, 6, 0],
                        rotate: [2, 12, 2],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute z-30 -top-4 -right-4 w-48 h-48 md:w-56 md:h-56 pointer-events-none filter drop-shadow-[15px_22px_24px_rgba(0,0,0,0.65)]"
                    >
                      <svg
                        viewBox="0 0 200 200"
                        className="w-full h-full"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* DEFS FOR LOOK & FEEL LUXURY ACCENTS */}
                        <defs>
                          {/* Bingkai Emas Gradasi */}
                          <linearGradient
                            id="goldRim"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#FFE58F" />
                            <stop offset="50%" stopColor="#D4B138" />
                            <stop offset="100%" stopColor="#9A7511" />
                          </linearGradient>
                          {/* Gagang Premium Burgundy/Charcoal Gradasi */}
                          <linearGradient
                            id="premiumHandle"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#1A1A1A" />
                            <stop offset="50%" stopColor="#581C24" />
                            <stop offset="100%" stopColor="#0D0D0D" />
                          </linearGradient>
                          {/* Lapisan Kaca Refleksi Semu */}
                          <radialGradient
                            id="glassShine"
                            cx="35%"
                            cy="35%"
                            r="60%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#FFFFFF"
                              stopOpacity="0.25"
                            />
                            <stop
                              offset="40%"
                              stopColor="#FFFFFF"
                              stopOpacity="0.05"
                            />
                            <stop
                              offset="100%"
                              stopColor="#000000"
                              stopOpacity="0.4"
                            />
                          </radialGradient>
                        </defs>

                        {/* 1. GAGANG (Diletakkan di urutan awal agar posisinya berada di bawah ring lensa secara hierarki) */}
                        {/* Leher Logam Penghubung */}
                        <path
                          d="M125 125 L142 142"
                          stroke="url(#goldRim)"
                          strokeWidth="12"
                          strokeLinecap="round"
                        />
                        {/* Batang Utama Gagang Pegangan */}
                        <path
                          d="M138 138 L185 185"
                          stroke="url(#premiumHandle)"
                          strokeWidth="16"
                          strokeLinecap="round"
                        />
                        {/* Ring Emas hiasan dekoratif di ujung terbawah gagang */}
                        <circle cx="182" cy="182" r="7" fill="url(#goldRim)" />
                        {/* Cincin pembatas emas bagian atas gagang */}
                        <circle cx="141" cy="141" r="9" fill="url(#goldRim)" />

                        {/* 2. LINGKARAN UTAMA LENSA */}
                        {/* Kaca Refleksi */}
                        <circle
                          cx="80"
                          cy="80"
                          r="54"
                          fill="url(#glassShine)"
                        />

                        {/* Garis Crosshair Target Fokus Minimalis Di Dalam Kaca */}
                        <path
                          d="M72 80 L88 80"
                          stroke="#D4B138"
                          strokeWidth="1"
                          strokeOpacity="0.3"
                        />
                        <path
                          d="M80 72 L80 88"
                          stroke="#D4B138"
                          strokeWidth="1"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx="80"
                          cy="80"
                          r="22"
                          stroke="#D4B138"
                          strokeWidth="1"
                          strokeDasharray="3 3"
                          strokeOpacity="0.2"
                        />

                        {/* Bingkai Logam Emas Tebal Luar (Rim Ring) */}
                        <circle
                          cx="80"
                          cy="80"
                          r="54"
                          stroke="url(#goldRim)"
                          strokeWidth="6"
                        />

                        {/* Efek Kilauan Refleksi Putih Kurva Atas Lensa */}
                        <path
                          d="M42 55 A45 45 0 0 1 118 55"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeOpacity="0.3"
                        />
                      </svg>
                 
                 
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
