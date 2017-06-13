import React from 'react';
import {
  Alert,
  AsyncStorage,
  Button,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import Subheader from '../../components/Subheader';
import * as actions from '../../actions';

const mapStateToProps = state => state;

class Settings extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Case Settings',
  });

  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePress(caseIndex, pages) {
    Alert.alert(
      'Confirm Clear',
      'Are you sure you want to clear your responses for this case?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel'
        },
        {
          text: 'Clear',
          onPress: () => this.clearCases(caseIndex, pages)
        }
      ]
    );
  }

  clearCases(caseIndex, pages) {
    console.log('clearing cases');
    const keys = pages.map((e, i) => `c${caseIndex}p${i}`);
    this.props.clearResponses(keys);
  }


  render() {

    const { name, caseIndex, pages } = this.props.navigation.state.params;

    return (
      <View>
        <View
          style={styles.bodyText}
        >
          <Text
            style={styles.settingsText}
          >
            CASE TITLE:
          </Text>
          <Text
          >
            {name}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => this.handlePress(caseIndex, pages)}
            title="Clear Responses"
          />
        </View>
      </View>
    );
  }
}

Settings.propTypes = {
};

export default connect(
  mapStateToProps,
  actions,
)(Settings);


