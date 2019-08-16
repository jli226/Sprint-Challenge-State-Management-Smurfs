import {
  FETCH_SMURF_DATA_START,
  FETCH_SMURF_DATA_SUCCESS,
  FETCH_SMURF_DATA_FAILURE,
  POST_SMURF_DATA_SUCCESS,
  DELETE_SMURF_DATA_SUCCESS,
  EDIT_SMURF_DATA_SUCCESS
} from "./../actions";

const intialState = {
  smurfArray: [],
  error: "",
  loading: false
};

const reducer = (state = intialState, action) => {
  // console.log('reducer action: ', action)
  switch (action.type) {
    case FETCH_SMURF_DATA_START:
      return {
        ...state,
        error: "",
        loading: true
      };
    case FETCH_SMURF_DATA_SUCCESS:
      return {
        ...state,
        smurfArray: action.payload,
        error: "",
        loading: false
      };
    case FETCH_SMURF_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case POST_SMURF_DATA_SUCCESS:
      return {
        ...state,
        smurfArray: [...state.smurfArray, action.payload],
        error: "",
        loading: false
      };
    case DELETE_SMURF_DATA_SUCCESS:
      return {
        ...state,
        smurfArray: action.payload,
        error: "",
        loading: false
      };
    case EDIT_SMURF_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
