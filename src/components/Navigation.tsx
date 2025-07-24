import { useState } from "react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "resume", label: "RESUME" },
    { id: "portfolio", label: "PORTFOLIO" },
    { id: "blog", label: "BLOG" },
    { id: "contact", label: "CONTACT" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">D</span>
            </div>
            <span className="text-xl font-bold text-foreground">Davis</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center text-sm text-muted-foreground">
            <span className="mr-2">📞</span>
            <span>+1 971 234 1508</span>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-foreground"></div>
              <div className="w-full h-0.5 bg-foreground"></div>
              <div className="w-full h-0.5 bg-foreground"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;