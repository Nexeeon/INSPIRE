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
    <div className="relative overflow-x-hidden w-full">
      <Particles count={25} />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 pb-12 w-full">
        {/* Subtle background glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full bg-gold/5 blur-[100px] md:blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left w-full overflow-hidden"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-cinzel text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold-shimmer leading-tight tracking-wide break-words w-full"
              >
                INSPIRE
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 text-ivory/90 font-cormorant font-normal italic">
                  2026
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 md:mt-6 font-cormorant text-base sm:text-lg md:text-xl text-ivory/70 max-w-md sm:max-w-lg mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
              >
                International Seminar on Political Literacy, Integrity,
                Responsible Leadership, and Expo
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-3 md:mt-4 font-poppins text-sm sm:text-base text-gold/80 font-medium px-2 sm:px-0"
              >
                Empowering Ethical Leaders and Inspiring Organizational
                Excellence
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-2 font-cormorant text-base sm:text-lg text-ivory/50 italic px-2 sm:px-0"
              >
                Showcase Innovation, Inspire Action.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full px-4 sm:px-0 max-w-sm sm:max-w-none mx-auto"
              >
                <Link
                  to="/contact"
                  className="btn-gold group w-full sm:w-auto justify-center text-center"
                >
                  Register Seminar
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform inline-block ml-1"
                  />
                </Link>
                <Link
                  to="/about"
                  className="btn-outline-gold group w-full sm:w-auto justify-center text-center"
                >
                  Explore Event
                  <Sparkles
                    size={18}
                    className="group-hover:rotate-12 transition-transform inline-block ml-1"
                  />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start text-ivory/40"
              >
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <Calendar size={16} className="text-gold shrink-0" />
                  <span>13–14 September 2026</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <MapPin size={16} className="text-gold shrink-0" />
                  <span className="text-center sm:text-left">
                    Politeknik Negeri Sriwijaya
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Phoenix mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end w-full mt-4 lg:mt-0 overflow-hidden"
            >
              <div className="relative max-w-[240px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] w-full mx-auto lg:mr-0">
                {/* Glow behind mascot */}
                <div className="absolute inset-0 bg-gold/20 blur-[50px] md:blur-[80px] rounded-full scale-125 pointer-events-none" />
                <img
                  src="/assets/images/maskot.png"
                  alt="Pyra the Phoenix"
                  className="relative z-10 w-full h-auto max-h-[45vh] lg:max-h-none object-contain animate-float drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]"
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
          className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
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
      <section className="relative z-10 py-16 md:py-32 px-4 sm:px-6 w-full">
        <div className="max-w-5xl mx-auto w-full">
          <Reveal>
            <div className="text-center mb-8 md:mb-12 px-2">
              <p className="font-poppins text-xs sm:text-sm text-gold/60 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3">
                Counting Down
              </p>
              <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cinzel break-words">
                The Journey Begins In
              </h2>
              <p className="mt-3 md:mt-4 section-subtitle text-sm sm:text-base text-ivory/60">
                September 13, 2026 — Politeknik Negeri Sriwijaya
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="w-full overflow-hidden px-1">
              <Countdown />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="relative z-10 py-16 md:py-32 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal>
            <div className="text-center mb-10 md:mb-16 px-2">
              <p className="font-poppins text-xs sm:text-sm text-gold/60 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3">
                Why Join
              </p>
              <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cinzel break-words">
                Why Join INSPIRE
              </h2>
              <p className="mt-3 md:mt-4 section-subtitle text-sm sm:text-base text-ivory/60">
                Four pillars of an extraordinary experience
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="group glass rounded-3xl p-6 sm:p-8 h-full transition-all duration-500 hover:border-gold/40 hover:bg-gold/5 hover:-translate-y-1 md:hover:-translate-y-2 w-full box-border">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass-gold flex items-center justify-center mb-5 sm:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]">
                    <f.icon size={24} className="text-gold" />
                  </div>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-ivory mb-2 sm:mb-3 group-hover:text-gold transition-colors break-words">
                    {f.title}
                  </h3>
                  <p className="font-poppins text-xs sm:text-sm text-ivory/60 leading-relaxed break-words">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SPEAKER */}
      <section className="relative z-10 py-16 md:py-32 px-4 sm:px-6 w-full">
        <div className="max-w-5xl mx-auto w-full">
          <Reveal>
            <div className="text-center mb-10 md:mb-16 px-2">
              <p className="font-poppins text-xs sm:text-sm text-gold/60 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3">
                Featured Speaker
              </p>
              <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cinzel break-words">
                Meet Our Keynote
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass rounded-3xl overflow-hidden w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                {/* Speaker image */}
                <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-burgundy/30 to-charcoal-800 overflow-hidden pt-6 md:pt-0">
                  <img
                    src="/assets/images/Sherly Annavita Rahmi.png"
                    alt="Sherly Annavita Rahmi"
                    className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-none h-auto object-contain max-h-[40vh] md:max-h-none"
                  />
                </div>

                {/* Speaker info */}
                <div className="p-6 sm:p-8 md:p-12 w-full box-border">
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-gradient-gold break-words">
                    Sherly Annavita Rahmi
                  </h3>
                  <p className="mt-1 sm:mt-2 font-poppins text-xs sm:text-sm text-gold/70 uppercase tracking-wider">
                    Keynote Speaker
                  </p>

                  <div className="mt-4 sm:mt-6 p-4 sm:p-5 rounded-2xl glass-gold w-full box-border">
                    <p className="font-poppins text-[10px] sm:text-xs text-gold/60 uppercase tracking-widest mb-1 sm:mb-2">
                      Presentation Topic
                    </p>
                    <p className="font-cormorant text-lg sm:text-xl text-ivory italic break-words">
                      "Ethical Leadership and Political Literacy"
                    </p>
                  </div>

                  <p className="mt-4 sm:mt-6 font-poppins text-xs sm:text-sm text-ivory/60 leading-relaxed break-words">
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
      <section className="relative z-10 py-16 md:py-32 px-4 sm:px-6 w-full">
        <div className="max-w-4xl mx-auto w-full">
          <Reveal>
            <div className="text-center mb-10 md:mb-16 px-2">
              <p className="font-poppins text-xs sm:text-sm text-gold/60 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3">
                Event Timeline
              </p>
              <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cinzel break-words">
                Two Days of Inspiration
              </h2>
              <p className="mt-3 md:mt-4 section-subtitle text-sm sm:text-base text-ivory/60">
                Every moment, meticulously crafted
              </p>
            </div>
          </Reveal>

          <div className="relative w-full">
            {/* Vertical line */}
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 md:-translate-x-1/2" />

            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 0.05} y={30}>
                <div
                  className={`relative flex items-center gap-4 md:gap-6 mb-6 md:mb-8 w-full ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-3 md:left-1/2 w-3.5 h-3.5 rounded-full bg-gold -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(255,215,0,0.6)]" />

                  {/* Spacer for desktop */}
                  <div className="hidden md:block flex-1" />

                  {/* Card CONTAINER */}
                  <div
                    className={`flex-1 ml-8 md:ml-0 w-[calc(100%-2rem)] md:w-full ${
                      i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                    }`}
                  >
                    <div
                      className={`glass rounded-2xl p-5 sm:p-6 transition-all duration-500 hover:border-gold/40 hover:bg-gold/5 w-full box-border ${
                        item.isHeader ? "glass-burgundy" : ""
                      }`}
                    >
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          i % 2 !== 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <Clock size={14} className="text-gold shrink-0" />
                        <span className="font-poppins text-[10px] sm:text-xs text-gold/70 uppercase tracking-wider break-words">
                          {item.time}
                        </span>
                      </div>
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-ivory mb-1 break-words">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-[10px] sm:text-xs text-ivory/40 mb-2 break-words">
                        {item.date}
                      </p>
                      <p className="font-poppins text-xs sm:text-sm text-ivory/60 break-words">
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
      <section className="relative z-10 py-16 md:py-32 px-4 sm:px-6 w-full">
        <div className="max-w-5xl mx-auto w-full">
          <Reveal>
            <div className="text-center mb-10 md:mb-16 px-2">
              <p className="font-poppins text-xs sm:text-sm text-gold/60 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3">
                By The Numbers
              </p>
              <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cinzel break-words">
                Event Statistics
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass rounded-3xl p-6 sm:p-8 md:p-12 w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full">
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
      <section className="relative z-10 py-16 md:py-32 px-4 sm:px-6 w-full">
        <div className="max-w-4xl mx-auto w-full">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-20 text-center w-full box-border">
              {/* Gold gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold via-gold-400 to-gold-600 pointer-events-none" />
              <div className="absolute inset-0 bg-charcoal-900/20 pointer-events-none" />

              {/* Decorative glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-white/20 blur-[60px] sm:blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 w-full">
                <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-900 mb-4 break-words px-2">
                  Be Part of Something Extraordinary
                </h2>
                <p className="font-cormorant text-base sm:text-lg md:text-xl text-charcoal-900/70 italic mb-6 sm:mb-8 max-w-2xl mx-auto break-words px-2">
                  Join 1000+ participants, 30+ student organizations, and
                  visionary leaders at INSPIRE 2026.
                </p>
                <div className="px-4 sm:px-0 max-w-xs sm:max-w-none mx-auto">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-charcoal-900 text-gold font-poppins font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
                  >
                    Register Now
                    <ArrowRight size={20} className="shrink-0" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
