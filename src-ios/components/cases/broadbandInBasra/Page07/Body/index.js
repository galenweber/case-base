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
        Charging customers for modems will boost annual profit in the first year (with the initial influx of customers), but it will have less effect in following years, when the rate of customer growth slows.
      </BodyText>
      <BodyText>
        Can you propose a strategy that would distribute the boost to net profit margins across a greater number of years?
      </BodyText>
      <BlockQuote>
        This is a <B>free response</B> question.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
