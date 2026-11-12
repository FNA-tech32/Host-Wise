import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdEmail, MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneVolume, FaHeadset } from "react-icons/fa6";
import logo from '../assets/logo/logo_footer.svg'

const Footer = () => {
  const links = [
    [
      { label: "QUICK LINKS", key: "header-1" },
      { label: "About Us", key: "item-1-1", path: "/About" },
      { label: "Rooms", key: "item-1-2", path: "/Room" },
      { label: "Services", key: "item-1-3", path: "/Services" },
    ],
    [
      { label: "EXPLORE", key: "header-2" },
      { label: "Gallery", key: "item-2-1", path: "/Gallery" },
      { label: "Blog", key: "item-2-2", path: "/Blog" },
      { label: "Contact", key: "item-2-3", path: "/Contact" },
    ],
  ];

  return ( 
    <footer className="font-poppins bg-[#063c43] text-white">
      <div className="py-16 px-6 max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        
        {/* Brand Information */}
        <div className="space-y-4">
          <div className="footer-img flex items-center gap-3">
            <img
              src={logo}
              alt="HostWise Logo"
              className="w-12 h-auto"
            />
            <span className="text-2xl font-bold tracking-wider text-white">
              HostWise
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            HostWise is your premier luxury hotel and reservation platform, offering curated accommodations, exceptional amenities, and unforgettable travel experiences.
          </p>
          <div className="flex text-white text-2xl gap-4 items-center pt-2">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-cyan-300 transition">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-cyan-300 transition">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-cyan-300 transition">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-cyan-300 transition">
              <AiOutlineYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4">
          {links.map((col, colIndex) => (
            <ul key={`col-${colIndex}`} className="space-y-2">
              {col.map((link) => {
                const isHeader = link.key.startsWith("header-");
                return (
                  <li key={link.key}>
                    {isHeader ? (
                      <span className="text-sm font-semibold tracking-wider text-cyan-300 uppercase block mb-3">
                        {link.label}
                      </span>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-white text-sm transition block py-1"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          ))}
        </div>

        {/* Contact & Alternative Details */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold tracking-wider text-cyan-300 uppercase mb-3">
            Contact & Support
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <MdEmail className="text-cyan-400 text-base shrink-0" />
              <span><strong className="text-white">Primary:</strong> info@hostwise.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineAlternateEmail className="text-cyan-400 text-base shrink-0" />
              <span><strong className="text-white">Alt Email:</strong> support@hostwise.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneVolume className="text-cyan-400 text-base shrink-0" />
              <span><strong className="text-white">Direct:</strong> +1 (800) 555-0199</span>
            </li>
            <li className="flex items-center gap-2">
              <FaHeadset className="text-cyan-400 text-base shrink-0" />
              <span><strong className="text-white">Alt Line:</strong> +1 (555) 234-5678</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-sm font-semibold tracking-wider text-cyan-300 uppercase mb-1">
            Stay Up To Date
          </h3>
          <p className="text-xs text-gray-300">
            Subscribe to our newsletter for exclusive HostWise offers, travel guides, and discounts.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-cyan-950/60 border border-cyan-800 text-white placeholder-gray-400 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2 rounded-lg text-sm transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-cyan-900/80 py-5 text-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} HostWise. All rights reserved. Crafted for memorable stays.</p>
      </div>
    </footer>
  );
};

export default Footer;
