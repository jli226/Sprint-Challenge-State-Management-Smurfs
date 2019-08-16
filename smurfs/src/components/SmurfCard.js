import React, { useState } from "react";
import { Card, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const SmurfCard = props => {
  // console.log('<SmurfCard /> props: ', props)
  const [inputState, setInputState] = useState({
    id: props.smurfData.id,
    name: "",
    age: props.smurfData.age,
    height: props.smurfData.height
  });

  const handleChanges = event => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.smurfData.name}</Card.Header>
        <Card.Meta>
          <span className="date">Age: {props.smurfData.age}</span>
        </Card.Meta>
        <Card.Description>Height: {props.smurfData.height}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="id badge outline" />
          ID: {props.smurfData.id}
        </a>
      </Card.Content>
      <input
        name="name"
        value={inputState.name}
        placeholder="New name"
        onChange={handleChanges}
      />
      <button onClick={() => props.editSmurfData(inputState)}>Edit</button>
      <button onClick={() => props.deleteSmurfData(props.smurfData.id)}>
        Delete
      </button>
    </Card>
  );
};

export default SmurfCard;
