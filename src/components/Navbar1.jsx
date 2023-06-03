import React from "react";

export const Navbar1 = () => {
  return (
    <div className="flex justify-center gap-5 py-3">
      <a href="/">
        <p className="border-b-2 border-purple-600">HOME</p>
      </a>

      <a href="/gallery">
        <p>GALLERY</p>
      </a>
    </div>
  );
};
