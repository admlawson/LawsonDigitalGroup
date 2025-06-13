"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu as MenuIcon,
  X,
  ChevronDown,
  ArrowRight,
  Home,
  Briefcase,
  DollarSign,
  FileText,
  Users,
  Info,
} from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { openLeadForm } = useLeadForm();

  /* ─────────────────  body-scroll lock  ───────────────── */
  const lockScroll = (locked: boolean) => {
    const val = locked ? "hidden" : "";
    document.body.style.overflow = val;
    document.documentElement.style.overflow = val; // iOS Safari
  };
  useEffect(() => lockScroll(open), [open]);

  /* ─────────────────  nav data  ───────────────── */
  const nav = [
    { href: "/", label: "Home", icon: Home },
    { href: "/pricing", label: "Pricing", icon: DollarSign },
    { href: "/case-studies", label: "Case Studies", icon: FileText },
    { href: "/blog", label: "Resources", icon: Users },
    { href: "/about", label: "About", icon: Info },
  ];

  const services = [
    { href: "/services/ai-powered-websites", label: "Smart Business Websites" },
    { href: "/services/ai-chatbots", label: "Automation & Lead Follow-Up" },
    { href: "/services/seo-marketing", label: "Get Found & Grow" },
    { href: "/services/custom-development", label: "Custom Apps & Tools" },
    { href: "/services/digital-setup-tech-support", label: "Digital Setup & Support" },
  ];

  /* ─────────────────  component  ───────────────── */
  return (
    <>
      {/* trigger */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        className="md:hidden text-neutral-700 hover:text-primary"
      >
        {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </Button>

      {/* backdrop */}
      {open && (
        <div
          aria-hidden
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* drawer */}
      <aside
        className={`fixed inset-0 z-50 flex flex-col bg-white
                    transition-transform duration-300 ease-out
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* header */}
        <div
          className="flex items-center justify-between border-b
                     px-6 py-5 pt-[calc(env(safe-area-inset-top)+20px)]"
        >
          <span className="text-xl font-extrabold leading-none">
            Lawson<span className="text-primary">DigitalGroup</span>
          </span>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-neutral-600 hover:text-primary"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* navigation */}
        <nav className="flex-grow overflow-y-auto px-6 py-8 space-y-2">
          {nav.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 rounded-xl px-4 py-3
                         text-lg font-medium text-neutral-700
                         hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Icon className="w-5 h-5 opacity-60 shrink-0 group-hover:text-primary" />
              {label}
              <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}

          {/* services accordion */}
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="group flex items-center gap-3 rounded-xl px-4 py-3
                       text-lg font-medium text-neutral-700
                       hover:bg-primary/10 hover:text-primary transition-colors w-full"
          >
            <Briefcase className="w-5 h-5 opacity-60 shrink-0 group-hover:text-primary" />
            Services
            <ChevronDown
              className={`w-4 h-4 ml-auto transition-transform duration-200 ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {servicesOpen && (
            <div className="pl-8 flex flex-col gap-1">
              {services.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-2 text-sm text-neutral-600
                             hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </nav>

        {/* sticky CTA */}
        <div className="border-t bg-gradient-to-r from-neutral-50 to-primary/5 px-6 py-5">
          <Button
            className="w-full py-4 bg-primary text-white hover:bg-primary-dark transition-colors"
            onClick={() => {
              setOpen(false);
              openLeadForm();
            }}
          >
            Get Started Free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <p className="mt-2 text-center text-xs text-neutral-500">
            Free strategy call • No commitment
          </p>
        </div>
      </aside>
    </>
  );
}