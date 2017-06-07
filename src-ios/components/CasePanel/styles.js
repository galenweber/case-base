import { StyleSheet } from 'react-native';

const styles = {
  container: {
    flexDirection: 'row',
    margin: 2,
    marginLeft: 4,
    marginRight: 4,
    alignSelf: 'stretch',
    borderColor: '#d9d9de',
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 2,
  },

  image: {
    width: 100,
    height: 100,
    margin: 4,
    borderRadius: 4,
  },

  textBody: {
    margin: 10,
    flexDirection: 'column',
  },

  title: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.87)',
  },

  company: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'rgba(0,0,0,0.54)',
  },

  filler: {
    flex: 1,
  },

  updated: {
    fontSize: 12,
    alignItems: 'center',
    color: 'rgba(0,0,0,0.54)',
  },
};

export default StyleSheet.create(styles);

