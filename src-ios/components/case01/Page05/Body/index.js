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
        To get a better sense of the business’s financial viability, AAT would like an estimate of its ability to pay back the debt incurred on launch.
      </BodyText>
      <BodyText>
        Assume that AAT takes out a loan to cover the fixed costs of building its center and servers. It covers all other expenses out of annual operating revenue.
      </BodyText>
      <BodyText>
        Run a rough calculation: is AAT’s annual profit high enough to allow the company to cover all accrued interest (10% annual rate) and pay down 4% of the principal after the first year?
      </BodyText>
    </View>
  );
};

export default Body;
/* eslint-enable max-len */
