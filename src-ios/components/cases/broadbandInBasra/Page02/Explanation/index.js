import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import BodyText from '../../../../BodyText';
import MathText from '../../../../MathText';
import Subheader from '../../../../Subheader';

const Explanation = function Explanation() {
  return (
    <View>
      <Subheader>
        $27 million on the center and servers
      </Subheader>
      <BodyText>
        The cost of the server center is given to us: $20.5 million.
      </BodyText>
      <BodyText>
        To calculate server expenditures, first calculate the number of customers AAT will serve.
      </BodyText>
      <BodyText>
        The state-owned enterprise has 156,000 customers, amounting to 78% of the total market. That means the full market consists of 200,000 customers:
      </BodyText>
      <MathText>
        156,000 / .78 = 200,000
      </MathText>
      <BodyText>
        Now if AAT captures 1&frasl;8 of that market its customer base will be 25,000 customers:
      </BodyText>
      <MathText>
        1/8 of 200,000 = 25,000
      </MathText>
      <BodyText>
        With an additional server for every 500 customers, AAT will add 50 servers for those 25,000 customers.
      </BodyText>
      <BodyText>
        Adding in the two servers that AAT plans to start with, the business must purchase 52 servers. At $125,000 each, these 52 servers will cost $6.5 million in total:
      </BodyText>
      <MathText>
        $125,000 × 52 = $6.5 million
      </MathText>
      <BodyText>
        Finally we add back in the cost of the server center itself to find that total expenses for the necessary equipage come out to $27 million:
      </BodyText>
      <MathText>
        $20.5m + $6.5m = $27 million
      </MathText>
    </View>
  );
};

export default Explanation;
