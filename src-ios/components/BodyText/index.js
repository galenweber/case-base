import React from 'react';
import {
  Text,
} from 'react-native';
import styles from './styles';

export default function BodyText({ children }) {
  return (
    <Text style={styles.bodyText} >
      { children }
    </Text>
  )
}


