/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { dataImages } from "../database/images";

export const Navbar2 = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState("animal");

  const filteredImages =
    selectedCategory === "All"
      ? dataImages
      : dataImages.filter((image) => image.category === selectedCategory);

  const searchImages = dataImages.filter((image) =>
    image.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      {searchQuery ? null : (
        <div className="flex justify-center gap-5 py-3">
          <a
            className={
              selectedCategory === "animal"
                ? "border-b-2 border-purple-600"
                : ""
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
              selectedCategory === "nature"
                ? "border-b-2 border-purple-600"
                : ""
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
      )}
      {searchQuery ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 border-y">
          {searchImages.map((image) => (
            <div className="relative overflow-hidden album" key={image.id}>
              <img src={image.img} alt={image.category} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 border-y">
          {filteredImages.map((image) => (
            <div className="relative overflow-hidden album" key={image.id}>
              <img src={image.img} alt={image.category} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
