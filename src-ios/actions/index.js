import * as types from '../constants/ActionTypes';

// we use 'response' because it better reflects user input
export const submitResponse = id => (
  {
    type: types.SUBMIT_RESPONSE,
    id,
  }
);

export const clearResponses = ids => (
  {
    type: types.CLEAR_RESPONSES,
    ids,
  }
);


export const setSubmitted = (id, bool) => (
  {
    type: types.SET_SUBMITTED,
    id,
    bool,
  }
);

export const handleInput = (id, value) => (
  {
    type: types.TYPE_INPUT,
    id,
    value,
  }
);

export const toggleModal = id => (
  {
    type: types.TOGGLE_MODAL,
    id,
  }
);

