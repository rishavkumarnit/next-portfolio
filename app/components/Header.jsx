import React from "react";
import Divider from "./Divider";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/rishavkumarnit",
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rishavkumarnit/",
    icon: (
      <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM21 21h-3.37v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.39V21H9.66V8.5h3.24v1.71h.05c.45-.85 1.56-1.75 3.21-1.75 3.43 0 4.06 2.26 4.06 5.2V21Z" />
    ),
  },
  {
    label: "X",
    href: "https://x.com/RishavKumar_25",
    icon: (
      <path d="M18.24 2.75h3.29l-7.19 8.22 8.46 10.28h-6.62l-5.18-6.72-5.93 6.72H1.78l7.69-8.79L1.36 2.75h6.79l4.68 6.14 5.41-6.14Zm-1.16 16.6h1.82L7.02 4.6H5.06l12.02 14.75Z" />
    ),
  },
  {
    label: "Email",
    href: "mailto:rishavkumar.nit@gmail.com",
    icon: (
      <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 6.1 7.8-6.1H4.2Zm15.8 1.6-7.34 5.74a1 1 0 0 1-1.24 0L4.08 7.6V18h15.92V7.6Z" />
    ),
  },
];

const Header = () => {
  return (
    <div id="home" className="w-11/12 max-w-3xl mx-auto pt-14 pb-8 scroll-mt-32">
      <div className="w-20 h-20 rounded-full border border-border flex items-center justify-center text-2xl font-bold mb-6">
        RK
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-1">
        Rishav Kumar 🙋
      </h1>
      <h2 className="text-lg sm:text-xl text-muted mb-6">
        Full Stack Engineer &amp; GenAI Builder
      </h2>

      <p className="mb-2">
        📍 Based in{" "}
        <span className="text-accent-blue">Delhi, India</span> | Open to{" "}
        <span className="text-accent-blue">remote</span> roles
      </p>
      <p className="mb-2">
        🎓 B.Tech in Chemical Engineering from{" "}
        <span className="text-accent-blue">NIT Allahabad</span>, retrained
        into software through a backend engineering fellowship.
      </p>
      <p className="mb-2">
        ⚙️ Full-stack engineer specializing in{" "}
        <span className="text-accent-blue">React</span> and{" "}
        <span className="text-accent-blue">Next.js</span> for frontend, with
        expertise in <span className="text-accent-blue">Java</span>,{" "}
        <span className="text-accent-blue">Spring Boot</span> and{" "}
        <span className="text-accent-blue">Node.js</span> for backend —
        currently building{" "}
        <span className="text-accent-blue">GenAI / LLM agent</span> products.
      </p>

      <p className="italic text-muted mt-6">
        &quot;Spent 8 years running bank branches before I ever wrote a line
        of code &mdash; now I ship it.&quot;{" "}
        <span className="text-accent-pink not-italic">
          &mdash; Rishav 🏦➡️💻
        </span>
      </p>

      <Divider />

      <h3 className="text-xl font-bold mb-4">Let&apos;s have a chat 💬</h3>
      <div className="flex items-center gap-5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-fg hover:text-accent-blue transition"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              {s.icon}
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
