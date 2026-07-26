import React from "react";
import { techStack } from "@/assets/assets";
import Divider from "./Divider";

const About = () => {
  return (
    <div id="about" className="w-11/12 max-w-3xl mx-auto py-8 scroll-mt-32">
      <h2 className="text-2xl font-bold mb-4">About me 🧾</h2>
      <p className="text-muted mb-2">
        I&apos;m a Full-Stack Engineer with 1+ years of experience building
        scalable backend systems, web applications, and GenAI-powered
        products using Java, Python, Spring Boot, Node.js, React, MongoDB and
        PostgreSQL.
      </p>
      <p className="text-muted">
        Skilled in REST/GraphQL API design, LLM agent orchestration with
        LangGraph, event-driven architecture, microservices, and
        cloud-integrated systems on GCP and Vercel. Before software, I spent
        8 years leading bank branch operations — that background shows up in
        how I approach reliability and process.
      </p>

      <Divider />

      <h3 className="text-xl font-bold mb-4">My Tech Stack 🛠️</h3>
      <div className="flex flex-wrap gap-2.5">
        {techStack.map(({ emoji, label }) => (
          <span
            key={label}
            className="flex items-center gap-2 border border-border rounded-md px-3 py-1.5 text-sm bg-card"
          >
            <span>{emoji}</span>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default About;
