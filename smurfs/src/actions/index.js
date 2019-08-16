import axios from "axios";

export const FETCH_SMURF_DATA_START = "FETCH_SMURF_DATA_START";
export const FETCH_SMURF_DATA_SUCCESS = "FETCH_SMURF_DATA_SUCCESS";
export const FETCH_SMURF_DATA_FAILURE = "FETCH_SMURF_DATA_FAILURE";

export const getSmurfData = () => dispatch => {
  dispatch({ type: FETCH_SMURF_DATA_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(result =>
      dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: result.data })
    )
    .catch(error =>
      dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: "API error" })
    );
};

export const POST_SMURF_DATA_SUCCESS = "POST_SMURF_DATA_SUCCESS";

export const addSmurfData = smurfData => dispatch => {
  dispatch({ type: FETCH_SMURF_DATA_START });
  const smurfWithId = {
    ...smurfData,
    id: Date.now()
  };
  axios
    .post(`http://localhost:3333/smurfs`, smurfWithId)
    .then(result =>
      dispatch({ type: POST_SMURF_DATA_SUCCESS, payload: smurfData })
    )
    .catch(error =>
      dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: "API error" })
    );
};

export const DELETE_SMURF_DATA_SUCCESS = "DELETE_SMURF_DATA_SUCCESS";

export const deleteSmurfData = smurfId => dispatch => {
  dispatch({ type: FETCH_SMURF_DATA_START });
  axios
    .delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then(result => {
      console.log("DELETE_SMURF_DATA_SUCCESS result : ", result);
      dispatch({ type: DELETE_SMURF_DATA_SUCCESS, payload: result.data });
    })
    .catch(error =>
      dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: "API error" })
    );
};

export const EDIT_SMURF_DATA_SUCCESS = "EDIT_SMURF_DATA_SUCCESS";

export const editSmurfData = smurfData => dispatch => {
  dispatch({ type: FETCH_SMURF_DATA_START });
  axios
    .put(`http://localhost:3333/smurfs/${smurfData.id}, smurfData`)
    .then(result => {
      console.log("EDIT_SMURF_DATA_SUCCESS result : ", result);
      dispatch({ type: EDIT_SMURF_DATA_SUCCESS, payload: result.data });
    })
    .catch(error =>
      dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: "API error" })
    );
};
