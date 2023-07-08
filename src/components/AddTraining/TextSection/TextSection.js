import React, { useState } from 'react';

const TextSection = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    background: '',
    date: '8th july, 2023',
    location: 'Selena Bhaban, Lane 3, Mohakhali DOHS.',
    contact: '+8801985151514',
  });
  const onChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className='training_details_text_section_container'>
      <div className='training_details_text_section_label'>Title</div>

      <input
        name='title'
        className='training_details_text_section_info title-input'
        value={formData.title}
        onChange={onChangeFormData}
      />

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
