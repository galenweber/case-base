import { AsyncStorage } from 'react-native';
import {
  CLEAR_RESPONSES,
  SUBMIT_RESPONSE,
  SET_SUBMITTED,
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
  const caseId = id.slice(0, id.indexOf('p'));
  switch (action.type) {
    default:
      AsyncStorage.setItem(id, String(state[id]));
      AsyncStorage.setItem(`LastModified${caseId}`, (new Date()).toISOString());
  }
};

const asyncClear = (state = initialState, action) => {
  const { ids } = action;
  const caseId = ids[0].slice(0, ids[0].indexOf('p'));
  switch (action.type) {
    default:
      AsyncStorage.multiRemove(ids);
      AsyncStorage.setItem(`LastModified${caseId}`, (new Date()).toISOString());
  }
};


const submittedById = (state = initialState.submittedById, action) => {
  const { id, bool } = action;
  switch (action.type) {
    case SUBMIT_RESPONSE:
      return Object.assign(
        {},
        state,
        { [id]: true },
      );
    case SET_SUBMITTED:
      return Object.assign(
        {},
        state,
        { [id]: bool },
      );
    default:
      return state;
  }
};

const caseBaseApp = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_RESPONSE:
      asyncStore(state.responseById, action);
      return {
        inputIds: inputIds(state.inputIds, action),
        responseById: responseById(state.responseById, action),
        submittedById: submittedById(state.submittedById, action),
        modalById: modalById(state.modalById, action),
      };

    case CLEAR_RESPONSES:
      asyncClear(state, action);
      return {
        inputIds: inputIds(state.inputIds, action),
        responseById: responseById(state.responseById, action),
        submittedById: submittedById(state.submittedById, action),
        modalById: modalById(state.modalById, action),
      };

    default:
      return {
        inputIds: inputIds(state.inputIds, action),
        responseById: responseById(state.responseById, action),
        submittedById: submittedById(state.submittedById, action),
        modalById: modalById(state.modalById, action),
      };
  }
};

export default caseBaseApp;
