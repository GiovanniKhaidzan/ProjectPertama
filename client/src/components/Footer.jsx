import React from "react";
import Coppyright from "./Coppyright";

function Footer() {
  return (
    <footer className="w-full bg-black text-white ">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 text-sm white px-16 py-8">
        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer">Find A Store</li>
            <li className="cursor-pointer">Become A Member</li>
            <li className="cursor-pointer">Education Discounts</li>
            <li className="cursor-pointer">Send Us Feedback</li>
          </ul>
        </div>
        
        {/* Help */}
        <div>
          <h3 className="font-semibold mb-2">Help</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer">Get Help</li>
            <li className="cursor-pointer">Order Status</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Returns</li>
            <li className="cursor-pointer">Payment Options</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </div>
        
        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer">About Ollie Market</li>
            <li className="cursor-pointer">News</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Investors</li>
            <li className="cursor-pointer">Sustainability</li>
            <li className="cursor-pointer">Report a Concern</li>
          </ul>
        </div>
      </div>
      <Coppyright/>
    </footer>
  );
}

export default Footer;
