import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Sounds from './Sounds'
import Footer from './Footer'
import Requests from './Requests'

class App extends Component {

    constructor() {
        super()

        this.state = {
            soundsList: {
                one: {
                    name: "Aids",
                    path: "./sounds/Aids.mp3"
                },

                two: {
                    name: "Another Quick Mystery",
                    path: "./sounds/And now another quick mystery.mp3"
                },

                three: {
                    name: "That's the Way the News Goes",
                    path: "./sounds/And that's the way the news goes.mp3"
                },

                four: {
                    name: "Burger Time",
                    path: "./sounds/Burger time.mp3"
                },

                five: {
                    name: "Challenging Mating Season",
                    path: "./sounds/Challenging mating season.mp3"
                },

                six: {
                    name: "Fresh Start",
                    path: "./sounds/Fresh Start.mp3"
                },

                seven: {
                    name: "Get Swchifty",
                    path: "./sounds/Get Schwifty.mp3"
                },

                eight: {
                    name: "Grass Tastes Bad",
                    path: "./sounds/Graaaass tastes bad.mp3"
                },

                nine: {
                    name: "Say That All the Time",
                    path: "./sounds/Haha yeah say that all the time.mp3"
                },

                ten: {
                    name: "Head Bent Over",
                    path: "./sounds/Head bent over.mp3"
                },

                eleven: {
                    name: "Hit the Sack",
                    path: "./sounds/Hit the sack jack.mp3"
                },

                twelve: {
                    name: "How Did I Get Here",
                    path: "./sounds/How did I get here.mp3"
                },

                thirteen: {
                    name: "Ants-In-My-Eyes-Johnson",
                    path: "./sounds/I'm ants in my eyes Johnson.mp3"
                },

                fourteen: {
                    name: "I'm Mr. Meeseeks",
                    path: "./sounds/I'm Mr Meeseeks.mp3"
                },

                fifteen: {
                    name: "Stay Away From the Coffee Machine",
                    path: "./sounds/Just stay away from the coffee machine.mp3"
                },

                sixteen: {
                    name: "Lick My Balls",
                    path: "./sounds/Lick Lick Lick My Balls.mp3"
                },

                seventeen: {
                    name: "Morty Falls",
                    path: "./sounds/Morty Fall.mp3"
                },

                eighteen: {
                    name: "No Jumping In the Sewer",
                    path: "./sounds/No jumpin in the sewer.mp3"
                },

                nineteen: {
                    name: "Oh Geez Rick",
                    path: "./sounds/Oh geez rick.mp3"
                },

                twenty: {
                    name: "Oh I Love My Strawberry Smiggles",
                    path: "./sounds/Oh I love my.mp3"
                },

                twentyOne: {
                    name: "Oh What the Hell?!?",
                    path: "./sounds/Oooooh what the hell.mp3"
                },

                twentyTwo: {
                    name: "Rick Ticky Tabby",
                    path: "./sounds/Ricky Ticky Tabby Biatch.mp3"
                },

                twentyThree: {
                    name: "Rubber Baby Babby Bunkers",
                    path: "./sounds/Rubber baby babby bunkers.mp3"
                },

                twentyFour: {
                    name: "Slum Slum Slippy Dop",
                    path: "./sounds/Slum slum slippy dop.mp3"
                },

                twentyFive: {
                    name: "So What If Your Life Was Meaningless",
                    path: "./sounds/So what if.mp3"
                },

                twentySix: {
                    name: "That's Usually the Man's Job",
                    path: "./sounds/That's usually the man's job.mp3"
                },

                twentySeven: {
                    name: "That Shit is Delicious",
                    path: "./sounds/This Shit is Delicious.mp3"
                },

                twentyEight: {
                    name: "Uh Oh Somersault Jump",
                    path: "./sounds/Uh oh somersault jump.mp3"
                },

                twentyNine: {
                    name: "Way Up Inside",
                    path: "./sounds/Waaaaay up inside.mp3"
                },

                thirty: {
                    name: "Well Laa Dee Da",
                    path: "./sounds/Well la de da.mp3"
                },

                thirtyOne: {
                    name: "Wubbalubbadubdub!!",
                    path: "./sounds/Wubbalubbadubdub.mp3"
                },

                thirtyTwo: {
                    name: "You Can Run",
                    path: "./sounds/You can run but you cant hide.mp3"
                },

                thirtyThree: {
                    name: "You Pass Butter",
                    path: "./sounds/You pass butter.mp3"
                }
            },
        }
    }

  render() {
    return (
      <div className="App">
        <Header />
        <Sounds soundsList={this.state.soundsList}/>
        <Requests />
        <Footer />
      </div>
    );
  }
}

export default App;
