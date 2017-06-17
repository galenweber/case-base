/* eslint-disable max-len */
import React from 'react';
import Dimensions from 'Dimensions';
import {
  View,
} from 'react-native';
import BodyText from '../../../BodyText';
import BlockQuote from '../../../BlockQuote';
import ImageFrame from '../../../ImageFrame';
import B from '../../../BoldText';
import I from '../../../ItalicText';


const Body = function Body() {
  return (
    <View>
      <BodyText>
        You'd like your team to do a deep dive on the trends at Dizcount Mart, which has been far and away the fastest growing point of sale. You also feel that what's happening there is emblematic of the changes being brought on by ascendant discount stores.
      </BodyText>
      <BodyText>
        How did the revenue generated by the sale of single unit at Dizcount Mart change from 2011 to 2013?
      </BodyText>
      <BlockQuote>
        Report your answer in percentage <I>points</I> to the nearest tenth (e.g., enter 22.5 for 22.45%).
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */