import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  fetchUser: ["payload"],
  getAllUser: ["payload"],
  addUser: ["payload"],
});

const INITIAL_STATE = {
  payload: [],
};

const fetchUser = (state = INITIAL_STATE) => ({
  ...state,
});

const getAllUser = (state = INITIAL_STATE, action) => ({
  ...state,
  payload: action.payload,
});

const addUser = (state = INITIAL_STATE, action) => ({
  ...state,
  payload: [...state.payload, action.payload],
});

const HANDLERS = {
  [Types.FETCH_USER]: fetchUser,
  [Types.GET_ALL_USER]: getAllUser,
  [Types.ADD_USER]: addUser,
};

export default createReducer(INITIAL_STATE, HANDLERS);
