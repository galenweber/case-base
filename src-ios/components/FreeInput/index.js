import React from 'react';
import {
  TextInput,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const FreeInput = function FreeInput({
  submitted,
  response,
  handleInput,
  id,
}) {
  return (
    <TextInput
      editable={!submitted}
      style={styles.textInput}
      onChangeText={text => handleInput(id, text)}
      value={response}
    />
  );
};

const propTypes = {
  submitted: PropTypes.bool,
  handleInput: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

const defaultProps = {
  submitted: false,
  response: '',
};

FreeInput.propTypes = propTypes;
FreeInput.defaultProps = defaultProps;

export default FreeInput;

