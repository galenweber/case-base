import React from 'react';
import {
  Alert,
  AsyncStorage,
  Button,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { NativeModules } from 'react-native'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import Subheader from '../../components/Subheader';
import B from '../../components/BoldText';
import * as actions from '../../actions';

const { InAppUtils } = NativeModules

const mapStateToProps = state => state;

class Settings extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Case Settings',
  });

  constructor(props) {
    super(props);
    this.state = {
      sku: props.sku,
      inStock: false,
    };
  }

  handlePurchasePress() {

  }

  handleClearPress(caseIndex, pages) {
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
    const keys = pages.map((e, i) => `c${caseIndex}p${i}`);
    this.props.clearResponses(keys);
  }

  componentDidMount() {
    const { sku } = this.state;
    InAppUtils.loadProducts([sku], (error, products) => {
      if (error) return error;
      this.setState({ inStock: true });
    });
  }


  render() {

    const { name, caseIndex, pages, locked } = this.props.navigation.state.params;

    return (
      <View>
        {(locked) ? (
          <View>
            <View
              style={styles.bodyText}
            >
              <Text
                style={styles.settingsText}
              >
                ACCESS LEVEL:
              </Text>
              <Text>
                <B>This case is currently locked.</B> Click below to purchase this case. Once purchased, you will have unlimited access to the pages and explanations of this case.
              </Text>
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => this.handlePress(caseIndex, pages)}
                title="Unlock Case ($0.99)"
              />
            </View>
          </View>
        ) : (
          <View
            style={styles.bodyText}
          >
            <Text
              style={styles.settingsText}
            >
              ACCESS LEVEL:
            </Text>
            <Text>
              This case is unlocked.
            </Text>
          </View>
        )}
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
            onPress={() => this.handleClearPress(caseIndex, pages)}
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


