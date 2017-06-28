/* eslint-disable max-len */
import React from 'react';
import Dimensions from 'Dimensions';
import {
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import BlockQuote from '../../../../BlockQuote';
import ImageFrame from '../../../../ImageFrame';
import B from '../../../../BoldText';
import I from '../../../../ItalicText';
// 1080w 1200h
import imgSrc from '../../../../../assets/images/case-graphics/case-2/page-9/one.png';

const win = Dimensions.get('window');

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Your team estimates a demand curve for Crestgate's electric toothbrush: the Crestgate <I>e-Brush</I>.
      </BodyText>
      <ImageFrame
        source={imgSrc}
        style={{
          height: 9*win.width/9,
          flex: 1,
        }}
      />
      <BodyText>
        Assume that the company raises the price of its replacement heads to $15. As a rule of thumb, assume that sales of replacement heads in a given year are equal to four times the number of toothbrushes sold in that year.
      </BodyText>
      <BodyText>
        If the goal is profit maximization, should Crestgate set the price for the <I>e-Brush</I> above or below $20?
      </BodyText>
      <BlockQuote>
        Crestgate's costs per <I>e-Brush</I> produced are $20, while its costs per replacement head unit are $5.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
