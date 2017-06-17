/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import BodyText from '../../../BodyText';
import BlockQuote from '../../../BlockQuote';
import B from '../../../BoldText';
import I from '../../../ItalicText';

const Body = function Body() {
  return (
    <View>
      <BodyText>
        AAT would like a profit forecast for the business. They estimate that in order to meet market share targets pricing will have to be competitive with al-Bal National. Currently al-Bal charges $15 per month for its service.
      </BodyText>
      <BodyText>
        If AAT charges the same price, what will be the contribution margin ratio for its annual contracts? Report your answer in percentage points to the nearest tenth (e.g., enter 22.5 for 22.45%).
      </BodyText>
      <BlockQuote>
        The <B>contribution margin</B> equals revenue per unit minus variable costs per unit. For this calculation, the 'unit' will be an annual contract. For that reason <I>do not</I> include server or modem expenses in your calculation of variable costs.  The contribution margin ratio is simply the contribution margin over revenue per unit.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
