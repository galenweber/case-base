/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import BlockQuote from '../../../../BlockQuote';
import B from '../../../../BoldText';
import I from '../../../../ItalicText';
import Fraction from '../../../../Fraction';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Assume that these salary and benefit expenditures make up <Fraction>6/7</Fraction> of maintenance and upkeep costs. Will switching to private contractors generate the 20% savings needed?
      </BodyText>
      <BodyText>
        If so, what potential drawbacks do you see from using private contractors? If not, what other avenues exist to generate the necessary savings?
      </BodyText>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
