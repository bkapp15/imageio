import React from 'react';
import Image from 'next/image'
import {imgUrl} from "../utils/constants";

const ImageGrid = ({images}) => {
  return(
    <section className="image-grid row">
      {
        images.map((image, i) => {
          return (
            <div className="col-xs-12 col-sm-4">
              <div className="row center-xs">
                <div className="col-xs-12">
                  <img key={i} src={generateSrc(image)} width={200} height={200} className="image"/>
                </div>
              </div>
            </div>
          )
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
