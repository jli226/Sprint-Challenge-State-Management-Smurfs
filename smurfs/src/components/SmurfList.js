import React from "react";
import SmurfCard from "./SmurfCard";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;
`;

const SmurfList = props => {
  // console.log('<SmurfList /> props: ', props)
  return (
    <>
      <h1>List of smurfs!</h1>
      <StyledContainer>
        {props.smurfArray &&
          props.smurfArray.map(smurf => (
            <SmurfCard
              key={smurf.id}
              smurfData={smurf}
              deleteSmurfData={props.deleteSmurfData}
              editSmurfData={props.editSmurfData}
            />
          ))}
      </StyledContainer>
    </>
  );
};

export default SmurfList;
