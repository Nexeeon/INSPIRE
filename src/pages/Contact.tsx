import { useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, MapPin, Calendar, ArrowRight } from "lucide-react";
import Particles from "../components/Particles";
import Reveal from "../components/Reveal";

export default function Contact() {
  // Proteksi Tambahan: Tangani force repaint saat halaman kembali dari background atau selesai dimuat
  useEffect(() => {
    const handleForceRepaint = () => {
      try {
        const iosElements = document.querySelectorAll(".ios-safari-fix");
        iosElements.forEach((el) => {
          // Trik mengubah display secara instan untuk memicu re-render mesin WebKit
          const originalDisplay = el.style.display;
          el.style.display = "none";
          // Membaca offsetHeight memaksa browser melakukan layout ulang (reflow)
          const _ = el.offsetHeight;
          el.style.display = originalDisplay;
        });
      } catch (err) {
        console.error(
          "[INSPIRE 2026 Audit] Gagal melakukan force repaint di Safari iOS:",
          err,
        );
      }
    };

    window.addEventListener("pageshow", handleForceRepaint);
    window.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") handleForceRepaint();
    });

    return () => {
      window.removeEventListener("pageshow", handleForceRepaint);
      window.removeEventListener("visibilitychange", handleForceRepaint);
    };
  }, []);

  // Style CSS inline khusus untuk menambal bug WebKit tanpa merusak file global.css Anda
  const safariSafariFixStyle = {
    WebkitTransform: "translateZ(0)",
    transform: "translateZ(0)",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    willChange: "transform, opacity",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  return (
    <div className="relative">
      <Particles count={30} />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-burgundy/15 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-poppins text-sm text-gold/60 uppercase tracking-[0.4em] mb-3">
                Get In Touch
              </p>
              <h1 className="font-cinzel text-6xl md:text-7xl lg:text-8xl font-bold text-gradient-gold-shimmer">
                CONTACT
              </h1>
              <p className="mt-6 font-cormorant text-xl text-ivory/50 italic max-w-2xl mx-auto">
                Follow INSPIRE 2026 and be part of the movement.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left: Logo */}
            <Reveal>
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/20 blur-[60px] rounded-full scale-150" />
                  <img
                    src="/assets/images/logo_(2).png"
                    alt="INSPIRE 2026"
                    className="relative z-10 h-40 w-auto animate-float rounded-full"
                  />
                </div>
                <h3 className="mt-6 font-cinzel text-2xl font-bold text-gradient-gold">
                  INSPIRE 2026
                </h3>
                <p className="mt-2 font-cormorant text-base text-ivory/50 italic">
                  Showcase Innovation, Inspire Action.
                </p>
              </div>
            </Reveal>

            {/* Center: Contact info */}
            <Reveal delay={0.15}>
              <div
                className="glass rounded-3xl p-8 md:p-10 ios-safari-fix"
                style={safariSafariFixStyle}
              >
                <h2 className="font-cinzel text-2xl font-bold text-ivory mb-8 text-center">
                  Follow INSPIRE 2026
                </h2>

                <div className="space-y-6">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com/inspire_polsri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-gold hover:bg-gold/10 transition-all duration-300 group ios-safari-fix"
                    style={safariSafariFixStyle}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-burgundy to-gold-700 flex items-center justify-center flex-shrink-0">
                      <Instagram size={22} className="text-ivory" />
                    </div>
                    <div className="w-full" style={{ opacity: 1 }}>
                      {" "}
                      {/* Force Opacity Fallback */}
                      <p className="font-poppins text-xs text-gold/60 uppercase tracking-wider">
                        Instagram
                      </p>
                      <p className="font-cinzel text-lg font-semibold text-ivory group-hover:text-gold transition-colors">
                        @inspire_polsri
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div
                    className="flex items-center gap-4 p-4 rounded-2xl glass ios-safari-fix"
                    style={safariSafariFixStyle}
                  >
                    <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center flex-shrink-0">
                      <MapPin size={22} className="text-gold" />
                    </div>
                    <div className="w-full" style={{ opacity: 1 }}>
                      {" "}
                      {/* Force Opacity Fallback */}
                      <p className="font-poppins text-xs text-gold/60 uppercase tracking-wider">
                        Location
                      </p>
                      <p className="font-cinzel text-base font-semibold text-ivory">
                        Graha Pendidikan
                      </p>
                      <p className="font-poppins text-sm text-ivory/50">
                        Politeknik Negeri Sriwijaya
                      </p>
                    </div>
                  </div>

                  {/* Event Date */}
                  <div
                    className="flex items-center gap-4 p-4 rounded-2xl glass ios-safari-fix"
                    style={safariSafariFixStyle}
                  >
                    <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center flex-shrink-0">
                      <Calendar size={22} className="text-gold" />
                    </div>
                    <div className="w-full" style={{ opacity: 1 }}>
                      <p className="font-poppins text-xs text-gold/60 uppercase tracking-wider">
                        Event Date
                      </p>
                      <p className="font-cinzel text-lg font-semibold text-ivory">
                        13–14 September 2026
                      </p>
                    </div>
                  </div>
                </div>

                {/* Follow button */}
                <a
                  href="https://instagram.com/inspire_polsri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full mt-8 group"
                >
                  <Instagram size={20} />
                  Follow on Instagram
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </Reveal>

            {/* Right: Phoenix mascot */}
            <Reveal delay={0.3}>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/15 blur-[80px] rounded-full scale-150" />
                  <img
                    src="/assets/images/maskot.png"
                    alt="Pyra the Phoenix"
                    className="relative z-10 w-64 md:w-80 animate-float drop-shadow-[0_0_40px_rgba(255,215,0,0.3)]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
