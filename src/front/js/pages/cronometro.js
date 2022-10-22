import React from 'react'
import { useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone'
import "../../styles/user.css";
import { SubiendoImagenes } from './SubiendoImagenes.jsx';

export const Cronometro = () => {

  
  return (
    <div>
      
  </div>
  )
};














// const [imageSelected, setImageSelected] = useState("");


  // const uploadImage = () => {

  //   const formData = new FormData()
  //   formData.append("file", imageSelected)
  //   formData.append("upload_preset", "vzs3evez");



  //   Axios.post(
  //     "https://api.cloudinary.com/v1_1/dndyj4wwf/image/upload",
  //     formData).then((response) => {
  //     console.log(response);
  //   });

  // };


  // <input type="file" onChange={
  //   (event) => {
  //     setImageSelected(event.target.files[0]);
  //   }
  // } />
  // <button onClick={uploadImage}>Upload Image</button>