import React from 'react';
import ImageAna from '../assets/Ana.jpg';
import ImageTom from '../assets/Tom.jpg';

//about page
const About = () => {
  return (
    <div className='about'>
      <div className='profiles'>
        <div className='Ana'>
          <h2>Ana</h2>
          <div className='picdiv'>
            <img id='Ana' src={ImageAna} alt='Ana'></img>
          </div>
          <p>Ana is a Tristan wannabe.</p>
          <p>
            <a
              href='https://github.com/Mafalda-hub'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href='https://www.linkedin.com/in/ana-borges-6080a2222/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className='Tom'>
          <h2>Tom</h2>
          <div className='picdiv'>
            <img id='Tom' src={ImageTom} alt='Tom'></img>
          </div>
          <p>
            Tom is a day-dreamer who likes inventing things in his head. Then he
            went to a coding bootcamp, so now he can put them on the internet.
          </p>
          <p>
            <a
              href='https://github.com/TomCRiley'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href='https://www.linkedin.com/in/tom-riley-746055121/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
