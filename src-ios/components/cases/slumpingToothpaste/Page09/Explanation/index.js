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
        Set price above $20
      </Subheader>
      <BodyText>
        The first step in solving this problem is setting up a formula for profit as a function of quantity and price.
      </BodyText>
      <BodyText>
        For the <I>e-Brushes</I>, profit equals the revenue (Q × P) minus the cost (Q × $20), where the per unit cost was given to us as $20. Combining those terms, we find that <I>e-Brush</I> profits are equal to:
      </BodyText>
      <MathText>
        Q × (P - $20)
      </MathText>
      <BodyText>
        We can also express profit from the replacement heads as a function of <I>e-Brush</I> quantity Q, since we know the quantity of heads sold is 4× the quantity of brushes sold.
      </BodyText>
      <BodyText>
         Both replacement head per unit revenue ($15) and cost ($5) are given to us. So per unit profit will be $10. Replacement head profit can then be expressed as:
      </BodyText>
      <MathText>
        Q × 4 × $10 = $40 × Q
      </MathText>
      <BodyText>
        Since these formulas use the same Q variable we can combine them to express total profit:
      </BodyText>
      <MathText>
        Profit = Q × (P - $20) + $40 × Q
        {"\n"}
        Profit = Q × (P + $20)
      </MathText>
      <BodyText>
        We now have a convenient equation for profit. All that remains is to use the chart to determine if Crestgate should set the price at more or less than $20.
      </BodyText>
      <BodyText>
        There are elegant ways to solve this, but the most obvious is to calculate profit at P = $20 and at P > $20.
      </BodyText>
      <BodyText>
        If price = $20, our graph tells us that quantity sold is 1.5 million which leads to profits of $60 million:
      </BodyText>
      <MathText>
        1.5m × ($20 + $20) = $60 million
      </MathText>
      <BodyText>
        Now we try a price greater than $20. It's best to choose a price as close as possible to $20, so we'll use $30.
      </BodyText>
      <BodyText>
        If price = $30, our graph tells us that quantity sold is 1.25 million which leads to profits of $62.5 million:
      </BodyText>
      <MathText>
        1.25m × ($30 + $20) = $62.5 million
      </MathText>
      <BodyText>
        Since profits are higher when the price is set above $20, we know that the profit maximizing price is above $20, even if we haven't calculated the exact price.
      </BodyText>
    </View>
  );
};

export default Explanation;
