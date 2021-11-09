import React, { useState } from 'react';
import {Navbar, NavbarBrand, NavbarText, Container, Card, CardImg} from "reactstrap";
import Pokemon from "./cards.json"

function App() {
  // Initial score to reset Score state to
  const initialScore = 0;
  // States
  const [Score, setScore] = useState(initialScore)
  const [HighScore, setHighScore] = useState(0)
  const [pokemonArray, setPokemonArray] = useState(Pokemon)
  const [clickedArray, setClickedArray] = useState([]);

  // Clicked function, runs logic for the game
  function clicked(id) 
  {
    // If user gets all 12, display win
    if(clickedArray.length === pokemonArray.length)
    {
      win();
    }
    // If clickedArray doesn't include selected id
    if(!clickedArray.includes(id))
    {
      game(id);
    }
    // If clicked Id is in the array, display loss
    if(clickedArray.includes(id) && clickedArray.length !== 12)
    {
      lose();
    }
  }

  function gameReset()
  {
    setScore(initialScore);
    setClickedArray([]);
  }

  function win()
  {
    // Set score to high score since you can't get more than 12 points
    setHighScore(Score);
    // Reset the Game
    gameReset();
    // Alert user of win
    alert("You Win! \nThe game will now reset");
    // Randomize
  }

  function lose()
  {
    // If user's loser score is greater than the high score, store it
      if(Score > HighScore)
      {
        setHighScore(Score);
      }

      // Reset the Game
      gameReset();

      // Alert user of loss
      alert("You Lose! \nThe game will now reset");
  }

  function game(id)
  {
    // Increment score by 1 since it doesn't match the clicked array
    setScore(Score + 1);

    // Add the id to the clicked array
    setClickedArray(clickedArray.concat(id))

    // Randomize the pokemon cards
    randomize(pokemonArray);
  }

  // Function randomizes position of each pokemon using the Fisher-Yates Shuffle
  function randomize(pokemonArray) 
  {
    var currentIndex = pokemonArray.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) 
    {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = pokemonArray[currentIndex];
      pokemonArray[currentIndex] = pokemonArray[randomIndex];
      pokemonArray[randomIndex] = temporaryValue;
    }
    return setPokemonArray(pokemonArray)
  }
  
  // Render
  return (
    <div className="App">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>Memory Game</NavbarBrand>
        <div className="mx-auto">
          <NavbarText>Don't click the same Pokemon!</NavbarText>
        </div>
        <div className="mr-2">
          <NavbarText>Score: {Score}</NavbarText>
        </div>
        <NavbarText>High Score: {HighScore} </NavbarText>
      </Navbar>

      <Container>
        {/* Map out the cards from the pokemonArray state */}
        {pokemonArray.map((pokemon) => 
            {
                return(
                    <Card style={{width:"260px", height:"260px", float: "left", marginRight: "16px", marginTop: "8px"}} key={pokemon.id} value={pokemon.id} onClick={() => clicked(pokemon.id)}>
                        <CardImg src={pokemon.image} alt={pokemon.name} />
                    </Card> 
                )
            })}
      </Container>
    </div>
  );
}

export default App;
