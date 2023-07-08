import React from 'react';
import TrainingPlaceholder from '../../Training/TrainingPlaceholder/TrainingPlaceholder';

const DashboardTrainingList = () => {
  const data = [
    {
      title: 'One-Day Bootcamp on ChatGPT',
      description:
        'Master the art of ChatGPT and unlock the potential of conversational AI. Dive into the world of natural language processing, chatbot development, and dialogue systems. Get hands-on experience and learn to build interactive and intelligent chatbot applications.',
      image: require('../../../images/chatgpt.jpg'),
    },
    {
      title: 'One-Week Bootcamp on PowerApps',
      description:
        'Empower your business with PowerApps! In just one week, become proficient in creating powerful and customized business applications without writing extensive code. Learn to leverage the capabilities of PowerApps to streamline processes and enhance productivity.',
      image: require('../../../images/flutter.jpg'),
    },
    {
      title: 'Two-Week Bootcamp on Flutter',
      description:
        'Flutter, the cross-platform framework for building stunning native apps, is taking the app development world by storm. In this two-week bootcamp, learn Flutter from scratch, build beautiful UIs, and create high-performance mobile applications for iOS and Android platforms.',
      image: require('../../../images/training.jpg'),
    },
  ];
  return (
    <>
      <div className='training_placeholder_list_text'>
        <div className='training_placeholder_list_title'>
          <span>Manage your</span> Training Programs
        </div>
      </div>

      <div className='training_placeholder_list'>
        {data.map((item, index) => (
          <div>
            <TrainingPlaceholder
              title={item.title}
              description={item.description}
              image={item.image}
            />
            <div className='paired-button'>
              <div className='outlined-button'>Edit</div>
              <div className='filled-button'>Delete</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardTrainingList;
