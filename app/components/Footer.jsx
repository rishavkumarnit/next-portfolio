import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-4">
      <div className="w-11/12 max-w-3xl mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>© {new Date().getFullYear()} Rishav Kumar. All rights reserved.</p>
        <a
          href="mailto:rishavkumar.nit@gmail.com"
          className="hover:text-fg transition"
        >
          rishavkumar.nit@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
