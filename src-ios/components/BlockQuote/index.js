import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import BodyText from '../BodyText';

const BlockQuote = function BlockQuote({ children }) {
  return (
    <View style={styles.blockQuote}>
      <BodyText style={styles.grayText}>
        {children}
      </BodyText>
    </View>
  );
};

const propTypes = {
  children: PropTypes.node.isRequired,
};

BlockQuote.propTypes = propTypes;

export default BlockQuote;

