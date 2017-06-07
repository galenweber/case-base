import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import FreeInput from '../FreeInput';

const InputRow = function InputRow(props) {
  let Input;
  if (props.type === "text") {
    Input = FreeInput;
  }

  return (
    <View style={styles.inputRow}>
      <Input {...props} />
    </View>
  )
}

export default InputRow;

