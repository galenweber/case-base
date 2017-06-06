import { AsyncStorage } from 'react-native';
import {
  SUBMIT_RESPONSE,
  TYPE_INPUT,
} from '../constants/ActionTypes';

const initialState = {
  inputIds: [],
  responseById: {},
  submittedById: {},
}

const inputIds = (state = initialState.inputIds, action) => {
  switch(action.type) {
    case TYPE_INPUT:
      if (state.includes(action.id)) {
        return state;
      }
      return [ ...state, action.id ];
    default:
      return state;
  }
}

const responseById = ( state = initialState.responseById, action) => {
  switch(action.type) {
    case TYPE_INPUT:
      const { id, value } = action;
      return Object.assign(
        {},
        state,
        { [id]: value }
      )
    default:
      return state;
  }
}

const asyncStore = ( state = initialState.responseById, action) => {
  const { id } = action;
  switch(action.type) {
    default:
      console.log('storing in DB!, key', id, 'value ', String(state[id]));
      AsyncStorage.setItem(id, String(state[id]))
        .then((res) => {
          AsyncStorage.getItem(id)
            .then((response) => console.log('value is ', response))
            .catch((error) => console.log('error is ', error))
        })
  }
}

const submittedById = ( state = initialState.submittedById, action) => {
  switch(action.type) {
    case SUBMIT_RESPONSE:
      const { id } = action;
      return Object.assign(
        {},
        state,
        { [id]: true }
      )
    default:
      return state;
  }
}

const caseBaseApp = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_RESPONSE:
      asyncStore(state.responseById, action);
    default:
      return {
        inputIds: inputIds(state.inputIds, action),
        responseById: responseById(state.responseById, action),
        submittedById: submittedById(state.submittedById, action),
      }
  }
}

export default caseBaseApp;
