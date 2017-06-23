import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';
import BodyText from '../../../../BodyText';
import MathText from '../../../../MathText';
import Subheader from '../../../../Subheader';
import Fraction from '../../../../Fraction';
import I from '../../../../ItalicText';

const Explanation = function Explanation() {
  return (
    <View>
      <Subheader>
        Revenue per unit fell 12.5%
      </Subheader>
      <BodyText>
        For 2011, there was $440 million in sales with 110 million units sold. That comes out to $4 of revenue per unit:
      </BodyText>
      <MathText>
        $440 million / 110 million = $4
      </MathText>
      <BodyText>
        For 2013, there was $700 million in sales with 200 million units sold. That’s $3.50 of revenue per unit:
      </BodyText>
      <MathText>
        $700 million / 200 million = $3.50
      </MathText>
      <BodyText>
        That means revenue per unit fell by 50¢ over two years, or by <Fraction>1/8</Fraction>. As a percentage change this is -12.5%.
      </BodyText>
      <BodyText>
        Note once again the value of having the basic fractions memorized.
      </BodyText>
    </View>
  );
};

export default Explanation;
