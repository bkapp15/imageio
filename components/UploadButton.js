import React, {useState, useRef} from 'react';
import axiosClient from "../utils/axiosClient";

const UploadButton = ({setError}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const fileInputRef = useRef('input');

  const handleFileSubmit = async () => {
    const formData = new FormData();
    setDialogOpen(false);
    console.log('inputRef', fileInputRef.current);
    const file = fileInputRef.current.files[0];
    console.log(file);
    formData.append('file', file);
    axiosClient.post('api/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(() => {
      window.location.reload();
    }).catch(err => {
      setError(err.response.data.message)
    });


  };


  return (
    <section>
      <button onClick={() => setDialogOpen(true)}>Upload</button>
      <dialog open={dialogOpen}>
        <input type="file" name="file" ref={fileInputRef} accept="image/png, image/gif, image/jpeg"/>
        <button type="submit" onClick={handleFileSubmit}>Submit</button>
      </dialog>
    </section>
  )
}

export default UploadButton;
