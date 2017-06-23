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
        Adds around $650,000 to profits
      </Subheader>
      <BodyText>
        If AAT charged modems at cost, the expense and revenue would cancel out. Since modems had acted as a $575,000 drag on profit, this move would increase profits by the same amount.
      </BodyText>
      <BodyText>
        However, the proposal is to charge $26 for modems, $3 above the actual cost. With 25,000 new customers in the first year, that additional charge would generate revenue of $75,000:
      </BodyText>
      <MathText>
        $3 × 25,000 = $75,000
      </MathText>
      <BodyText>
        Combining those two values, the net increase in revenue totals $650,000:
      </BodyText>
      <MathText>
        $575,000 + $75,000 = $650,000
      </MathText>
    </View>
  );
};

export default Explanation;
