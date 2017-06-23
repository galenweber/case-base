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
        37.5% of centers would have to close
      </Subheader>
      <BodyText>
        You can solve this problem algebraically or plug in the values given in the prompt and work to a solution. We’ll go over the algebraic solution below.
      </BodyText>
      <BodyText>
        Currently Laraguay has 500 youth per center. We need to get to 800 youth per center. For every center that closes, the average youth per center will increase by 500, divided by the number of remaining centers.
      </BodyText>
      <BodyText>
        Using c to represent the number of centers closed and n to represent the total number of centers before the closings, we can express this equality as:
      </BodyText>
      <MathText>
        500 + (c × 500)/(n - c) = 800
      </MathText>
      <BodyText>
        Which can be simplified to:
      </BodyText>
      <MathText>
        (c × 500)/(n - c) = 300
      </MathText>
      <BodyText>
        Which in turn becomes:
      </BodyText>
      <MathText>
        800c = 300n
        {"\n"}
        c/n = 3/8
      </MathText>
      <BodyText>
        Familiar as we are with the simple fractions, we know that this is equivalent to .375 or 37.5%.
      </BodyText>
      <BodyText>
        We solved for the share even without ever solving for the actual number of centers in Laraguay (though we could have done this). This algebraic solution, however, would be a difficult one to solve in your head.
      </BodyText>
    </View>
  );
};

export default Explanation;
