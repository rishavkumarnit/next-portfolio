import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Rishav Kumar — Full Stack Engineer",
  description:
    "Portfolio of Rishav Kumar, Full Stack Engineer building backend systems, web apps, and GenAI products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceMono.variable} font-mono antialiased leading-7 bg-bg text-fg overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
