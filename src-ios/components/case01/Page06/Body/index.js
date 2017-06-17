/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../BodyText';
import BlockQuote from '../../../BlockQuote';
import B from '../../../BoldText';
import I from '../../../ItalicText';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Your team notices that the one-off capital costs of providing modems causes a significant dent in AAT’s first year profits.
      </BodyText>
      <BodyText>
        You propose charging customers $26 for the modems.
      </BodyText>
      <BodyText>
        By roughly how much would this increase first year profits? Report your answer in absolute terms.
      </BodyText>
      <BlockQuote>
        Assume that the additional modem charge does not affect the number of customers AAT attracts in its first year.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
