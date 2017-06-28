import React from 'react';
import {
  AlertIOS,
  AsyncStorage,
  Button,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { NativeModules } from 'react-native'
import PropTypes from 'prop-types';
import CasePanel from '../../components/CasePanel';
import cases from '../../services/cases';

const { InAppUtils } = NativeModules

class Home extends React.Component {

  static navigationOptions = {
    title: 'Cases',
  }

  constructor(props) {
    super(props);
    this.state = {
      lastModified: [],
      products: null,
      locked: cases
        .reduce((p, c) => Object.assign({ [c.sku]: c.locked }, p),{})
    };
  }

  componentDidMount() {
    const lastModKeys = cases.map((e, i) => `LastModifiedc${i}`);
    AsyncStorage.multiGet(lastModKeys, (err, stores) => {
      const lastModified = stores.map(res => res[1]);
      this.setState({ lastModified });
    });

    cases.forEach((e) => {
      AsyncStorage
        .getItem(`unlocked_${e.sku}`)
        .then((unlocked) => {
          if (unlocked) {
            this.setState(Object.assign(
              {[e.sku]: false},
              this.state.locked)
            );
          }
        });
    });


    var products = [
       'laraguay_case_purchase',
    ];

    InAppUtils.loadProducts(products, (error, products) => {
      if (error) console.log('error: ', error);
      console.log('products are ', products);
      this.setState({ products });
       //update store here.
    });
    //AsyncStorage.clear();
  }

  buy() {
    var productIdentifier = 'laraguay_case_purchase';
    InAppUtils.purchaseProduct(productIdentifier, (error, response) => {
      // NOTE for v3.0: User can cancel the payment which will be available as error object here.
      if(error) console.log('error ', error);
      if(response && response.productIdentifier) {
        AlertIOS.alert('Purchase Successful', 'Your Transaction ID is ' + response.transactionIdentifier);
        //unlock store here.
      }
    });
    console.log('hello!');
  }

  render() {
    const { navigation } = this.props;
    const { lastModified, products, locked } = this.state;

    return (
      <View>
        <Text>Products are: {JSON.stringify(products)}</Text>
        <ScrollView>
          {cases.map((e, i) => <CasePanel
            locked={locked[e.sku]}
            key={e.name}
            caseIndex={i}
            {...e}
            navigation={navigation}
            lastModified={lastModified[i]}
          />)}
        </ScrollView>
        <Button
          title="buy buy buy!"
          onPress={this.buy}
        />
      </View>
    );
  }
}

//Home.propTypes = {
  //navigation: PropTypes.shape().isRequired,
//};

export default Home;
