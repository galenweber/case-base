import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BodyText = function BodyText({ children }) {
  return (
    <Text style={styles.bodyText} >
      { children }
    </Text>
  );
};

const propTypes = {
  children: PropTypes.node.isRequired,
};

BodyText.propTypes = propTypes;

export default BodyText;

