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
        Caregiver salaries rise to 30% of total spending
      </Subheader>
      <BodyText>
        The key here is to realize that the 20% cut to upkeep costs perfectly balances out the $5,000 raise for caregivers. As a result, <I>total</I> program spending is unchanged. We only have to worry about the numerator, and not the denominator.
      </BodyText>
      <BodyText>
        First, a proof that total spending remains unchanged.
      </BodyText>
      <BodyText>
        A $5,000 raise for caregivers - who currently make $25,000 - represents a 20% increase in spending on caregiver salaries. The pie chart breakdown of program spending reveals that, before the budget modifications, center upkeep accounted for 25% of the budget, the same share that we calculated for caregiver salaries in the previous question.
      </BodyText>
      <BodyText>
        The 20% increase in one is negated by the 20% decrease in the other, leaving total spending unchanged. If total spending is unchanged, we know that total spending per youth is unchanged. As we calculated earlier, per 20 youth, $100,000 is spent in total, and one caregiver is employed now at a $30,000 salary.
      </BodyText>
      <BodyText>
        So caregiver salaries now amount to 30% of total spending:
      </BodyText>
      <MathText>
        $30,000 / $100,000 = 30%
      </MathText>
      <BodyText>
        If the increased spending on salaries was <I>not</I> negated by cuts to center upkeep this problem would be far more complicated, as not only would we have to calculate the new total spent on caregiver salaries, we’d also have to calculate the new amount spent overall.
      </BodyText>
    </View>
  );
};

export default Explanation;
