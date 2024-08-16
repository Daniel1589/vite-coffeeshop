import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const Footer = () => {
  const [showMessage, setShowMessage] = useState(false);
  const handleMessage = () => {
    setShowMessage(true);
  };
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-sky-100 py-28 flex flex-col">
      <div className="flex flex-col gap-8 pl-52">
        <h1 className="text-2xl">COME VISIT US</h1>
        <ul className="flex flex-col gap-10">
          <li>500 TERRY FRANCINE STREET SAN FRANCISCO, CA 94158</li>
          <ul>
            <li>SUNDAY: 9:00 - 20:00</li>
            <li>MON - FRI: 8:00 - 20:00</li>
            <li>SATURDAY: 9:00 - 19:00</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#">INSTAGRAM</a>
            </li>
            <li>
              <a href="#">FACEBOOK</a>
            </li>
            <li>
              <a href="#">TWITTER</a>
            </li>
          </ul>
        </ul>
      </div>

      <div className="flex absolute  right-24 flex-col gap-8">
        <h1 className="text-2xl">TALK TO US</h1>

        <ul className="">
          <li>
            <a href="#">DANIEL@GIGGIDY.COM</a>
          </li>
          <li>050-111-1111</li>
        </ul>

        <div className="flex flex-col gap-2 pt-20">
          <p>Subscribe to our Newsletter *</p>
          <div className="flex">
            <input
              className="bg-sky-100 border-black border-2 pl-4 pr-28"
              type="email"
              placeholder="Email address"
            ></input>

            <div
              className="bg-black text-white px-6 py-3 text-l hover:bg-green-700 duration-500"
              onClick={handleMessage}
            >
              <p className="hover:cursor-pointer">Subscribe</p>
            </div>
          </div>
          {showMessage && (
            <p
              className={`transition-opacity duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Thanks for Subscribing!
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center absolute bottom-0 left-0 right-0">
        <ul className="flex gap-14">
          <li>TERMS & CONDITIONS</li>
          <li>PRIVACY POLICY</li>
          <li>SHIPPING POLICY</li>
          <li>REFUND POLICY</li>
          <li>COOKIE POLICY</li>
        </ul>
        <p className="py-4">©2069 by BREW.</p>
      </div>
    </div>
  );
};
