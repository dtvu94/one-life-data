import React from 'react';

const Home = () => (
  <>
    <header className='body-component home-header'>
      <button className='home-header__button'>Register</button>
      <button className='home-header__button'>Sign In</button>
    </header>

    <main className='body-component'>Main</main>

    <footer className='body-component home-footer'>
      <button className='home-footer__button'>License</button>
      <button className='home-footer__button'>Code</button>
      <button className='home-footer__button'>Privacy</button>
      <button className='home-footer__button'>Security</button>
      <button className='home-footer__button'>Docs</button>
      <button className='home-footer__button'>About</button>
    </footer>
  </>
);

export default Home;
