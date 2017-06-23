import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import BodyText from '../../../../BodyText';
import MathText from '../../../../MathText';
import Subheader from '../../../../Subheader';
import I from '../../../../ItalicText';
import Fraction from '../../../../Fraction';

const Explanation = function Explanation() {
  return (
    <View>
      <Subheader>
        No, switching will not generate 20% savings
      </Subheader>
      <BodyText>
        Earlier we calculated that the public employees earn an average annual salary $19,200. Salaries for private contractors are <Fraction>7/8</Fraction> of that, or $16,800.
      </BodyText>
      <BodyText>
        Total annual expenditure for the average public employee is about $19,800. Since private contractors don't earn benefits, annual expenditure would be around $3,000 lower:
      </BodyText>
      <MathText>
        $19,800 - $16,800 =  $3,000
      </MathText>
      <BodyText>
        This would represent about 15\%% in savings relative to current annual expenditure on salaries and benefits:
      </BodyText>
      <MathText>
        $3,000 / $19,800 ≈ 15%
      </MathText>
      <BodyText>
        Given that salary and benefit spending only makes up <Fraction>6/7</Fraction> of overall maintenance expenditures, there's no chance this switch would generate the needed savings.
      </BodyText>
      <BodyText>
        One potential savings strategy is center closures and consolidation. This is similar to the proposal floated earlier by the committee member, but we could pursue it without reducing the actual number of caregivers in service.
      </BodyText>
      <BodyText>
        The benefit would come from having fewer centers to maintain and presumably fewer caretakers to pay.
      </BodyText>
      <BodyText>
        Another possibility is simply lowering the wages of current caretakers. Politically this would be very difficult.
      </BodyText>
    </View>
  );
};

export default Explanation;
