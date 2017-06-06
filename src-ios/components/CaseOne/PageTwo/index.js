import React from 'react';
import {
  Button,
  ScrollView,
  Text,
  View,
  TextInput,
} from 'react-native';
import styles from '../../case-styles';
import BodyText from '../../BodyText';
import AnswerInput from '../../AnswerInput';


export default function PageTwo(props) {
  const { submitResponse, responseById, pageIndex, caseIndex } = props;
  const PAGE_ID = `c${caseIndex}p${pageIndex}`;
  const response = responseById[PAGE_ID];

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
      <View>
        <AnswerInput answer={4} margin={1} id={PAGE_ID} {...props} />
        <Button
          title="Submit"
          disabled={(response !== undefined && response !== null) && response.length === 0 }
          onPress={() => submitResponse(PAGE_ID)}
        />
      </View>
    </View>
  )
}


