import React from 'react'

import './Sound.css'

const Sound = (props) => {
    playSound = () => {
        const givenSound = new Audio({props.path})
        givenSound.play()
    }

    return (
        <div
        className="sound cell"
        onClick={ playSound }
        >
            <h3>{props.sound.name}</h3>
        </div>
    )
}
