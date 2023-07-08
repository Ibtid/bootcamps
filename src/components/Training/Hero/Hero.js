import React from 'react';
import TrainingImage from '../../../images/training.jpg';
import './Hero.css';

const Hero = () => {
  // return <div>Training: Join our Bootcamps and Level Up Your Skills!</div>;
  return (
    <div className='hero_container'>
      <img className='hero_image' src={TrainingImage} alt='training' />
      <div className='hero_text'>
        <div className='hero_title'>
          Shaping the Future:
          <span> Join our Bootcamps and Level Up Your Skills! </span>
        </div>

        <div className='hero_paragraph'>
          Engage with industry experts, instructors, and fellow learners who
          share your passion for growth. Our Bootcamps provide a supportive
          community where you can network, collaborate, and learn from
          real-world experiences.
        </div>
      </div>
    </div>
  );
};

export default Hero;
