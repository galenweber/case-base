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
import imgOneSrc from '../../../../../assets/images/case-graphics/case-2/page-2/one.png';
import imgTwoSrc from '../../../../../assets/images/case-graphics/case-2/page-2/two.png';

const win = Dimensions.get('window');

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Your team compiles the graphic below detailing the trajectory of Crestgate sales at supermarkets and discount stores in recent years.
      </BodyText>
      <BlockQuote>
        Case graphics - including the one below - support <I>pinch-to-zoom</I>. Adjust and scroll the image as needed to interpret the graphic.
      </BlockQuote>
      <ImageFrame
        source={imgOneSrc}
        style={{
          height: 7*win.width/9,
          flex: 1,
        }}
      />
      <ImageFrame
        source={imgTwoSrc}
        style={{
          height: 7*win.width/9,
          flex: 1,
        }}
      />
      <BodyText>
        Looking at these charts, what possible explanations do you see for Crestgate’s stagnating sales?
      </BodyText>
      <BlockQuote>
        This is a <B>free response</B> question.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
