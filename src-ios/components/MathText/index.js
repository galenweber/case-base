import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MathText = function BodyText({ children }) {
  return (
    <Text style={styles.mathText} >
      { children.split('')
        .map(e => {
          if (e === '=') {
            return <Text style={styles.green}>{e}</Text>
          } if (e === '/') {
            return <Text style={styles.purple}>{e}</Text>
          } else {
            return <Text>{e}</Text>
          }
        })
      }
    </Text>
  );
};

const propTypes = {
  children: PropTypes.node.isRequired,
};

MathText.propTypes = propTypes;

export default MathText;

