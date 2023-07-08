import React, { useState } from 'react';
import './TextSection.css';

const TextSection = () => {
  const [formData, setFormData] = useState({
    description:
      'Master the art of ChatGPT and unlock the potential of conversational AI. Dive into the world of natural language processing, chatbot development, and dialogue systems. Get hands-on experience and learn to build interactive and intelligent chatbot applications.',
    background:
      'Master the art of ChatGPT and unlock the potential of conversational AI. Dive into the world of natural language processing, chatbot development, and dialogue systems. Get hands-on experience and learn to build interactive and intelligent chatbot applications.',
    date: '8th july, 2023',
    location: 'Selena Bhaban, Lane 3, Mohakhali DOHS.',
    contact: '+8801985151514',
  });
  const onChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className='training_details_text_section_container'>
      <div className='training_details_text_section_title'>
        One-Day Bootcamp on ChatGPT
      </div>

      <div className='training_details_text_section_label'>Description</div>

      <textarea
        name='description'
        className='training_details_text_section_info large-input-textArea'
        value={formData.description}
        onChange={onChangeFormData}
      />
      <div className='training_details_text_section_label'>Background</div>
      <textarea
        name='background'
        className='training_details_text_section_info large-input-textArea'
        value={formData.background}
        onChange={onChangeFormData}
      />

      <div className='training_details_text_section_metaData reduce-margin-top'>
        <div style={{ fontWeight: 'bold' }}>Date</div>
        <div style={{ fontWeight: 'bold' }}>Location</div>
        <div style={{ fontWeight: 'bold' }}>Contact</div>
        <div>{formData.date}</div>
        <div>{formData.location}</div>
        <div>{formData.contact}</div>
      </div>
      <div className='filled-button long-width'>Save Changes</div>
    </div>
  );
};

export default TextSection;
