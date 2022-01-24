import React, {useEffect, useState} from "react";
import Head from 'next/head'
import ImageGrid from "../components/ImageGrid";
import UploadButton from "../components/UploadButton";
import SearchInput from "../components/SearchInput";
import axiosClient from "../utils/axiosClient";

export default function Home() {

  const [searchStr, setSearchStr] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    handleImageSearch();
  }, [searchStr]);

  const handleImageSearch = async () => {
    // const response = await axios.get(`http://localhost:3000/api/images?`);
    const response = await axiosClient.get(`/api/images?search=${encodeURIComponent(searchStr)}`);
    console.log('response.data: ', response.data);
    setImages(response.data.images);
  };

  const renderError = () => {
    if (!error) {
      return '';
    }
    return (
      <section className="row">
        <p>{error}</p>
      </section>
    )
  };

  return (
    <main className="imageio-container">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/flexboxgrid/6.3.0/flexboxgrid.min.css" type="text/css" />
      </Head>
      {renderError()}
      <section className="row">
        <div className="col-xs-12">
          <SearchInput setSearchStr={setSearchStr} />
        </div>
        <div className="col-xs-12">
          <UploadButton setError={setError}/>
        </div>
      </section>

      <ImageGrid images={images} />
    </main>
  )
}
