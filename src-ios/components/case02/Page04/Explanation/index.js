import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import BodyText from '../../../BodyText';
import MathText from '../../../MathText';
import Subheader from '../../../Subheader';
import Fraction from '../../../Fraction';
import I from '../../../ItalicText';

const Explanation = function Explanation() {
  return (
    <View>
      <Subheader>
        Crestgate held 33% share by volume
      </Subheader>
      <BodyText>
        If Crestgate sold 110 million units at Dizcount Mart in 2011, and that amounted to a <Fraction>2/5/</Fraction> or 40% share, then unit sales for all brands totaled:
      </BodyText>
      <MathText>
        110 million / 40% = 275 million
      </MathText>
      <BodyText>
        Now to calculate 2011 sales by competitors we must subtract out Crestgate's  sales of 110 million units:
      </BodyText>
      <MathText>
        275m – 110m = 165 million
      </MathText>
      <BodyText>
        If these sales grew by 140% in volume terms from 2011 to 2013, then unit sales in 2013 equaled 396 million:
      </BodyText>
      <MathText>
        165 million × 2.4 = 396 million
      </MathText>
      <BodyText>
        Since Crestgate sold 200 million units at Dizcount Mart in 2013, its share for that year equaled:
      </BodyText>
      <MathText>
        200m / (396m + 200m) ≈ 200 / 600
      </MathText>
      <BodyText>
        That's equivalent to <Fraction>1/3</Fraction> or 33%.
      </BodyText>
    </View>
  );
};

export default Explanation;
