import { AsyncStorage } from 'react-native';
import {
  SUBMIT_RESPONSE,
  TYPE_INPUT,
  TOGGLE_MODAL,
} from '../constants/ActionTypes';

const initialState = {
  inputIds: [],
  responseById: {},
  submittedById: {},
  modalById: {},
};

const inputIds = (state = initialState.inputIds, action) => {
  switch (action.type) {
    case TYPE_INPUT:
      if (state.includes(action.id)) {
        return state;
      }
      return [...state, action.id];
    default:
      return state;
  }
};

const responseById = (state = initialState.responseById, action) => {
  const { id, value } = action;
  switch (action.type) {
    case TYPE_INPUT:
      return Object.assign(
        {},
        state,
        { [id]: value },
      );
    default:
      return state;
  }
};

const modalById = (state = initialState.modalById, action) => {
  const { id } = action;
  switch (action.type) {
    case TOGGLE_MODAL:
      return Object.assign(
        {},
        state,
        { [id]: !state[id] },
      );
    default:
      return state;
  }
};


const asyncStore = (state = initialState.responseById, action) => {
  const { id } = action;
  switch (action.type) {
    default:
      AsyncStorage.setItem(id, String(state[id]));
  }
};

const submittedById = (state = initialState.submittedById, action) => {
  const { id } = action;
  switch (action.type) {
    case SUBMIT_RESPONSE:
      return Object.assign(
        {},
        state,
        { [id]: true },
      );
    default:
      return state;
  }
};

const caseBaseApp = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_RESPONSE:
      asyncStore(state.responseById, action);
    default:  // eslint-disable-line no-fallthrough
      return {
        inputIds: inputIds(state.inputIds, action),
        responseById: responseById(state.responseById, action),
        submittedById: submittedById(state.submittedById, action),
        modalById: modalById(state.modalById, action),
      };
  }
};

export default caseBaseApp;
