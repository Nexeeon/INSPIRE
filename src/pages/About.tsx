import { motion } from "framer-motion";
import {
  Flame,
  Globe,
  Sparkles,
  Shield,
  BookOpen,
  Lightbulb,
  Eye,
  Target,
} from "lucide-react";
import Particles from "../components/Particles";
import Reveal from "../components/Reveal";

const logoMeanings = [
  {
    icon: Flame,
    title: "Phoenix",
    desc: "Rebirth and transformation — rising from ashes to forge a better future.",
  },
  {
    icon: Flame,
    title: "Ethical Flame",
    desc: "The eternal fire of integrity that guides every decision and action.",
  },
  {
    icon: Globe,
    title: "Globe",
    desc: "A global perspective connecting leaders across cultures and continents.",
  },
  {
    icon: Sparkles,
    title: "Gold",
    desc: "Excellence and prestige — the standard we strive for in all endeavors.",
  },
  {
    icon: BookOpen,
    title: "Knowledge",
    desc: "The foundation of political literacy and informed civic engagement.",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "Unwavering moral principles that form the core of responsible leadership.",
  },
  {
    icon: Lightbulb,
    title: "Light",
    desc: "Illumination that dispels ignorance and inspires positive change.",
  },
];

const mascotSymbols = [
  {
    title: "Transformation",
    desc: "The power to reinvent oneself and emerge stronger.",
  },
  { title: "Hope", desc: "A beacon of optimism for generations to come." },
  {
    title: "Courage",
    desc: "The bravery to lead with conviction and purpose.",
  },
  {
    title: "Ethical Leadership",
    desc: "Guiding others with moral clarity and integrity.",
  },
  {
    title: "Future Changemakers",
    desc: "Empowering the leaders who will shape tomorrow.",
  },
];

const acronym = [
  { l: "I", w: "International" },
  { l: "N", w: "Seminar on" },
  { l: "S", w: "Political Literacy" },
  { l: "P", w: "Integrity" },
  { l: "I", w: "Responsible" },
  { l: "R", w: "Leadership" },
  { l: "E", w: "Expo" },
];

