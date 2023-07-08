import React from 'react';
import imgUrl from '../../../images/chatgpt.jpg';
import './ImageSection.css';

const ImageSection = () => {
  return (
    <div className='training_details_image_container'>
      <img className='training_details_image' src={imgUrl} alt='details' />
    </div>
  );
};

export default ImageSection;
