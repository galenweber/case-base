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
        Leave prices unchanged
      </Subheader>
      <BodyText>
        This is a question of <I>elasticity of demand</I>. Reference an economics textbook if you are unfamiliar with the concept. In contemplating a price hike, you must determine whether the revenue gained from higher prices outweighs the revenue lost from lower volume.
      </BodyText>
      <BodyText>
        Elasticity of demand questions can be tricky, but this one is rather straightforward. A proposal is made to increase prices, and the graph shows us what the quantity demanded would be at different price levels.
      </BodyText>
      <BodyText>
        Currently, Crestgate’s revenue from Dizcount Mart is $700 million. To test the effect of a price hike, imagine that prices are raised from $3.50 per unit to $4.00 per unit. At this price, the graph tells us that the quantity sold will drop to 100 million units. Revenue will therefore decline to $400 million:
      </BodyText>
      <MathText>
        $4 × 100 million = $400 million
      </MathText>

      <BodyText>
        If maximizing revenue is our goal, we oppose this move.
      </BodyText>
      <BodyText>
        Note, however, that this may not be the right move if we were focused on <I>profit</I> rather than revenue. Raising prices reduces our revenues, but the smaller quantity produced would also lower our costs. Depending on the relative size of those two moves, price hikes could lead to higher profits.
      </BodyText>
    </View>
  );
};

export default Explanation;
