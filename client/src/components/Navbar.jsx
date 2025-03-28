import React from "react";
import InformationNav from "./InformationNav";
import NavbarUtama from "./NavbarUtama";
import Annaucment from "./Annaucment";

function Navbar() {
  return (
  <div className="w-full">
      {/* Top Bar - Warna Putih */}
      <InformationNav/>
      {/* Navigation Bar - Warna Hitam */}
      <NavbarUtama/>
        {/* Announcement Bar */}
      <Annaucment/>

    </div>
  );
}

export default Navbar;