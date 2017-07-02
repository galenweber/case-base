import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import FreeInput from '../FreeInput';
import PickerInput from '../PickerInput';

const checkAnswer = function checkAnswer(response, answer, margin) {
  const invalidValues = [null, undefined];
  if (invalidValues.includes(response)) return false;
  return Math.abs(
    parseFloat(response.replace(/[$,]+/g, ''))
    - answer,
  ) <= margin;
};

const InputRow = function InputRow(props) {
  const { type, response, answer, margin, submitted, items } = props;
  let Input;
  let isCorrect = true;

  if (type === 'text') {
    isCorrect = checkAnswer(response, answer, margin);
  } else if (type === 'picker') {
    isCorrect = (answer === response);
  }

  let feedbackStyle = {};

  if (submitted) {
    feedbackStyle = (isCorrect) ? styles.correct : styles.incorrect;
  }

  if (type === 'text') {
    Input = FreeInput;
  } else if (type === 'picker') {
    Input = PickerInput;
  } else {
    Input = FreeInput;
  }

  return (
    <View style={[styles.inputRow, feedbackStyle]}>
      <Input {...props} />
    </View>
  );
};

const propTypes = {
  answer: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.null,
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.null,
  ]),
  response: PropTypes.string,
  type: PropTypes.string.isRequired,
};

const defaultProps = {
  response: '',
}

InputRow.propTypes = propTypes;
InputRow.defaultProps = defaultProps;

export default InputRow;

