import React from "react";
import { workData } from "@/assets/assets";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
  </svg>
);

const Work = () => {
  return (
    <div id="works" className="w-11/12 max-w-3xl mx-auto py-8 scroll-mt-32">
      <h2 className="text-2xl font-bold mb-2">Works 🧩</h2>
      <p className="text-muted mb-8">
        A few things I&apos;ve built — full-stack apps and GenAI agents.
      </p>

      <div className="flex flex-col gap-6">
        {workData.map((project) => (
          <div
            key={project.title}
            className="border border-border rounded-lg p-5 bg-card hover:border-fg transition"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-bold">{project.title}</h3>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repo"
                  className="hover:text-accent-blue transition"
                >
                  <GithubIcon />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="hover:text-accent-blue transition"
                  >
                    <LinkIcon />
                  </a>
                )}
              </div>
            </div>
            <p className="text-muted text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs border border-border rounded px-2 py-1 text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
