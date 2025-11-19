"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface UseScrollToSectionOptions {
  offset?: number;
}

type ScrollToSection = (id: string, targetPath?: string) => void;

export const useScrollToSection = (
  { offset = 50 }: UseScrollToSectionOptions = {}
): ScrollToSection => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const scrollToSection: ScrollToSection = (id, targetPath = "/") => {
    const section = document.getElementById(id);

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ 
        top: offsetTop - offset, 
        behavior: "smooth" 
      });
    } else {
      router.push(`${targetPath}?scrollTo=${id}`);
    }
  };

  useEffect(() => {
    const scrollToId = searchParams.get("scrollTo");
    
    if (scrollToId) {
      const scrollToElement = (): void => {
        const el = document.getElementById(scrollToId);
        if (el) {
          const offsetTop = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ 
            top: offsetTop - offset, 
            behavior: "smooth" 
          });
          
          const url = new URL(window.location.href);
          url.searchParams.delete("scrollTo");
          window.history.replaceState({}, "", url.toString());
        }
      };

      if (document.readyState === "complete") {
        requestAnimationFrame(scrollToElement);
      } else {
        window.addEventListener("load", scrollToElement, { once: true });
      }
    }
  }, [path, searchParams, offset]);

  return scrollToSection;
};