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
        The revenue maximizing price is $2.25
      </Subheader>
      <BodyText>
        Note that at $2.5 and $2.0 the revenue generated is equal: $1 billion. That means the revenue maximizing price lies halfway between, at $2.25 per unit. For those familiar with economics, this is the point of unit elasticity, where a change in price results in a change in demand of equal proportion.
      </BodyText>
      <BodyText>
        At a price of $2.25, the quantity sold is 450 million. This comes out to revenue of $1.0125 billion.
      </BodyText>
      <BodyText>
        While this will maximize revenue coming from Dizcount Mart, there are potential drawbacks.
      </BodyText>
      <BodyText>
        First, as noted before, this price will maximize revenue, but it may not maximize profit. For example, if each unit of toothpaste costs Crestgate $3 to produce, this price will generate a loss for the company.
      </BodyText>
      <BodyText>
        Second, it’s important to ask where the higher sales volume is coming from. If Crestgate is poaching customers from rival brands, that’s good. But if the higher sales are from customers that would have otherwise bought Crestgate at the supermarket, then the company would be cannibalizing its own sales.
      </BodyText>
    </View>
  );
};

export default Explanation;
