import React from 'react';
import Image from 'next/image'
import {imgUrl} from "../utils/constants";

const ImageGrid = ({images}) => {
  return(
    <section>
      {
        images.map((image, i) => {
          return <img key={i} src={generateSrc(image)} width={200} height={200}/>
        })
      }
    </section>
  )
};

export default ImageGrid;

const generateSrc = (filename) => {
  const src = imgUrl + encodeURIComponent(filename);
  console.log('image source', src);
  return src;
};
