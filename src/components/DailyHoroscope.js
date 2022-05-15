import React from 'react';
import Dropdown from './Dropdown';
import { getSingleSign } from '../lib/api';
import Footer from './Footer';

const signs = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces',
];

const DailyHoroscope = () => {
  const [sign, setSign] = React.useState('');
  const [horoscope, setHoroscope] = React.useState(null);

  React.useEffect(() => {
    if (sign) {
      async function getData(params) {
        const { data } = await getSingleSign(sign);
        setHoroscope(data);
      }

      getData();
    }
  }, [sign]);

  return (
    <section className='hero is-fullheight-with-navbar hero-background'>
      <div>
        <Dropdown
          handleClick={setSign}
          formLabel='Choose a sign'
          buttonText='Send sign'
          action='/'
          signs={signs}
        ></Dropdown>
        <div className='card'>
          <div>
            {!!horoscope && (
              <p>
                {' '}
                <strong>Date range:</strong> {horoscope.date_range}
              </p>
            )}
            {!!horoscope && (
              <p>
                {' '}
                <strong>Today's date:</strong> {horoscope.current_date}
              </p>
            )}
            {!!horoscope && (
              <p>
                {' '}
                <strong>Description:</strong> {horoscope.description}
              </p>
            )}
            {!!horoscope && (
              <p>
                <strong>Sign compatibility:</strong> {horoscope.compatibility}
              </p>
            )}
            {!!horoscope && (
              <p>
                <strong>Mood for today:</strong> {horoscope.mood}
              </p>
            )}
            {!!horoscope && (
              <p>
                <strong>Color of today:</strong> {horoscope.color}
              </p>
            )}
            {!!horoscope && (
              <p>
                <strong>Lucky number:</strong> {horoscope.lucky_number}
              </p>
            )}
            {!!horoscope && (
              <p>
                <strong>Lucky time:</strong> {horoscope.lucky_time}
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default DailyHoroscope;
