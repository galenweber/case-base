import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import styles from '../../case-styles';
import BodyText from '../../BodyText';
import AnswerInput from '../../AnswerInput';


export default function PageTwo(props) {
  return (
    <View style={styles.pageContainer}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
      >

        <BodyText>
          Under the current plan, AAT will build a server center and two servers. For every 500 customers signed to AAT’s service, the company will add an additional server. The company expects to capture 1&frasl;8 of the Basra metropolitan market in its first year.
        </BodyText>
        <BodyText>
          In that first year of operation, how much will AAT spend to build its center and servers?
        </BodyText>
      </ScrollView>
      <AnswerInput placeholder="this is a test" />
    </View>
  )
}


