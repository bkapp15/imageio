import React from 'react';
import ImageItem from "./ImageItem";

const ImageGrid = ({images}) => {
  return(
    <section className="image-grid row">
      {
        images.map((image, i) => {
          return (
            <ImageItem key={i} image={image} />
          )
        })
      }
    </section>
  )
};

export default ImageGrid;
