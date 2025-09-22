import React from "react";
export const ImageTile = React.memo(function ImageTile({ src, alt, className, onClick }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      loading="lazy"
    />
  );
});
