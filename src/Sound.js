import React from 'react'

import './Sound.css'

const Sound = (props) => {
    const playSound = () => {
        // const givenSound = new Audio({props.sound.path})
        const givenSound = new Audio('./sounds/Aids.mp3')
        givenSound.play()
        console.log("Play Sumthin")
    }

    return (
        <div
        className="sound cell"
        onClick={playSound}
        >
            <h3>{props.sound.name}</h3>
        </div>
    )
}

export default Sound
