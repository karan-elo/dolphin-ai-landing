import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const SOCIAL_LINKS = [
  { icon: FaYoutube, href: "#", label: "Visit Dolphin AI on YouTube" },
  { icon: FaFacebook, href: "#", label: "Visit Dolphin AI on Facebook" },
  { icon: FaTwitter, href: "#", label: "Visit Dolphin AI on Twitter" },
  { icon: FaInstagram, href: "#", label: "Visit Dolphin AI on Instagram" },
  { icon: FaLinkedin, href: "#", label: "Visit Dolphin AI on LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="px-6" style={{ backgroundColor: "#0c9ac6" }}>
      <div className="max-w-[1440px] mx-auto py-[48px] flex flex-col gap-12">

        {/* Top row — Logo + Social Icons */}
        <div className="flex items-center justify-between">
          {/* Wordmark logo */}
          <a
            href="/"
            aria-label="Dolphin AI home"
            className="text-white text-[32px] font-bold leading-normal tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ fontFamily: "var(--font-title)" }}
          >
            DOLPHIN
          </a>

          {/* Social icons */}
          <nav aria-label="Social media links">
            <ul className="flex items-center gap-4 list-none m-0 p-0">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:opacity-75 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
                  >
                    <Icon size={24} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <hr className="border-0 h-px bg-[#c1c7cd] m-0" />

        {/* Bottom row — Copyright */}
        <div>
          <p
            className="text-white text-[14px] font-normal leading-[1.4]"
            style={{ fontFamily: "var(--font-footer)" }}
          >
            GREENHORN WELLNESS PVT. LTD. @ 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
