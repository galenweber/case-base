import React from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import styles from './styles';


export default function AnswerInput({ placeholder }) {
  return (
    <View style={styles.row}>
      <TextInput
        style={styles.input}
        value={(placeholder)}
      />
    </View>
  )
}



