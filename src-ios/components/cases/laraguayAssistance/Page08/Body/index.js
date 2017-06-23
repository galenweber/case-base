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

const Body = function Body() {
  return (
    <View>
      <BodyText>
        If the government permits private companies to begin providing care, your team projects that 320 private centers will open, each serving an average of 250 youth. These centers will be provided a $4,500 voucher from the government per youth enrolled.
      </BodyText>
      <BodyText>
        The total number of youth enrolled in disability assistance programs (both public and private) will rise by 25,000.
      </BodyText>
      <BodyText>
        Under these projections, what is the net effect on total state spending for disability assistance in Laraguay?
      </BodyText>
      <BlockQuote>
        If state spending falls, begin your answer with a negative sign.
      </BlockQuote>
      <BlockQuote>
        Assume the value for 'costs per youth' from the first chart remains constant no matter how many or how few youth are enrolled in the public centers. This is an unrealistic assumption, but will serve for a rough estimation.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
