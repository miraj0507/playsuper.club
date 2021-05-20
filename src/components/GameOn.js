import React from 'react';
import './GameOn.css';
import GameonDesc from './GameOnDesc';
function GameOn(){
    return(
        <div className="game-on-container">
            <div className='game-on-text'>
                <h1>GET YOUR GAME ON</h1>
            </div>
            <div className='game-on-card-container'>
                    <GameonDesc
                    text1="Select a Match"
                    text2="1"
                    />

                    <GameonDesc
                    text1="Create Your Team"
                    text2="2"
                    />  

                     <GameonDesc
                    text1="Join Contest"
                    text2="3"
                    />


                    <GameonDesc
                    text1="Claim Your Wins"
                    text2="4"
                    />
            </div>
        </div>
    );
}

export default GameOn;