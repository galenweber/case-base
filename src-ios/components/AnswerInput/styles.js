import { StyleSheet } from 'react-native';

const styles = {

  row: {
    flexDirection: 'row',
  },

  input: {
    textAlign: 'right',
    paddingRight: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flex: 1,
    height: 40,
    marginLeft: 1,
    marginRight: 1,
  },

  correct: {
    borderColor: 'green',
    borderWidth: 1,
  },

  incorrect: {
    borderColor: 'red',
    borderWidth: 1,
  },

};

export default StyleSheet.create(styles);


