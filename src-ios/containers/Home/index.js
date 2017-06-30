import React from 'react';
import {
  AsyncStorage,
  ScrollView,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import CasePanel from '../../components/CasePanel';
import cases from '../../services/cases';


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
        .reduce((p, c) => (
          Object.assign(p, { [c.sku]: c.locked })
        ), {}),
    };
     //AsyncStorage.clear();
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
            this.setState({
              locked: Object.assign(
                this.state.locked,
                { [e.sku]: false },
              ),
            });
          }
        });
    });
  }

  unlock(sku) {
    AsyncStorage.setItem(`unlocked_${sku}`, 'true');
    this.setState({
      locked: Object.assign(
        this.state.locked,
        { [sku]: false },
      ),
    });
  }

  render() {
    const { navigation } = this.props;
    const { lastModified, locked } = this.state;

    return (
      <View>
        <ScrollView>
          {cases.map((e, i) => <CasePanel
            {...e}
            unlock={this.unlock.bind(this)}
            locked={locked[e.sku]}
            key={e.name}
            caseIndex={i}
            navigation={navigation}
            lastModified={lastModified[i]}
          />)}
        </ScrollView>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default Home;
