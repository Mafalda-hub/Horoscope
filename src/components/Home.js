import React from 'react';
import ArrowImage from '../assets/downwardarrow.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  return (
    <section className='hero is-fullheight-with-navbar hero-background'>
      <div className='pt-6 has-text-centered'>
        <div className='container '>
          <h1 id='main-title'>StarFinder</h1>
          <h2 id='main-tagline'>
            Ever wondered what the stars have in store for you?
          </h2>
        </div>
        <div className='arrow'>
          <img src={ArrowImage} alt='arrow' />
        </div>
        <div>
          <h3>Click below to get today's horoscope</h3>
          <Link class='button is-large is-responsive' to='/dailyhoroscope'>
            Click me!
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
