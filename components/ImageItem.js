import React from 'react';
import {imgUrl} from "../utils/constants";
import Image from "next/image";

const ImageItem = ({image}) => {

  return (
    <div className="col-xs-12 col-sm-4">
      <div className="row center-xs">
        <div className="col-xs-12">
          <h5>{image}</h5>
          <Image src={generateSrc(image)} width={200} height={200} className="image" alt={image}/>
        </div>
      </div>
    </div>
  )
};

export default ImageItem;

const generateSrc = (filename) => {
  const src = imgUrl + encodeURIComponent(filename);
  console.log('image source', src);
  return src;
};
