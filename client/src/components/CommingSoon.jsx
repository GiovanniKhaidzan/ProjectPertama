import React from "react";
import ComingSOOn from "../assets/comm.png";
import ButtonToShop from "./ButtonToShop";
import { useNavigate } from "react-router-dom";

function CommingSoon() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      {/* Gambar full screen */}
      <img src={ComingSOOn} alt="Coming Soon" className="w-full h-full object-cover absolute t left-0" />

      {/* Button di tengah */}
      <div className="relative top-[100px] right-[280px]">
        <ButtonToShop Label="Back" onClick={() => navigate("/")} className="px-6 py-3 bg-white text-black rounded-lg shadow-lg hover:bg-gray-200" />
      </div>
    </div>
  );
}

export default CommingSoon;
