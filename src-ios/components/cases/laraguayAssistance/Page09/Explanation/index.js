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
        $19,760 per employee
      </Subheader>
      <BodyText>
        Begin by calculating annual salary ex-benefits. For the average employee, a $1,600 monthly salary over 12 months amounts to $19,200 in annual income:
      </BodyText>
      <MathText>
        $1,600 × 12 = $19,200
      </MathText>
      <BodyText>
        Now we need to calculate the annual value of the retirement contributions. Start by calculating the contribution on the first $4,000 in salary:
      </BodyText>
      <MathText>
        $4,000 × .05 rate = $200
      </MathText>
      <BodyText>
        And for the next $8,000:
      </BodyText>
      <MathText>
        $8,000 × .04 rate = $320
      </MathText>
      <BodyText>
        And for the final $4,000:
      </BodyText>
      <MathText>
        $4,000 × .01 rate = $40
      </MathText>
      <BodyText>
        Salary income above $16,000 does not earn additional benefits. Summing the values above, the average annual retirement contribution equals:
      </BodyText>
      <MathText>
        $200 + $320 + $40 = $560
      </MathText>
      <BodyText>
        Lastly we combine salary and benefits, for an annual total expenditure of $19,760 per upkeep employee:
      </BodyText>
      <MathText>
        $19,200 + $560 = $19,760
      </MathText>
    </View>
  );
};

export default Explanation;
