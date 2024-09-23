import React from "react";

export default function Categories() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <button className="category-link category-link__active">All</button>
      <button className="category-link">Fantasy</button>
      <button className="category-link">NFTs</button>
      <button className="category-link">Abstra</button>
      <button className="category-link">Anime</button>
      <button className="category-link">Games</button>
      <button className="category-link">Technology</button>
    </div>
  );
}
