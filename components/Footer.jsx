import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-t-gray-300 h-14 content-center w-full grid px-10">
      <div className="right-0">
        <Link href="https://georgy-aslanyan.vercel.app/">
          <p>© 2023. by Georgy Aslanyan</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
