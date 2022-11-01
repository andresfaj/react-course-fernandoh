import { useEffect, useState } from "react";

import GiftItem from "./GiftItem";
import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GiftItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
