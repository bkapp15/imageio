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

  const handleError = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError('');
    }, 5000);
  };

  const handleImageSearch = async () => {
    axiosClient.get(`/api/images?search=${encodeURIComponent(searchStr)}`).then(res => {
        setImages(res.data.images);
      }).catch(err => {
        handleError(err?.response?.data?.message || 'Error in search');
    });

  };

  const renderError = () => {
    if (!error) {
      return '';
    }
    return (
      <section className="row">
        <p className="error-text col-xs">{error}</p>
      </section>
    )
  };

  return (
    <main className="imageio-container">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/flexboxgrid/6.3.0/flexboxgrid.min.css" type="text/css" />
      </Head>
      <section className="row start-xs center-sm between-sm">
        <div className="col-xs-12 col-sm-8">
          <SearchInput setSearchStr={setSearchStr} />
        </div>
        <div className="col-xs-12 col-sm-4">
          <UploadButton setError={handleError}/>
        </div>
      </section>
      {renderError()}
      <ImageGrid images={images} />
    </main>
  )
}