const sponsors = Array.from({ length: 8 }, (_, i) => i + 1);
const mediaPartners = [
  {
    name: "MPM POLSRI",
    username: "@mpm_polsri",
    image: "/assets/media-partners/MPM POLSRI.png",
    link: "https://instagram.com/mpm_polsri",
  },
  {
    name: "HMJ SIPIL POLSRI",
    username: "@hmj_sipilpolsri",
    image: "/assets/media-partners/HMJ TEKNIK SIPIL.jpg",
    link: "https://instagram.com/hmj_sipilpolsri",
  },
  {
    name: "LPM WPS",
    username: "@lpm_wps",
    image: "/assets/media-partners/WPS.jpg",
    link: "https://instagram.com/lpm_wps",
  },
  {
    name: "HMJ ELEKTRO",
    username: "@hmj_elektro",
    image: "/assets/media-partners/HMJ ELEKTRO.png",
    link: "https://instagram.com/hmj_elektro",
  },
  {
    name: "HMJ TEKNIK KIMIA POLSRI",
    username: "@hmjteknikkimiapolsri",
    image: "/assets/media-partners/HMJ BP Font.png",
    link: "https://instagram.com/hmjteknikkimiapolsri",
  },
  {
    name: "HMJ AKUNTANSI POLSRI",
    username: "@hmjakuntansipolsri",
    image: "/assets/media-partners/HMJ AKUNTANSI.jpg",
    link: "https://instagram.com/hmjakuntansipolsri",
  },
  {
    name: "HMJ AB POLSRI",
    username: "@hmjabpolsri",
    image: "/assets/media-partners/HMJ ADM.png",
    link: "https://instagram.com/hmjabpolsri",
  },
  {
    name: "HMJ TEKNIK KOMPUTER",
    username: "@hmjteknikkomputer",
    image: "/assets/media-partners/HMJ TEKNIK KOMPUTER.png",
    link: "https://instagram.com/hmjteknikkomputer",
  },
  {
    name: "HMJ MI POLSRI",
    username: "@hmjmi_polsri",
    image: "/assets/media-partners/LOGO HMJ MI.png",
    link: "https://instagram.com/hmjmi_polsri",
  },
  {
    name: "BEM POLIBATAM",
    username: "@bempolibatam",
    image: "/assets/media-partners/BEM POLIBATAM.png",
    link: "https://instagram.com/bempolibatam",
  },
  {
    name: "TIM ROBOT POLSRI",
    username: "@timrobotpolsri",
    image: "/assets/media-partners/HMJ RTBP.jpg",
    link: "https://instagram.com/timrobotpolsri",
  },
  {
    name: "HMJ MESIN POLSRI",
    username: "@hmjmesinpolsri",
    image: "/assets/media-partners/HMJ Teknik Mesin.jpeg",
    link: "https://instagram.com/hmjmesinpolsri",
  },
  {
    name: "EDS POLSRI",
    username: "@eds.polsri",
    image: "/assets/media-partners/PKSE Polsri.png",
    link: "https://instagram.com/eds.polsri",
  },
  {
    name: "HIMPALA Bahtera Buana",
    username: "@himpalabahterabuana",
    image: "/assets/media-partners/UKM HBB.png",
    link: "https://instagram.com/himpalabahterabuana",
  },
  {
    name: "UKM MARS POLSRI",
    username: "@ukm.marspolsri",
    image: "/assets/media-partners/UKM Mars.jpeg",
    link: "https://instagram.com/ukm.marspolsri",
  },
  {
    name: "UKM OLAHRAGA POLSRI",
    username: "@ukmolahragapolsri",
    image: "/assets/media-partners/UKM Olahraga.jpeg",
    link: "https://instagram.com/ukmolahragapolsri",
  },
  {
    name: "UKM SIMPONY",
    username: "@ukmsimpony",
    image: "/assets/media-partners/UKM Simpony.png",
    link: "https://instagram.com/ukmsimpony",
  },
  {
    name: "PRAMUKA POLSRI",
    username: "@pramuka.polsri",
    image: "/assets/media-partners/UKM LDK Karisma.png",
    link: "https://instagram.com/pramuka.polsri",
  },
  {
    name: "KOMUNITAS WIRAUSAHA POLSRI",
    username: "@komunitaswirausahapolsri",
    image: "/assets/media-partners/Komunitas Wirausaha.png",
    link: "https://instagram.com/komunitaswirausahapolsri",
  },
  {
    name: "SAN PALEMBANG",
    username: "@san.palembang.2020",
    image: "/assets/media-partners/Komunitas ARCoS.png",
    link: "https://instagram.com/san.palembang.2020",
  },
  {
    name: "BEM UNILA",
    username: "@bem_unila",
    image: "/assets/media-partners/BEM UNILA.png",
    link: "https://instagram.com/bem_unila",
  },
  {
    name: "BEM UPGRIS",
    username: "@bem_upgris",
    image: "/assets/media-partners/BEM UPGRI Palembang.jpeg",
    link: "https://instagram.com/bem_upgris",
  },
  {
    name: "BEM FEB UPGRIP",
    username: "@bemfeb_upgrip",
    image: "/assets/media-partners/BEM UPGRI Palembang.jpeg",
    link: "https://instagram.com/bemfeb_upgrip",
  },
  {
    name: "BEM STIE APRIN",
    username: "@bemstieaprin",
    image: "/assets/media-partners/BEM STIE APRIN.jpeg",
    link: "https://instagram.com/bemstieaprin",
  },
  {
    name: "BEM UPGRIP",
    username: "@bem_upgrip",
    image: "/assets/media-partners/BEM UPGRI Palembang.jpeg",
    link: "https://instagram.com/bem_upgrip",
  },
  {
    name: "BEM ILKOM UNSRI",
    username: "@bemilkomunsri",
    image: "/assets/media-partners/BEM UNILA.png",
    link: "https://instagram.com/bemilkomunsri",
  },
];

