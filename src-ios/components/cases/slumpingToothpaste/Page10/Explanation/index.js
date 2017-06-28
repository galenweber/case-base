import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import BodyText from '../../../../BodyText';
import MathText from '../../../../MathText';
import Subheader from '../../../../Subheader';
import Fraction from '../../../../Fraction';
import I from '../../../../ItalicText';

const Explanation = function Explanation() {
  return (
    <View>
      <Subheader>
        Crestgate's share will be 23%
      </Subheader>
      <BodyText>
        First we estimate the total size of the electric toothbrush market. We know Crestgate sold 500,000 units, Dental-B sold 1.2 million units, and Brawn sold 1.5 million units. Together that's:
      </BodyText>
      <MathText>
        0.5m + 1.2m + 1.5m = 3.2 million
      </MathText>
      <BodyText>
        This accounts for <Fraction>8/11</Fraction> of the market, so unit sales for the total market amounts to 4.4 million.
      </BodyText>
      <BodyText>
        Our graph tells us that if Crestgate sets the price at $40 it will sell one million units. So its share will be:
      </BodyText>
      <MathText>
        $1 million / $4.4 million ≈ 23%
      </MathText>
    </View>
  );
};

export default Explanation;
