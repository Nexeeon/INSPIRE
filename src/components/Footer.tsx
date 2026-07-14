import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gold/20 bg-charcoal-900/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/images/logo_(2).png" alt="INSPIRE 2026" className="h-10 w-auto" />
            <div className="flex flex-col leading-none">
              <span className="font-cinzel text-lg font-bold text-gradient-gold tracking-wider">
                INSPIRE
              </span>
              <span className="font-poppins text-[10px] text-ivory/50 tracking-[0.3em]">
                2026
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-8">
            <Link to="/" className="font-poppins text-sm text-ivory/60 hover:text-gold transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-poppins text-sm text-ivory/60 hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-poppins text-sm text-ivory/60 hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>

          <a
            href="https://instagram.com/inspire_polsri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-ivory/60 hover:text-gold transition-colors group"
          >
            <Instagram size={18} className="group-hover:scale-110 transition-transform" />
            <span className="font-poppins text-sm">@inspire_polsri</span>
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="font-cormorant text-base text-ivory/40 italic">
            International Seminar on Political Literacy, Integrity, Responsible Leadership, and Expo
          </p>
          <p className="font-poppins text-xs text-ivory/30 mt-2">
            © 2026 INSPIRE. Politeknik Negeri Sriwijaya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
