import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-t-gray-300 h-14 content-center w-full grid px-10 z-40 relative bg-white">
      <div className="right-0">
        <a target="_blank" rel="noreferrer" href="https://georgy-aslanyan.vercel.app/">
          <p className="font-semibold">© 2023. by Georgy Aslanyan</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
