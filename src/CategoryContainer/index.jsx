import { useEffect, useState } from "react";
import "./CategoryContainer.css";
import { CategoryItem } from "../CategoryItem/index.jsx";

export function CategoryContainer({categories}) {

  return (
    <div className="category-container">
      {categories.map((cat, idx) => (
        <CategoryItem
          key={idx}
          title={cat.title}
          imageUrl={cat.imageUrl}
          link={cat.link}
        />
      ))}
    </div>
  );
}
