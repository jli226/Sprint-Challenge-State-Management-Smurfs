import React, { useState } from "react";

const SmurfForm = props => {
  // console.log('<SmurfForm /> props: ', props)
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });
  // console.log('<SmurfForm /> formState: ', formState)

  const handleChanges = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
      <h3>Add a smurf!</h3>
      <form>
        <input
          name="name"
          value={formState.name}
          placeholder="Name"
          onChange={handleChanges}
        />
        <input
          name="age"
          value={formState.age}
          placeholder="Age"
          onChange={handleChanges}
        />
        <input
          name="height"
          value={formState.height}
          placeholder="Height"
          onChange={handleChanges}
        />
        <button
          onClick={event => {
            event.preventDefault();
            props.addSmurfData(formState);
            setFormState({
              name: "",
              age: "",
              height: "",
              id: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default SmurfForm;
