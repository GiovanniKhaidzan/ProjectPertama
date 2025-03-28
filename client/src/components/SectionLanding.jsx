import React from "react";
import ImageOllie from "../assets/ollei.png";
import Buttonz from "../components/ButtonToShop"

function SectionLanding() {
  return (
    <div className="relative w-full">
      {/* Gambar */}
      <img src={ImageOllie} alt="Ollie" className="w-full h-auto" />
      <div className="absolute inset-0 flex justify-center items-center pt-[400px] pr-[490px]">
       <Buttonz/>
      </div>
    </div>
  );
}

export default SectionLanding;
