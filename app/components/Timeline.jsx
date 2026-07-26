import React from "react";
import { experienceData, educationData } from "@/assets/assets";
import Divider from "./Divider";

const dotColors = ["bg-accent-pink", "bg-accent-blue", "bg-fg"];

const Timeline = () => {
  return (
    <div id="timeline" className="w-11/12 max-w-3xl mx-auto py-8 scroll-mt-32">
      <h2 className="text-2xl font-bold mb-6">Experience 💼</h2>
      <div className="flex flex-col gap-8">
        {experienceData.map((item, i) => (
          <div key={item.role + item.company}>
            <p className="flex items-center gap-2 font-bold">
              <span
                className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                  dotColors[i % dotColors.length]
                }`}
              />
              {item.role}
              <span className="text-muted font-normal italic">
                | {item.location}
              </span>
            </p>
            <p className="ml-4.5 text-muted">
              {item.company} | {item.period}
            </p>
            <ul className="ml-4.5 mt-2 list-disc list-inside text-muted space-y-1">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Divider />

      <h2 className="text-2xl font-bold mb-6">Education 🎓</h2>
      <div className="flex flex-col gap-8">
        {educationData.map((item, i) => (
          <div key={item.school}>
            <p className="flex items-center gap-2 font-bold">
              <span
                className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                  dotColors[i % dotColors.length]
                }`}
              />
              {item.school}
              {item.location && (
                <span className="text-muted font-normal italic">
                  | {item.location}
                </span>
              )}
            </p>
            <p className="ml-4.5 text-muted">
              {item.degree} | {item.period}
            </p>
            {item.bullets.length > 0 && (
              <ul className="ml-4.5 mt-2 list-disc list-inside text-muted space-y-1">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
