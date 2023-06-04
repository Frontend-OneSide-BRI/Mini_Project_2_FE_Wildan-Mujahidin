/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { dataImages } from "../database/images";

export const Navbar2 = () => {
  const [selectedCategory, setSelectedCategory] = useState("animal");

  const filteredImages =
    selectedCategory === "All"
      ? dataImages
      : dataImages.filter((image) => image.category === selectedCategory);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className="flex justify-center gap-5 py-3">
        <a
          className={
            selectedCategory === "animal" ? "border-b-2 border-purple-600" : ""
          }
          data-category="Animal"
          onClick={() => handleCategorySelection("animal")}
        >
          Animal
        </a>
        <a
          className={
            selectedCategory === "human" ? "border-b-2 border-purple-600" : ""
          }
          data-category="Human"
          onClick={() => handleCategorySelection("human")}
        >
          Human
        </a>
        <a
          className={
            selectedCategory === "nature" ? "border-b-2 border-purple-600" : ""
          }
          data-category="Nature"
          onClick={() => handleCategorySelection("nature")}
        >
          Nature
        </a>
        <a
          className={
            selectedCategory === "art" ? "border-b-2 border-purple-600" : ""
          }
          data-category="Art"
          onClick={() => handleCategorySelection("art")}
        >
          Art
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {filteredImages.map((image) => (
          <img key={image.id} src={image.img} alt={image.category} />
        ))}
      </div>
    </>
  );
};
