import React from 'react';

const Dropdown = ({ signs, handleClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <div className='flexdiv'>
        <div className='titleclass'>
          <h1>Your Daily Horoscope </h1>
        </div>
      </div>

      <div className='flexdiv'>
        <div className={isOpen ? 'dropdown is-active' : 'dropdown'}>
          <div className='dropdown-trigger'>
            <button
              className='button'
              id='button-dropdown'
              aria-haspopup='true'
              aria-controls='dropdown-menu'
              onClick={handleDropdownClick}
            >
              <span className='icon is-small'>
                <i className='fas fa-angle-down' aria-hidden='true'></i>
              </span>
              What's your sign?
            </button>
          </div>
          <div className='dropdown-menu' id='dropdown-menu' role='menu'>
            <div className='dropdown-content'>
              {signs.map((sign) => (
                <button
                  key={sign}
                  onClick={() => {
                    handleClick(sign);
                    handleDropdownClick();
                  }}
                  className='dropdown-item'
                >
                  {sign}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dropdown;
