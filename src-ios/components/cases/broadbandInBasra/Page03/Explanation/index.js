import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import BodyText from '../../../../BodyText';
import MathText from '../../../../MathText';
import Subheader from '../../../../Subheader';
import I from '../../../../ItalicText';

const Explanation = function Explanation() {
  return (
    <View>

      <Subheader>
        78% contribution margin ratio
      </Subheader>
      <BodyText>
        The unit being examined is an annual contract. Unit revenue therefore equals the $15 monthly charge summed over the 12 months of the year. That makes $180 in total unit revenue:
      </BodyText>
      <MathText>
        $15 × 12 = $180
      </MathText>
      <BodyText>
        The unit variable costs are the $20 in cable rent paid to al-Bal and the $20 fee paid to the contractor overseeing customer service. That totals $40 in unit variable costs.
      </BodyText>
      <BodyText>
        Now to calculate the contribution margin, subtract unit variable cost from the unit revenue. That gives a contribution margin of $140:
      </BodyText>
      <MathText>
        $180 - $40 = $140
      </MathText>
      <BodyText>
        However, the interviewer asked for the contribution margin <I>ratio</I>, so this value needs to be set over unit revenue, giving:
      </BodyText>
      <MathText>
        $140 / $180 = 7/9 ≈ .78
      </MathText>
    </View>
  );
};

export default Explanation;
