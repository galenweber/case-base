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
        Discount store prices drive revenue down
      </Subheader>
      <BodyText>
        In volume terms, it looks likes sales have risen slightly in recent years. That trend has been driven by sharp increases in the volume sold at discount stores, particularly Dizcount Mart.
      </BodyText>
      <BodyText>
        However, these discount stores appear to be capturing customers from supermarkets, where sales volume has <I>decreased</I> in recent years.
      </BodyText>
      <BodyText>
        The issue is that the higher volume at discount stores hasn’t translated one for one into higher dollar sales. Taking dollar sales and dividing that by volume, it appears that an individual sale at Dizcount Mart generates less revenue than does an individual sale at one of the supermarket chains, likely due to the price markdowns.
      </BodyText>
      <BodyText>
        If sales continue to trend towards discount stores, Crestgate’s margins will continue to suffer.
      </BodyText>
    </View>
  );
};

export default Explanation;
