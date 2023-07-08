import React from 'react';
import './TextSection.css';

const TextSection = () => {
  return (
    <div className='training_details_text_section_container'>
      <div className='training_details_text_section_title'>
        One-Day Bootcamp on ChatGPT
      </div>

      <div className='training_details_text_section_label'>Description</div>
      <div className='training_details_text_section_info'>
        Master the art of ChatGPT and unlock the potential of conversational AI.
        Dive into the world of natural language processing, chatbot development,
        and dialogue systems. Get hands-on experience and learn to build
        interactive and intelligent chatbot applications.
      </div>
      <div className='training_details_text_section_label'>Background</div>
      <div className='training_details_text_section_info'>
        Master the art of ChatGPT and unlock the potential of conversational AI.
        Dive into the world of natural language processing, chatbot development,
        and dialogue systems. Get hands-on experience and learn to build
        interactive and intelligent chatbot applications.
      </div>
      <div className='training_details_text_section_metaData'>
        <div style={{ fontWeight: 'bold' }}>Date</div>
        <div style={{ fontWeight: 'bold' }}>Location</div>
        <div style={{ fontWeight: 'bold' }}>Contact</div>
        <div>8th july, 2023</div>
        <div>Selena Bhaban, Lane 3, Mohakhali DOHS.</div>
        <div>+8801985151514</div>
      </div>
    </div>
  );
};

export default TextSection;
