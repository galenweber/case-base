/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import BlockQuote from '../../../../BlockQuote';
import B from '../../../../BoldText';
import I from '../../../../ItalicText';

const Body = function Body() {
  return (
    <View>
      <BodyText>
These are hefty contribution margins.
      </BodyText>
      <BodyText>
        Would you take this information to the backers of AAT and advise them to make the investment?
      </BodyText>
      <BlockQuote>
        This is a <B>free response</B> question. Type in your answer below, and click to submit. We'll automatically mark your answer as correct, but you should compare your reasoning with the reasoning of the provided answer.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
