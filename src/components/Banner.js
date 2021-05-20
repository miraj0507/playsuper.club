import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Banner.css';

function Banner() {
  return (
    <div className='hero-container'>
        <div className='hero-text'>
            <h1>SHOW OFF YOUR FANTASY E-SPORTS SKILLS AND BE A PART OF THE ACTION</h1>
            <h1>UNLEASH THE GAMING VENOM IN YOU</h1>
            <div className='hero-btns'>
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                    GET STARTED <i className='far fa-play-circle' />
                    </Button>
            </div>
          </div>
      </div>
  );
}

export default Banner;