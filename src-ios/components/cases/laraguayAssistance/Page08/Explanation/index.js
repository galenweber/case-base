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
        $85 million increase in spending
      </Subheader>
      <BodyText>
        To answer this we need to calculate spending on both private and public centers. We’ll start with the new private centers.
      </BodyText>
      <BodyText>
        With 320 of these expected to open, serving 250 youth on average, there will be 80,000 youth in total served by the private centers:
      </BodyText>
      <MathText>
        320 × 250 = 80,000
      </MathText>
      <BodyText>
        With a $4,500 voucher provided for each student in these private centers, total voucher spending will amount to $360 million:
      </BodyText>
      <MathText>
        80,000 × $4,500 = $360 million
      </MathText>
      <BodyText>
        Now switch to calculating how many fewer young people are served by public programs. For public and private programs combined, overall enrollment rose by 25,000, but 80,000 youth are now enrolled at private centers.The net effect is a 55,000 decline in public center enrollment:
      </BodyText>
      <MathText>
        25,000 - 80,000 = -55,000
      </MathText>
      <BodyText>
        With an average of $5,000 spent per youth in these centers, public savings comes out to $275 million:
      </BodyText>
      <MathText>
        55,000 × $5,000 = $275 million
      </MathText>
      <BodyText>
        Subtracting the public center savings from the added voucher spending, the net effect is $85 million in increased spending:
      </BodyText>
      <MathText>
        $360m - $275m= +$85 million
      </MathText>
    </View>
  );
};

export default Explanation;