export default function About() {
  return (
    <div className="relative">
      <Particles count={30} />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-burgundy/10 blur-[130px]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-poppins text-sm text-gold/60 uppercase tracking-[0.4em] mb-4">
              Discover
            </p>
            <h1 className="font-cinzel text-6xl md:text-7xl lg:text-8xl font-bold text-gradient-gold-shimmer">
              ABOUT
            </h1>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-ivory/80 mt-2">
              INSPIRE
            </h2>
            <p className="mt-6 font-cormorant text-xl text-ivory/50 italic max-w-2xl mx-auto">
              The story behind a movement — where ethics meets leadership, and
              vision becomes reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS INSPIRE */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-3xl mx-auto" style={{ maxWidth: "800px" }}>
          <Reveal>
            <div className="mb-10">
              <p className="font-poppins text-sm text-gold/60 uppercase tracking-[0.3em] mb-3">
                The Philosophy
              </p>
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gradient-gold">
                What is INSPIRE?
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-cormorant text-xl md:text-2xl text-ivory/75 leading-[1.9] tracking-wide">
              INSPIRE berasal dari kata{" "}
              <em className="text-gold not-italic font-semibold">inspire</em>{" "}
              yang berarti menginspirasi, membangkitkan semangat, dan mendorong
              perubahan ke arah yang lebih baik. INSPIRE hadir sebagai wadah
              yang mengintegrasikan literasi politik, kepemimpinan beretika, dan
              pengalaman organisasi dalam satu rangkaian kegiatan. Melalui
              Seminar Internasional, peserta diajak memperluas wawasan serta
              memahami pentingnya etika dan tanggung jawab dalam kepemimpinan.
              Sementara melalui Expo Ormawa, mahasiswa diberikan ruang untuk
              mengenal, berkolaborasi, dan mengembangkan potensi diri melalui
              organisasi kemahasiswaan. Secara konseptual, INSPIRE
              direpresentasikan melalui{" "}
              <em className="text-gold not-italic font-semibold">
                Ethical Flame
              </em>{" "}
              sebagai simbol semangat dan inspirasi untuk terus berkembang,{" "}
              <em className="text-gold not-italic font-semibold">Phoenix</em>{" "}
              sebagai lambang transformasi dan kebangkitan, serta elemen{" "}
              <em className="text-gold not-italic font-semibold">
                Globe, Gold, Knowledge, Integrity,
              </em>{" "}
              dan <em className="text-gold not-italic font-semibold">Light</em>{" "}
              yang melambangkan wawasan global, kualitas internasional,
              literasi, tanggung jawab moral, dan pencerahan gagasan. Melalui
              INSPIRE, mahasiswa diharapkan menjadi{" "}
              <em className="text-gold not-italic font-semibold">
                future changemakers
              </em>{" "}
              yang mampu mengubah pengetahuan menjadi tindakan, organisasi
              menjadi ruang pengembangan diri, dan kepemimpinan menjadi
              kontribusi nyata bagi masyarakat, bangsa, dan dunia.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INSPIRE ACRONYM */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="mb-12">
              <p className="font-poppins text-sm text-gold/60 uppercase tracking-[0.3em] mb-3">
                The Name
              </p>
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gradient-gold">
                INSPIRE Meaning
              </h2>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            {acronym.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group glass-gold rounded-2xl p-5 flex items-center gap-5 transition-all duration-500 hover:border-gold/40 hover:bg-gold/10 hover:-translate-y-1">
                  <span className="font-cinzel text-3xl md:text-4xl font-bold text-gold flex-shrink-0 w-12 text-center">
                    {item.l}
                  </span>
                  <span className="font-poppins text-base md:text-lg text-ivory/80">
                    {item.w}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOGO MEANING */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-poppins text-sm text-gold/60 uppercase tracking-[0.3em] mb-3">
                Symbolism
              </p>
              <h2 className="section-title">Logo Meaning</h2>
              <p className="mt-4 section-subtitle">
                Every element tells a story
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 blur-[60px] rounded-full scale-150" />
                <img
                  src="/assets/images/logo_(2).png"
                  alt="INSPIRE Logo"
                  className="relative z-10 h-40 w-auto animate-float rounded-full"
                />
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {logoMeanings.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08}>
                <div className="group glass rounded-2xl p-6 h-full transition-all duration-500 hover:border-gold/40 hover:bg-gold/5 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110">
                    <m.icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-ivory mb-2 group-hover:text-gold transition-colors">
                    {m.title}
                  </h3>
                  <p className="font-poppins text-sm text-ivory/60 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MASCOT SECTION */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-poppins text-sm text-gold/60 uppercase tracking-[0.3em] mb-3">
                Meet The Mascot
              </p>
              <h2 className="section-title">Pyra the Phoenix</h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-gold/15 blur-[80px] rounded-full scale-150" />
                <img
                  src="/assets/images/maskot.png"
                  alt="Pyra the Phoenix"
                  className="relative z-10 w-80 md:w-96 animate-float drop-shadow-[0_0_40px_rgba(255,215,0,0.3)]"
                />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h3 className="font-cinzel text-4xl font-bold text-gradient-gold mb-4">
                  Pyra
                </h3>
                <p className="font-cormorant text-lg text-ivory/60 italic mb-8">
                  The eternal flame of transformation and hope.
                </p>

                <div className="space-y-4">
                  {mascotSymbols.map((s, i) => (
                    <Reveal key={s.title} delay={0.1 + i * 0.08}>
                      <div className="flex items-start gap-4 p-4 rounded-2xl glass hover:bg-gold/5 transition-all duration-300">
                        <div className="w-10 h-10 rounded-full glass-gold flex items-center justify-center flex-shrink-0">
                          <Flame size={18} className="text-gold" />
                        </div>
                        <div>
                          <h4 className="font-cinzel text-base font-bold text-ivory">
                            {s.title}
                          </h4>
                          <p className="font-poppins text-sm text-ivory/60">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <Reveal>
              <div className="glass rounded-3xl p-10 h-full">
                <div className="w-14 h-14 rounded-2xl glass-gold flex items-center justify-center mb-6">
                  <Eye size={26} className="text-gold" />
                </div>
                <h3 className="font-cinzel text-3xl font-bold text-gradient-gold mb-4">
                  Vision
                </h3>
                <p className="font-poppins text-base text-ivory/70 leading-relaxed">
                  To become a premier international platform that cultivates
                  politically literate, ethical, and responsible leaders who
                  drive organizational excellence and inspire positive
                  transformation across communities worldwide.
                </p>
              </div>
            </Reveal>

            {/* Mission */}
            <Reveal delay={0.15}>
              <div className="glass rounded-3xl p-10 h-full">
                <div className="w-14 h-14 rounded-2xl glass-gold flex items-center justify-center mb-6">
                  <Target size={26} className="text-gold" />
                </div>
                <h3 className="font-cinzel text-3xl font-bold text-gradient-gold mb-4">
                  Mission
                </h3>
                <ul className="space-y-3">
                  {[
                    "Foster political literacy and civic awareness among future leaders.",
                    "Promote integrity and ethical decision-making in leadership.",
                    "Provide a platform for international dialogue and exchange.",
                    "Showcase student organizational innovation through Expo Ormawa.",
                    "Build lasting networks of responsible, visionary changemakers.",
                  ].map((m, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gold mt-1.5 text-xs">◆</span>
                      <span className="font-poppins text-sm text-ivory/70 leading-relaxed">
                        {m}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-poppins text-sm text-gold/60 uppercase tracking-[0.3em] mb-3">
                With Gratitude
              </p>
              <h2 className="section-title">Our Sponsors</h2>
              <p className="mt-4 section-subtitle">
                Partners who make INSPIRE possible
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {sponsors.map((s) => (
                <div
                  key={s}
                  className="aspect-video glass rounded-2xl flex items-center justify-center transition-all duration-500 hover:border-gold/40 hover:bg-gold/5 hover:scale-105"
                >
                  <span className="font-cinzel text-lg font-bold text-ivory/30">
                    Sponsor {s}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MEDIA PARTNERS */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-poppins text-sm text-gold/60 uppercase tracking-[0.3em] mb-3">
                Amplifying The Message
              </p>
              <h2 className="section-title">Media Partners</h2>
              <p className="mt-4 section-subtitle">
                Voices that carry our story forward
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {mediaPartners.map((m, i) => (
                <a
                  key={i}
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass rounded-2xl overflow-hidden transition-all duration-500 hover:border-gold/40 hover:bg-gold/5 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                >
                  <div className="aspect-square w-full flex items-center justify-center bg-onyx/30 overflow-hidden">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        console.error(
                          `Gagal memuat gambar media partner: ${m.name}`,
                        );
                      }}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-poppins text-sm font-semibold text-ivory/90 leading-tight">
                      {m.name}
                    </h3>
                    <p className="font-poppins text-xs text-gold/60 mt-1">
                      {m.username}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
