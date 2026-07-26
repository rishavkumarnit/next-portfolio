"use client";

import React, { useEffect, useState } from "react";

const TABS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
      <div className="w-11/12 max-w-3xl mx-auto flex items-center justify-between py-4">
        <a
          href="#home"
          className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-sm font-bold shrink-0"
        >
          RK
        </a>
        <div className="flex items-center gap-5">
          <a
            href="https://drive.google.com/uc?export=download&id=1qqtacDDxgyrTci2iM1wof4r4dQqL6vvQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline decoration-fg underline-offset-4 hover:text-accent-blue hover:decoration-accent-blue transition"
          >
            Resume ⬇️
          </a>
          <a
            href="#contact"
            className="text-sm underline decoration-accent-blue underline-offset-4 text-accent-blue hover:opacity-80 transition"
          >
            Hire Me ✉️
          </a>
        </div>
      </div>

      <nav className="w-11/12 max-w-3xl mx-auto pb-4 overflow-x-auto">
        <ul className="flex items-center gap-1 text-sm w-max">
          {TABS.map((tab) => (
            <li key={tab.id}>
              <a
                href={`#${tab.id}`}
                className={`block px-4 py-1.5 rounded-md whitespace-nowrap transition ${
                  active === tab.id
                    ? "bg-fg text-bg font-bold"
                    : "text-muted hover:text-fg"
                }`}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
