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
  Instagram,
  Sparkles,
} from "lucide-react";
import Particles from "../components/Particles";
import Countdown from "../components/Countdown";
import Counter from "../components/Counter";
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
        {/* Subtle background glow */}
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

            {/* Right: Phoenix mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow behind mascot */}
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
                {/* Speaker image */}
                <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-burgundy/30 to-charcoal-800 overflow-hidden">
                  <img
                    src="/assets/images/Sherly Annavita Rahmi.png"
                    alt="Sherly Annavita Rahmi"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Speaker info */}
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
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 md:-translate-x-1/2" />

            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 0.05} y={30}>
                <div
                  className={`relative flex items-center gap-6 mb-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gold -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(255,215,0,0.6)]" />

                  {/* Spacer for desktop */}
                  <div className="hidden md:block flex-1" />

                  {/* Card */}
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

      {/* STATISTICS */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-poppins text-sm text-gold/60 uppercase tracking-[0.3em] mb-3">
                By The Numbers
              </p>
              <h2 className="section-title">Event Statistics</h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass rounded-3xl p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <Counter end={1000} suffix="+" label="Participants" />
                <Counter end={30} suffix="+" label="Student Organizations" />
                <Counter end={1} suffix="" label="International Seminar" />
                <Counter end={1} suffix="" label="Expo" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center">
              {/* Gold gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold via-gold-400 to-gold-600" />
              <div className="absolute inset-0 bg-charcoal-900/20" />

              {/* Decorative glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/20 blur-[80px] rounded-full" />

              <div className="relative z-10">
                <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-charcoal-900 mb-4">
                  Be Part of Something Extraordinary
                </h2>
                <p className="font-cormorant text-xl text-charcoal-900/70 italic mb-8 max-w-2xl mx-auto">
                  Join 1000+ participants, 30+ student organizations, and
                  visionary leaders at INSPIRE 2026.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-charcoal-900 text-gold font-poppins font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Register Now
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
