import React from 'react';
import ImageSection from './ImageSection/ImageSection';
import './TrainingDetails.css';
import TextSection from './TextSection/TextSection';

const TrainingDetails = () => {
  return (
    <div className='trainingDetails_container'>
      <ImageSection />
      <TextSection />
    </div>
  );
};

export default TrainingDetails;
