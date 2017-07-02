import React from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MathText = function MathText({ children }) {
  return (
    <ScrollView
      horizontal
      style={styles.mathScroll}
    >
      <Text style={styles.mathText} >
        { children }
      </Text>
    </ScrollView>
  );
};

const propTypes = {
  children: PropTypes.node.isRequired,
};

MathText.propTypes = propTypes;

export default MathText;

