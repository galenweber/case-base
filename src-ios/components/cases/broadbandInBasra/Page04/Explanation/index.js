import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import BodyText from '../../../../BodyText';
import MathText from '../../../../MathText';
import Subheader from '../../../../Subheader';
import I from '../../../../ItalicText';

const Explanation = function Explanation() {
  return (
    <View>
      <Subheader>
        Not necessarily
      </Subheader>
      <BodyText>
        Certainly, these contribution margins are large. But that’s to be expected in the broadband industry, where the major expenses are fixed startup costs, and the marginal cost of adding another customer is small.
      </BodyText>
      <BodyText>
        Before advising the backers of AAT, I would need to get a sense of how long it will take the company to recoup the substantial sunk investment. In essence, we need a measure of the project’s profitability that accounts for all costs - fixed and variable.
      </BodyText>
    </View>
  );
};

export default Explanation;
