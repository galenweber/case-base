import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const BoldText = function BoldText({ children }) {
  return (
    <Text style={{fontWeight: 'bold'}} >
      { children }
    </Text>
  );
};

const propTypes = {
  children: PropTypes.node.isRequired,
};

BoldText.propTypes = propTypes;

export default BoldText;

