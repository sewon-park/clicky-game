import React, { Component } from "react";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
// import Intro from "./components/Intro/Intro";
import Header from "./components/Header/Header";
import cards from "./cards.json";
import "./App.css";
let correctGuesses = 0;
let bestScore = 0;

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    correctGuesses,
    bestScore
  };

  setClicked = id => {

    // Make a copy of the state cards array to work with
    const cards = this.state.cards;

    // Filter for the clicked card
    const clickedCard = cards.filter(card => card.id === id);

    // If the card image's clicked value is already true, 
    // do the game over actions
    if (clickedCard[0].clicked){

        console.log ("Correct Guesses: " + correctGuesses);
        console.log ("Best Score: " + bestScore);

        correctGuesses = 0;
       

        for (let i = 0 ; i < cards.length ; i++){
            cards[i].clicked = false;
        }

       
        this.setState({ correctGuesses });
        this.setState({cards});

    // Otherwise, if clicked = false, and the user hasn't finished
    } else if (correctGuesses < 11) {

        // Set its value to true
        clickedCard[0].clicked = true;

        // increment the appropriate counter
        correctGuesses++;
        
       

        if (correctGuesses > bestScore){
            bestScore = correctGuesses;
            this.setState({ bestScore });
        }

        // Shuffle the array to be rendered in a random order
        cards.sort(function(a, b){return 0.5 - Math.random()});

        // Set this.state.matches equal to the new matches array
        this.setState({ cards });
        this.setState({correctGuesses});
        
    } else {

        // Set its value to true
        clickedCard[0].clicked = true;

        // restart the guess counter
        correctGuesses = 0;

        // Egg on the user to play again
       
        bestScore = 12;
        this.setState({ bestScore });
        
        for (let i = 0 ; i < cards.length ; i++){
            cards[i].clicked = false;
        }

        // Shuffle the array to be rendered in a random order
        cards.sort(function(a, b){return 0.5 - Math.random()});

        // Set this.state.matches equal to the new matches array
        this.setState({ cards });
        this.setState({correctGuesses});
        

    }
};

  render() {
    return (
      
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        
        <div className="container">
          <div className="row">
            {this.state.cards.map(card => (
              <Card
                setClicked={this.setClicked}
                id={card.id}
                key={card.id}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </Wrapper>

        );
      }
    }
    
    export default App;
    
