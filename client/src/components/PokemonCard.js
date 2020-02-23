import React from "react";
import {Card, CardImg} from "reactstrap";

const PokemonCard = (props) =>
{
    return(
        <div>
            <Card style={{width:"260px", height:"260px", float: "left", marginRight: "16px", marginTop: "8px"}} key={props.id} onClick={() => props.clicked(props.id)}>
                <CardImg src={props.image} alt={props.name} />
            </Card> 
        </div>
    )
};

export default PokemonCard;