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
        AAT should rent out its modems
      </Subheader>
      <BodyText>
        Selling the modems to customers provides a substantial boost to annual profits, but that boost is concentrated in the first year.
      </BodyText>
      <BodyText>
        By <I>renting</I> its modems to customers, AAT would add a consistent revenue stream across years of operation.
      </BodyText>
      <BodyText>
        Presumably AAT requires customers to use modems provided by the company. As a result, the rent charged is effectively an increase in the annual service price. However, it won’t show up in the <I>headline</I> price. AAT can continue to advertise its broadband service at $15/month (and thereby remain competitive against the existing state-owned enterprise). This should enable AAT to continue to meet its market share targets.
      </BodyText>
      <BodyText>
        AAT can allow customers to purchase modems instead of renting them, but setting the cost north of $23, maybe around $30, will encourage most customers to rent, even if it means they lose money over the long run.
      </BodyText>
      <BodyText>
        In fact, this is the very strategy employed by major broadband companies in the United States, such as Time Warner Cable.
      </BodyText>
    </View>
  );
};

export default Explanation;
