"use client";

import { throttle } from "lodash";
import { ArrowUpCircle } from "lucide-react";
import { useEffect,useState } from "react";

import { Button } from "~/components/ui/button";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = throttle(() => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 200);

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      className="fixed bottom-6 right-6 rounded-full p-2 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
      onClick={scrollToTop}
      variant="outline"
      aria-label="Scroll to top"
    >
      <ArrowUpCircle className="h-6 w-6" />
    </Button>
  );
}
