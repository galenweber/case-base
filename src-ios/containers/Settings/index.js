import React from 'react';
import {
  Alert,
  AsyncStorage,
  Button,
  NativeModules,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import B from '../../components/BoldText';
import * as actions from '../../actions';

const { InAppUtils } = NativeModules;

const mapStateToProps = state => state;

class Settings extends React.Component {

  static navigationOptions = () => ({
    title: 'Case Settings',
  });

  constructor(props) {
    super(props);
    const { locked } = this.props.navigation.state.params;
    this.state = {
      inStock: false,
      purchasing: false,
      locked,
    };
  }

  componentDidMount() {
    const { sku } = this.props.navigation.state.params;
    InAppUtils.loadProducts([sku], (error) => {
      if (error) return error;
      this.setState({ inStock: true });
      return true;
    });
  }

  handlePurchasePress() {
    const {
      unlock,
      sku,
    } = this.props.navigation.state.params;

    const {
      inStock,
      purchasing,
     } = this.state;

    if (!inStock || purchasing) return false;

    this.setState({ purchasing: true });

    unlock(sku);

    return InAppUtils.purchaseProduct(sku, (error, response) => {
      if (error) {
        this.setState({ purchasing: false });
        return error;
      }

      if (response && response.productIdentifier) {
        AsyncStorage.setItem(`unlocked_${sku}`, 'true');
        unlock(sku);
        return Alert.alert(
          'Purchase Successful',
          `Your Transaction ID is ${response.transactionIdentifier}`,
          [
            {
              text: 'OK',
              onPress: () => this.setState({ locked: false }),
            },
          ],
        );
      }

      return 'error';
    });
  }

  handleClearPress(caseIndex, pages) {
    Alert.alert(
      'Confirm Clear',
      'Are you sure you want to clear your responses for this case?',
      [
        {
          text: 'Cancel',
          onPress: () => 'cancel',
          style: 'cancel',
        },
        {
          text: 'Clear',
          onPress: () => this.clearCases(caseIndex, pages),
        },
      ],
    );
  }

  clearCases(caseIndex, pages) {
    const keys = pages.map((e, i) => `c${caseIndex}p${i}`);
    this.props.clearResponses(keys);
  }

  render() {
    const {
      name,
      caseIndex,
      pages,
    } = this.props.navigation.state.params;

    const { purchasing, locked } = this.state;
    const purchaseBtnText = (purchasing) ?
      'Processing...'
      : 'Buy Case ($0.99)';

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
                onPress={() => this.handlePurchasePress()}
                title={purchaseBtnText}
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
          <Text>
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
  clearResponses: PropTypes.func.isRequired,
  navigation: PropTypes.shape().isRequired,
};

export default connect(
  mapStateToProps,
  actions,
)(Settings);

