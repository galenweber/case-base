/* eslint-disable max-len */
import React from 'react';
import Dimensions from 'Dimensions';
import {
  View,
} from 'react-native';
import BodyText from '../../../BodyText';
import BlockQuote from '../../../BlockQuote';
import ImageFrame from '../../../ImageFrame';
import B from '../../../BoldText';
// 1080w 1200h
import imgSrc from '../../../../assets/images/case-graphics/case-2/page-5/one.png';

const win = Dimensions.get('window');

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Executives at Crestgate tell you they're less concerned about market share than they are about sales revenues.
      </BodyText>
      <BodyText>
        To boost revenues coming from Dizcount Mart, executives propose raising prices. The sales team opposes the move, however, arguing that the price hike would mean fewer sales of Crestgate toothpaste.
      </BodyText>
      <BodyText>
        You have your team estimate the demand curve for the company's toothpaste at Dizcount Mart. Their work is below.
      </BodyText>
      <ImageFrame
        source={imgSrc}
        style={{
          height: 9*win.width/9,
          flex: 1,
        }}
      />
      <BodyText>
        If your objective is to maximize revenue, do you support the executives' recommendation or the sales representatives' opposition?
      </BodyText>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
