import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "Why", to: "/#why" },
  { label: "Pricing", to: "/#pricing" },
  { label: "How it works", to: "/#how" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) =>
    to === "/about" ? pathname === "/about" : false;

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b shadow-sm"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/logo_proper.png"
            alt="Zypdrive Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
          <span className="hidden lg:inline text-xs text-muted-foreground font-medium tracking-wide">
            Urban Mobility Redefined
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-primary transition-colors ${
                isActive(l.to) ? "text-primary font-medium" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button asChild variant="hero" size="lg">
            <Link to="/#contact">Start subscription</Link>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <div className="flex flex-col gap-1 mt-8">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-base hover:bg-secondary transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Button asChild variant="hero" size="lg" className="mt-4">
                <Link to="/#contact" onClick={() => setOpen(false)}>
                  Start subscription
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
