import React from 'react'

import './Header.css'

const Header = () => {
    return (
        <div className="header grid-x">
            <div className="medium-8 medium-offset-2 cell">
                <div className="text-holder">
                    <h1>Rick and Morty</h1>
                    <h2>Soundboard</h2>
                </div>
            </div>
        </div>
    )
}

export default Header
