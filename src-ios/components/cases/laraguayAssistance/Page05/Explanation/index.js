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
        Caretaker salaries are 25% of total funding
      </Subheader>
      <BodyText>
        Oftentimes, there are easy and hard ways to get an answer. For this problem, you can explicitly calculate the amount spent on caregiver salaries and overall total program spending and derive the share from that.
      </BodyText>
      <BodyText>
        However, that would involve pulling information from several parts of the case and a couple tricky calculations. We’ll go over an easier approach below.
      </BodyText>
      <BodyText>
        We know that there is one caregiver per 20 youth, earning an average salary of $25,000. The ratio of salary expenditure to total funding should be the same for these 20 youth as for the overall program. All we need to figure out is how much is spent overall on these 20 youth.
      </BodyText>
      <BodyText>
        That’s easy enough, given that spending per youth is $5,000, total spending for those 20 youth must equal $100,000:
      </BodyText>
      <MathText>
        $5,000 × 20 = $100,000
      </MathText>
      <BodyText>
        So with $25,000 spent on the caregiver and $100,000 spent overall, caregiver salaries amount to 25% of total funding:
      </BodyText>
      <MathText>
        $25,000 / $100,000 = 25%
      </MathText>
      <BodyText>
        The more you work with math, the easier you will find these sorts of algebraic shortcuts.
      </BodyText>
    </View>
  );
};

export default Explanation;
