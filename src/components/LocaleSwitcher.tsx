"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import ReactCountryFlag from "react-country-flag";

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      // router.refresh();
      setIsOpen(false);
    }
  };

  const languages = [
    {
      code: "hy",
      name: "Հայ",
      flag: "AM",
    },
    {
      code: "en", 
      name: "Eng",
      flag: "GB",
    },
    {
      code: "ru",
      name: "Рус", 
      flag: "RU",
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 cursor-pointer flex items-center justify-center text-white hover:text-[#c816fa] transition-colors duration-400 hover:scale-110 transform"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 19.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      </button>

      <div 
        className={`
          absolute top-12 right-0 min-w-25 bg-[#27046e] border border-gray-600 rounded-lg shadow-xl z-50 overflow-hidden
          transition-all duration-200 ease-out
          ${isOpen 
            ? 'opacity-100 scale-y-100 translate-y-0' 
            : 'opacity-0 scale-y-0 -translate-y-1 pointer-events-none'
          }
        `}
        style={{
          transformOrigin: 'top center'
        }}
      >
        <div className="py-2">
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`
                w-full px-3 py-2 text-left flex items-center gap-3 
                hover:bg-white/10 transition-all duration-200 cursor-pointer
                ${locale === lang.code 
                  ? 'bg-white/20 text-blue-300' 
                  : 'text-white hover:text-blue-300'
                }
                ${isOpen 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-2'
                }
              `}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              <ReactCountryFlag
                countryCode={lang.flag}
                svg
                style={{ width: "24px", height: "24px" }}
              />
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}