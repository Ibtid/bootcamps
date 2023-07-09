import React, { useRef, useState } from 'react';
import imgUrl from '../../../images/chatgpt.jpg';
import './ImageSection.css';

const ImageSection = () => {
  const [file, setFile] = useState(null);

  const filePickerRef = useRef();

  const pickImageHandler = () => {
    console.log(filePickerRef.current);
    filePickerRef.current.click();
  };

  const handleImage = async (event) => {
    if (event.target.files && event.target.files.length === 1) {
      setFile(event.target.files[0]);
    }
  };
  return (
    <div className='add_training_image_container'>
      <div className='add_training_add_image_container'>
        <div className='filled-button' onClick={pickImageHandler}>
          Select Image
        </div>
      </div>
      <input
        style={{ display: 'none' }}
        ref={filePickerRef}
        type='file'
        className='profile-img__input'
        id='image'
        name='image'
        placeholder='Choose the image'
        accept='.jpg,.png,.jpeg'
        onChange={handleImage}
      />

      <img
        className='add_training_image'
        src={file ? URL.createObjectURL(file) : imgUrl}
        alt='img'
      />
    </div>
  );
};

export default ImageSection;
