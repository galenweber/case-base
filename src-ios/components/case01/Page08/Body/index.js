/* eslint-disable max-len */
import React from 'react';
import Dimensions from 'Dimensions';
import {
  Image,
  View,
} from 'react-native';
import BodyText from '../../../BodyText';
import BlockQuote from '../../../BlockQuote';
import ImageFrame from '../../../ImageFrame';
import B from '../../../BoldText';
import I from '../../../ItalicText';
import imgSrc from '../../../../assets/images/case-graphics/case-1/page-8/one.png';

const win = Dimensions.get('window');

const Body = function Body() {
  return (
    <View>
      <BodyText>
        The investors behind AAT prefer the one time $26 charge for modems over the possibility of leasing them. They argue that the upfront revenue will help with early debt payments, and customer growth should ensure steady modem-related revenue through the near future.
      </BodyText>
      <BodyText>
        Your team runs the numbers. Even with the additional revenue from modems, AAT is forecast to fall about $250,000 short of the first year profit target. In order to increase revenue - while maintaining market share - a team member proposes a tweak to the pricing plan.
      </BodyText>
      <BodyText>
        Charging higher prices might dissuade some customers from leaving their old providers. However, creating two tiers of service would enable AAT to remain competitive in pricing, while potentially generating greater revenue from customers looking for premium service.
      </BodyText>
      <BodyText>
        Your team puts together the table below to outline the two-tier proposal:
      </BodyText>
      <ImageFrame
        source={imgSrc}
        style={{
          height: win.width/2,
          flex: 1,
        }}
      />
      <BodyText>
        Roughly what percentage of customers will have to adopt the premium service for AAT to meet its first year profit target - paying all accrued interest and 4% of the principal? Report your answer in percentage points.
      </BodyText>
      <BlockQuote>
        Report your answer in <I>percentage points</I>. For example, 20% would be entered as 20 (<B>not</B> 0.20).
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
