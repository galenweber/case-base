import React from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import styles from './styles';

function checkAnswer (response, answer, margin) {
  return ((response >= answer - margin) && (response <= answer + margin))
}


export default function AnswerInput({ id, responseById, submittedById, handleInput, answer, margin  }) {

  const submitted = submittedById[id];
  console.log('submitted is ', submitted);
  const response = responseById[id];
  const correct = checkAnswer(response, answer, margin);

  let style;
  if (!submitted) style = {};
  if (submitted) {
    style = correct ? styles.correct: styles.incorrect;
  }

  return (
    <View style={styles.row}>
      <TextInput
        editable={!submitted}
        style={[styles.input, style]}
        onChangeText={(text) => handleInput(id, text)}
        value={response}
      />
    </View>
  )
}



