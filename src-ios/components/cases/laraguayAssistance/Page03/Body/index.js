/* eslint-disable max-len */
import React from 'react';
import Dimensions from 'Dimensions';
import {
  Image,
  View,
} from 'react-native';
import BodyText from '../../../../BodyText';
import BlockQuote from '../../../../BlockQuote';
import ImageFrame from '../../../../ImageFrame';
import B from '../../../../BoldText';
import I from '../../../../ItalicText';
// w:1080 h:1260
import imgSrc from '../../../../../assets/images/case-graphics/laraguayAssistance/page-3/one.png';

const win = Dimensions.get('window');

const Body = function Body() {
  return (
    <View>
      <BodyText>
        The first step your team takes is to compile some of the most commonly referenced metrics in program evaluation. The team collects information for Laraguay, but also for three regional peers, three developed economies, and three countries with similar GDP per capita.
      </BodyText>
      <BodyText>
        The findings are displayed below.
      </BodyText>
      <ImageFrame
        source={imgSrc}
        style={{
          height: 9*win.width/10,
        }}
      />
      <BodyText>
        One of the committee members asks your team to look into the example of Regional Peer C, which outperforms all regional and economic peers on the UN assessment.
      </BodyText>
      <BodyText>
        The committee member believes that Peer C’s disability program benefits from greater consolidation: running fewer disability centers allows for greater concentration of resources and focus.
      </BodyText>
      <BodyText>
        The committee member would like to know what share of Laraguay’s currently existing centers would have to close to bring average center size (in terms of youth per center) in line with Regional Peer C.
      </BodyText>
      <BlockQuote>
        Report your answer in <I>percentage points</I>. For example, 20% would be entered as 20.
      </BlockQuote>
      <BlockQuote>
        0.5% of Laraguay’s population are currently enrolled at the centers. Assume that closings have no effect on the overall number of enrollees in the program.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
