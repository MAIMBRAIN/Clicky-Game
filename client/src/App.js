import React, { useState } from 'react';
import './App.css';
import {Navbar, NavbarBrand, NavbarText, Container} from "reactstrap";
import Card from "./components/PokemonCard";
import PokemonCard from "./cards.json"

function App() {
  const initialScore = 0;
  const [Score, setScore] = useState(0)
  const [HighScore, setHighScore] = useState(0)
  const [clickedArray, setClickedArray] = useState([])
  const [PokemonCard] = useState()
  
  //When card is clicked
  //IF the ID is in the ARRAY
  //    Then user loses
  //ELSE if the ID is NOT in the array
  // Store the ID in the ARRAY
  // Randomize the cards

  function clicked(id)
  {
    // if(clickedArray.includes(id))
    // {
    //   alert("You Lose!")
    //   setHighScore(Score)
    // }
    // else
    // {
    //   setClickedArray(clickedArray.push(id));
    //   setScore(Score + 1)
    // }

    console.log(id)
  }

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
        {PokemonCard.map((pokemon) =>
        {
          return(
            <Card key={pokemon.id} image={pokemon.image} name={pokemon.name} onClick={clicked(pokemon.id)}/>
          )
        })}
      </Container>
    </div>
  );
}

export default App;
