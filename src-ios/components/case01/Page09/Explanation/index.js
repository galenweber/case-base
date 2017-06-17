import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import BodyText from '../../../BodyText';
import MathText from '../../../MathText';
import Subheader from '../../../Subheader';
import ImageFrame from '../../../ImageFrame';
import I from '../../../ItalicText';
import B from '../../../BoldText';
import imgSrc from '../../../../assets/images/Latex/case-1-page-9-cagr.png';


const Explanation = function Explanation() {
  return (
    <View>
      <Subheader>
        7% compound annual growth
      </Subheader>
      <BodyText>
        With the percentage change in total subscriptions and in standard subscriptions we can calculate the percentage change in premium subscriptions over the 10 year period.
      </BodyText>
      <BodyText>
        If standard subscribers make up 80% of the full customer base, and the number of these subscriptions grows 40% over the 10-year period, then that alone grows the overall customer base by 32%:
      </BodyText>
      <MathText>
        40% × 0.8 = 32%
      </MathText>
      <BodyText>
        From the above it can be derived that growth in premium subscriptions must account for 52% - 32% or 20% of overall growth.
      </BodyText>
      <BodyText>
        Reversing the formula we used above, growth in premium subscriptions can be calculated from its contribution to overall growth as:
      </BodyText>
      <MathText>
        x% premium growth × 0.2 share of customer base = 20% overall growth
      </MathText>
      <BodyText>
        Solving for x gives:
      </BodyText>
      <MathText>
        x = 20% ÷ 0.2 = 100%
      </MathText>
      <BodyText>
        So the number of premium customers will grow by 100% over the next 10 years.
      </BodyText>
      <BodyText>
        However, the question asked for the annual growth rate. Calculating this is not as simple as dividing:
      </BodyText>
      <MathText>
        100% growth / 10 years = 10%
      </MathText>
      <BodyText>
        We need to use the concept of <B>compound annual growth rates (CAGR)</B>. As noted in the final lesson, this concept is expressed formulaically as:
      </BodyText>
      <ImageFrame
          style={{height: 30}}
          source={imgSrc}
      />
      <BodyText>
        It’s unreasonable, however, to expect you to do this type of math in a case (and particularly in this application, where you’re urged to calculate mentally wherever possible). The important point to recognize is that the annual growth rate will be below 10%. For that reason, any answer below 10% and above 5% will be marked correct.
      </BodyText>
      <BodyText>
        If you are familiar with the rule of 72, this problem can be solved by reversing the rule. Here you have the number of years in which the value will double (10 years) and need to know the growth rate for a given year.
      </BodyText>
    </View>
  );
};

export default Explanation;
