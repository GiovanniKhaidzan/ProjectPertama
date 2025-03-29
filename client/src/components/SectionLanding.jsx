import React from "react";
import ImageOllie from "../assets/ollei.png";
import Buttonz from "../components/ButtonToShop"
import { handleNavigation } from "../assets/utils/navigationUtils";
import { useNavigate } from 'react-router-dom'


function SectionLanding() {
  const navigate = useNavigate()
  return (
    <div className="relative w-full">
      {/* Gambar */}
      <img src={ImageOllie} alt="Ollie" className="w-full h-auto" />
      <div className="absolute inset-0 flex justify-center items-center pt-[400px] pr-[400px]">
       <Buttonz Label= "SHOPP NOW!!" route="/Shop" onClick={() => handleNavigation(navigate, "/Shop")}/>
      </div>
    </div>
  );
}

export default SectionLanding;
