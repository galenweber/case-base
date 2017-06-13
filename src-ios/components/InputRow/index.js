import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import FreeInput from '../FreeInput';

const checkAnswer = function checkAnswer(response, answer, margin) {
  return Math.abs(response - answer) <= margin;
};

const InputRow = function InputRow(props) {
  const { type, response, answer, margin, submitted } = props;
  let Input;

  const isCorrect = checkAnswer(response, answer, margin);

  let feedbackStyle = {};

  if (submitted) {
    feedbackStyle = (isCorrect) ? styles.correct : styles.incorrect;
  }

  if (type === 'text') {
    Input = FreeInput;
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
  type: PropTypes.string.isRequired,
};

InputRow.propTypes = propTypes;

export default InputRow;

