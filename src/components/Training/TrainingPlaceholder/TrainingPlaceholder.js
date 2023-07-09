import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TrainingPlaceholder.css';

const TrainingPlaceholder = ({ title, description, image, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className='training_placeholder_container'
      onClick={() => {
        navigate('/details');
      }}>
      <div className='training_placeholder_number'>{id}</div>
      <div className='training_placeholder_text'>
        <div className='training_placeholder_title'>{title}</div>
        <div className='training_placeholder_description'>{description}</div>
      </div>

      <img className='training_placeholder_image' src={image} alt='' />
    </div>
  );
};

export default TrainingPlaceholder;
