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
import Fraction from '../../../../Fraction';
// w:1080 h:1080
import imgSrc from '../../../../../assets/images/case-graphics/laraguayAssistance/page-9/one.png';

const win = Dimensions.get('window');

const Body = function Body() {
  return (
    <View>
      <BodyText>
        Your team decides not to advocate for a joint public-private system, due to the costs and risks involved.
      </BodyText>
      <BodyText>
        Before presenting the recommendation for a caregiver salary hike, your team must complete a final step: finding a way to generate the 20% savings from center upkeep costs.
      </BodyText>
      <BodyText>
        Your team believes this may be an area where privatization can provide benefits without real risks. Rather than using government employees for maintenance of these centers, you propose using private contractors.
      </BodyText>
      <BodyText>
        Private contractors in this industry earn salaries that are on average <Fraction>7/8</Fraction> of the current salaries paid to public employees. In addition, the public employees receive monthly benefits from the Laraguayan government. Currently those employed in the upkeep of the public centers receive an average monthly salary of $1,600 (provided in two installments over the course of the month) and a retirement fund contribution following the schedule below. The schedule details the marginal contribution rate at different income thresholds.
      </BodyText>
      <ImageFrame
        source={imgSrc}
        style={{
          height: 9*win.width/10,
        }}
      />
      <BlockQuote>
        Interpret the graphic in the following way: on the first $4,000 in annual income, the government contributes 5% of that amount to the employee's retirement fund. The next $8,000 gets a 4% contribution, and so on. Assume, for this estimation, that $1,600 is not just the average monthly salary, but the monthly salary that all upkeep employees earn.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
