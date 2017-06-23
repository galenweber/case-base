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
        Your team would like to better understand how program funding is spent in Laraguay, and compare that with spending patterns in Similar C, one of the countries with comparable GDP per capita. In total, Similar C spends a little less than Laraguay, yet obtains better results.
      </BodyText>
      <BodyText>
        Data shows that in Similar C, 48% of program funding goes to caregiver salaries. In Laraguay, caregivers are paid, on average, $25,000.
      </BodyText>
      <BodyText>
        What percentage of program funding goes towards caregiver salaries in Laraguay?
      </BodyText>
      <BlockQuote>
        Report you answer in percentage points to the nearest tenth.
      </BlockQuote>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
