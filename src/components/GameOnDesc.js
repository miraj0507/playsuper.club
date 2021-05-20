import React from 'react';

function GameonDesc(props) {
  return (
    <>
      <li className='game-on-rectangle'>
        <div class='box'> <h5 className='text-box'>{props.text1}</h5>
        <div class='ellipse'><h5 className='text-circle'>{props.text2}</h5> </div>
        </div>
      </li>
    </>
  );
}

export default GameonDesc;