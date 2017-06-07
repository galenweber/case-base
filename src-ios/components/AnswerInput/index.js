import React from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const AnswerInput = function AnswerInput({ id, responseById, submittedById, handleInput, answer, margin }) {
  const submitted = submittedById[id];
  const response = responseById[id];
  const correct = checkAnswer(response, answer, margin);

  let style;
  if (!submitted) style = {};
  if (submitted) {
    style = correct ? styles.correct : styles.incorrect;
  }

  return (
    <View style={styles.row}>
      <TextInput
        editable={!submitted}
        style={[styles.input, style]}
        onChangeText={text => handleInput(id, text)}
        value={response}
      />
    </View>
  );
};

const propTypes = {
  id: PropTypes.string.isRequired,
  responseById: PropTypes.shape().isRequired,
  submittedById: PropTypes.shape().isRequired,
  handleInput: PropTypes.func.isRequired,
  answer: PropTypes.number.isRequired,
  margin: PropTypes.number.isRequired,
};

AnswerInput.propTypes = propTypes;

export default AnswerInput;
