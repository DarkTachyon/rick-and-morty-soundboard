import React from 'react'

import './Sounds.css'
import Sound from './Sound'

const Sounds = (props) => {
    return (
        <div className="medium-8 medium-offset-2 cell">
        <div className="sound-body grid-x grid-padding-x small-up-2 medium-up-2 large-up-3">
            <Sound sound={props.soundsList.one}/>
            <Sound sound={props.soundsList.two}/>
            <Sound sound={props.soundsList.three}/>
            <Sound sound={props.soundsList.four}/>
            <Sound sound={props.soundsList.five}/>
            <Sound sound={props.soundsList.six}/>
            <Sound sound={props.soundsList.seven}/>
            <Sound sound={props.soundsList.eight}/>
            <Sound sound={props.soundsList.nine}/>
            <Sound sound={props.soundsList.ten}/>
            <Sound sound={props.soundsList.eleven}/>
            <Sound sound={props.soundsList.twelve}/>
            <Sound sound={props.soundsList.thirteen}/>
            <Sound sound={props.soundsList.fourteen}/>
            <Sound sound={props.soundsList.fifteen}/>
            <Sound sound={props.soundsList.sixteen}/>
            <Sound sound={props.soundsList.seventeen}/>
            <Sound sound={props.soundsList.eighteen}/>
            <Sound sound={props.soundsList.nineteen}/>
            <Sound sound={props.soundsList.twenty}/>
            <Sound sound={props.soundsList.twentyOne}/>
            <Sound sound={props.soundsList.twentyTwo}/>
            <Sound sound={props.soundsList.twentyThree}/>
            <Sound sound={props.soundsList.twentyFour}/>
            <Sound sound={props.soundsList.twentyFive}/>
            <Sound sound={props.soundsList.twentySix}/>
            <Sound sound={props.soundsList.twentySeven}/>
            <Sound sound={props.soundsList.twentyEight}/>
            <Sound sound={props.soundsList.twentyNine}/>
            <Sound sound={props.soundsList.thirty}/>
            <Sound sound={props.soundsList.thirtyOne}/>
            <Sound sound={props.soundsList.thirtyTwo}/>
            <Sound sound={props.soundsList.thirtyThree}/>
        </div>
        </div>
    )
}

export default Sounds
