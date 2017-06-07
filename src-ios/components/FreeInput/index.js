import React from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const checkAnswer = function checkAnswer(response, answer, margin) {
  return Math.abs(response - answer) <= margin;
}

const FreeInput = function FreeInput({
  submitted,
  response,
  answer,
  margin,
  handleInput,
  id,
}) {
  const isCorrect = checkAnswer(response, answer, margin);

  let feedbackStyle = {};
  if (submitted) {
    feedbackStyle = (isCorrect) ? styles.correct : styles.incorrect;
  }

  return (
    <TextInput
      editable={!submitted}
      style={[styles.textInput, feedbackStyle]}
      onChangeText={text => handleInput(id, text)}
      value={response}
    />
  );
};

export default FreeInput;

