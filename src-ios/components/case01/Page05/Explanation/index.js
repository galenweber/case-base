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
        No, net profit falls short
      </Subheader>
      <BodyText>
        With a $140 contribution margin and 25,000 customers forecast for the first year, gross profit comes to $3.5 million:
      </BodyText>
      <MathText>
        $140 × 25,000 = $3.5 million
      </MathText>
      <BodyText>
        However, this figure does not account for overhead costs in the form of modem purchases ($23 each) and server maintenance. With 25,000 new customers in the first year, modem expenses will total $575,000:
      </BodyText>
      <MathText>
        $23 × 25,000 = $575,000
      </MathText>
      <BodyText>
        And with 52 servers, each costing $1,000 a year to maintain, server costs in the first year will total $52,000:
      </BodyText>
      <MathText>
        $1,000 × 52 = $52,000
      </MathText>
      <BodyText>
        Calculating for net profit by subtracting out these overhead expenses from our $3.5 million gross profit figure leaves about $2.9 million:
      </BodyText>
      <MathText>
        $3.5m - ($575k + $52k) ≈ $2.9m
      </MathText>
      <BodyText>
        Now we calculated earlier that the cost of building the server center and purchasing the servers will be $27 million. AAT’s loan will have to be equal to that amount. At a 10% interest rate, interest payments the first year will amount to $2.7 million. Thus far, AAT’s profits are sufficient to meet the threshold.
      </BodyText>
      <BodyText>
        However, paying down 4% of the principal would require roughly an additional $1 million. AAT would need net profit of $2.7 million + $1 million = $3.7 million. That’s above our forecast for the first year.
      </BodyText>
      <BodyText>
        This case from BCG tests two competencies: your ability to distinguish between fixed, variable, one-off costs etc, and your ability to perform rough but accurate calculations through estimation.
      </BodyText>
    </View>
  );
};

export default Explanation;
