import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={toTop}
      className={`fixed bottom-5 right-5 md:bottom-6 md:right-6 z-40 h-10 w-10 md:h-11 md:w-11 rounded-full bg-background/80 hover:bg-background border border-border/70 shadow-md backdrop-blur-md text-foreground/70 hover:text-primary transition-all duration-300 grid place-items-center ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
    </button>
  );
};

export default ScrollToTop;
