import * as types from '../constants/ActionTypes';

// we use 'response' because it better reflects user input
export const submitResponse = (id) => {
  return (
    {
      type: types.SUBMIT_RESPONSE,
      id
    }
  );
}

export const handleInput = (id, value) => {
  return (
    {
      type: types.TYPE_INPUT,
      id,
      value,
    }
  );
}
