import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './styles';
import Divider from '../Divider';

export default function Header({ children }) {
  return (
    <View>
      <Text style={styles.header} >
        { children }
      </Text>
      <Divider />
    </View>
  )
}

