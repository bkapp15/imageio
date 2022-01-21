import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useEffect, useState} from "react";
import ImageGrid from "../components/ImageGrid";
import axios from "axios";
import UploadButton from "../components/UploadButton";

export default function Home() {

  const [searchStr, setSearchStr] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    handleImageSearch();
  }, [searchStr]);

  const handleImageSearch = async () => {
    const response = await axios.get('http://localhost:3000/api/images');
    console.log('response.data: ', response.data);
    setImages(response.data.images);
  };

  const renderError = () => {
    if (!error) {
      return '';
    }
    return (
      <p>{error}</p>
    )
  };

  return (
    <section>
      {renderError()}
      <UploadButton setError={setError}/>
      <ImageGrid images={images} />
    </section>
  )
}
