import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';

const Fraction = function Fraction({ children }) {
  const [numerator, denominator] = children.split('/');

  const FONT_WIDTH = 6;

  const widthStyle = {
    width: children.length * FONT_WIDTH,
  };

  return (
    <View
      style={[styles.fraction, widthStyle]}
    >
      <Text
        style={styles.numerator}
      >
        {numerator}
      </Text>
      <Text>/</Text>
      <Text
        style={styles.denominator}
      >
        {denominator}
      </Text>
    </View>
  );
}

export default Fraction;
