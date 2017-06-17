import React from 'react';
import {
  AsyncStorage,
  ScrollView,
  Text,
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
    };
  }

  componentDidMount() {
    const lastModKeys = cases.map((e, i) => `LastModifiedc${i}`);
    AsyncStorage.multiGet(lastModKeys, (err, stores) => {
      const lastModified = stores.map(res => res[1]);
      this.setState({ lastModified });
    });
    //AsyncStorage.clear();
  }

  render() {
    const { navigation } = this.props;
    const { lastModified } = this.state;

    return (
      <ScrollView>
        {cases.map((e, i) => <CasePanel
          key={e.name}
          caseIndex={i}
          {...e}
          navigation={navigation}
          lastModified={lastModified[i]}
        />)}
      </ScrollView>
    );
  }
}

//Home.propTypes = {
  //navigation: PropTypes.shape().isRequired,
//};

export default Home;
