import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Divider from '../Divider';

const Header = function Header({ children }) {
  return (
    <View>
      <Text style={styles.header} >
        { children }
      </Text>
      <Divider />
    </View>
  );
};

const propTypes = {
  children: PropTypes.node.isRequired,
};

Header.propTypes = propTypes;

export default Header;

