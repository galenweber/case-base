import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import BodyText from '../../../BodyText';
import MathText from '../../../MathText';
import Subheader from '../../../Subheader';
import I from '../../../ItalicText';

const Explanation = function Explanation() {
  return (
    <View>
      <Subheader>
        Lower toothbrush prices, raise head prices
      </Subheader>
      <BodyText>
        Of the three competitors, Crestgate charges by far the highest price for its electric toothbrush model. While this helps generate revenue from toothbrush sales (Crestgate’s revenue here is equal to or just below that of its two rivals), it results in far fewer toothbrushes being sold.
      </BodyText>
      <BodyText>
        This ends up hurting replacement head sales. Over a year, Dental-B and Brawn each sell twice as many toothbrush heads as Crestgate does. They manage this despite charging far higher prices for heads.
      </BodyText>
      <BodyText>
        What’s probably happening is that consumers who have purchased a Dental-B or Brawn toothbrush need to purchase a replacement head of the same brand. As a result, price does not really factor into their decision (though obviously if the price reached a certain point the consumer could just buy an entirely new toothbrush).
      </BodyText>
      <BodyText>
        Dental-B and Brawn are sacrificing revenue from toothbrush sales and making it back from replacement head sales. Crestgate needs to pursue a similar strategy and raise the price charged for its replacement heads in order to compensate for lost revenue from lower toothbrush prices.
      </BodyText>
      <BodyText>
        This resembles the strategy long pursued by printer manufacturers: they sell the printers at a low price, and generate profits by charging high prices for replacement ink cartridges.
      </BodyText>
    </View>
  );
};

export default Explanation;
