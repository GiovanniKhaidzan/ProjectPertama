import React from "react";
import Coppyright from "./Coppyright";
import { handleNavigation } from "../assets/utils/navigationUtils";
import { useNavigate } from "react-router-dom";
import { footerLinks } from "../data/footerLinks";

// Data untuk footer


function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 text-sm px-16 py-8">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold mb-2">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li
                  key={link.path}
                  onClick={() => handleNavigation(navigate, link.path)}
                  className="cursor-pointer hover:text-gray-400"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Coppyright />
    </footer>
  );
}

export default Footer;
