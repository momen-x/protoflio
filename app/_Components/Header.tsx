/* eslint-disable @next/next/no-img-element */
"use client";
import { IoHome } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/app/favicon.ico";
import { useLanguage } from "../context/LanguageContext";

const UserHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  const { language, setLanguage, t } = useLanguage();
  const pages = [
    { icon: IoHome, label: t("nav.home"), path: "/" },
    { icon: MdWork, label: t("nav.about"), path: "#work" },
    { icon: FcAbout, label: t("nav.work"), path: "#about" },
    { icon: FcAbout, label: t("nav.contact"), path: "#contact" },
  ];

  // Listen for hash changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentHash(window.location.hash);

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Also listen for route changes (in case hash is in the URL)
    const handleRouteChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("load", handleRouteChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("load", handleRouteChange);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/" && !currentHash;
    }

    // Handle hash routes
    if (path.startsWith("#")) {
      return currentHash === path;
    }

    // Handle regular paths
    return pathname === path || pathname.startsWith(path + "/");
  };

  const handleNavigation = (path: string) => {
    console.log("Navigating to:", path);
    setIsMobileMenuOpen(false);

    if (path.startsWith("#")) {
      // For hash navigation, don't use router.push
      window.location.hash = path;
    } else {
      // For regular navigation, clear the hash and navigate
      if (window.location.hash) {
        // Clear the hash by setting it to empty
        window.history.pushState(
          "",
          document.title,
          window.location.pathname + window.location.search
        );
        setCurrentHash(""); // Update state immediately
      }
      router.push(path);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-black/20 backdrop-blur-xl supports-backdrop-filter:bg-black/20 shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo/Brand */}
        <div className="flex items-center gap-8">
          <div
            onClick={() => handleNavigation("/")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl blur-md opacity-30 group-hover:opacity-40 transition-all duration-300" />
              <img
                src={logo.src}
                alt="logo"
                className="relative h-10 w-10 rounded-full transition-transform group-hover:scale-105 group-hover:rotate-3 duration-300"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t("header.protoflio")}
              </h1>
              <span className="text-xs text-white/80 -mt-1">
                {t("header.frontend")}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {pages.map((page) => {
              const active = isActive(page.path);
              const Icon = page.icon;

              return (
                <button
                  key={page.path}
                  onClick={() => handleNavigation(page.path)}
                  className={`relative flex items-center gap-3 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 group cursor-pointer ${
                    active
                      ? "text-white bg-white/20 shadow-sm backdrop-blur-sm"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 transition-transform duration-300 ${
                      active ? "scale-110" : "group-hover:scale-110"
                    }`}
                  />
                  <span>{page.label}</span>

                  {active && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-white rounded-full" />
                  )}

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              );
            })}
          </nav>
<div className="relative group">
  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value as any)}
    className="appearance-none bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-gray-600/30 text-white pl-11 pr-10 py-2.5 rounded-2xl focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 cursor-pointer hover:bg-gradient-to-br hover:from-gray-700/60 hover:to-gray-800/60 hover:border-gray-500/40 hover:shadow-lg hover:shadow-blue-500/10 font-medium text-sm min-w-[140px]"
  >
    <option value="en" className="bg-gray-900 text-white">🇬🇧 English</option>
    <option value="ar" className="bg-gray-900 text-white">🇵🇸 العربية</option>
  </select>
  
  {/* Animated Globe Icon */}
  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
    <svg className="w-4.5 h-4.5 text-blue-400 drop-shadow-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
  
  {/* Animated Dropdown Arrow */}
  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover:translate-y-0.5">
    <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
  
  {/* Subtle glow effect on hover */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none" />
</div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
          >
            <div className="flex flex-col gap-1">
              <div
                className={`w-6 h-0.5 bg-current rounded-full transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-current rounded-full transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-current rounded-full transition-transform duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/40 backdrop-blur-xl border-t border-white/20 shadow-lg">
          <nav className="flex flex-col p-4 gap-2">
            {pages.map((page, index) => {
              const active = isActive(page.path);
              const Icon = page.icon;

              return (
                <button
                  key={`mobile-${page.path}-${index}`}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleNavigation(page.path);
                  }}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 group ${
                    active
                      ? "text-white bg-white/20 shadow-sm backdrop-blur-sm"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 transition-transform duration-300 ${
                      active ? "scale-110" : "group-hover:scale-110"
                    }`}
                  />
                  <span>{page.label}</span>

                  {active && (
                    <div className="ml-auto w-2 h-8 bg-white rounded-full" />
                  )}

                  <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default UserHeader;
