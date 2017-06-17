import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import BodyText from '../../../BodyText';
import MathText from '../../../MathText';
import Subheader from '../../../Subheader';
import I from '../../../ItalicText';

const Explanation = function Explanation() {
  return (
    <View>
      <Subheader>
        10% must adopt the premium service
      </Subheader>
      <BodyText>
        AAT is $250,000 short of the profit target. To determine the number of premium customers needed to meet this target, first calculate the marginal increase in profit from switching a single customer from standard to premium.
      </BodyText>
      <BodyText>
        With premium plans charging $10 more per month, every customer that switches brings $120 in additional revenue annually.
      </BodyText>
      <BodyText>
        It appears that the increased costs from customer service will be negligible. However, the cable rent will be $15 higher per annum. Subtracting that from the additional revenue above, we find that for every customer that goes with the premium over the standard plan, AAT’s profits increase by around $100.
      </BodyText>
      <BodyText>
        If we’re $250,000 short of the profit target, we need 2,500 premium subscribers to close that gap:
      </BodyText>
      <MathText>
        $250,000 / $100 = 2,500
      </MathText>
      <BodyText>
        As a percentage of AAT’s total 25,000 customers, this is equivalent to 10%:
      </BodyText>
      <MathText>
        2,500 / 25,000 = 10%
      </MathText>
    </View>
  );
};

export default Explanation;
