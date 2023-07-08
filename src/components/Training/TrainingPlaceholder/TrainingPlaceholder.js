import React from 'react';
import './TrainingPlaceholder.css';

const TrainingPlaceholder = ({ title, description, image }) => {
  return (
    <div className='training_placeholder_container'>
      <div className='training_placeholder_number'>1</div>
      <div className='training_placeholder_text'>
        <div className='training_placeholder_title'>{title}</div>
        <div className='training_placeholder_description'>{description}</div>
      </div>

      <img className='training_placeholder_image' src={image} alt='' />
    </div>
  );
};

export default TrainingPlaceholder;
