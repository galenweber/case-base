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
import Fraction from '../../../Fraction';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Your team speaks with Crestgate's sales team and learns that the price declines have been coordinated with Dizcount Mart to prevent Crestgate products from losing significant market share to rivals. While Crestgate sales at Dizcount Mart have jumped sharply, sales have increased even more markedly for competitors: 140% in volume terms from 2011 to 2013.
      </BodyText>
      <BodyText>
        What was Crestgate's share of all Dizcount Mart toothpaste sales by volume in 2013? Report your answer in percentage points.
      </BodyText>
      <BlockQuote>
        In 2011, Crestgate's share by volume at Dizcount Mart was <Fraction>2/5</Fraction>.
      </BlockQuote>
      <BlockQuote>
        Report your answer in percentage points.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
