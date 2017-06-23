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
        Pro: more competition Con: less accountability
      </Subheader>
      <BodyText>
        The introduction of private centers will foster benefits through competition, but could potentially weaken the quality of programs and even increase total costs.
      </BodyText>
      <BodyText>
        With the government run centers, one can argue that there is little incentive to limit costs and increase quality. Caregiver salaries and other expenditures are set by government legislation, meaning that directors who find creative ways to save funds see no benefit: all unspent money is remitted to the Laraguayan government.
      </BodyText>
      <BodyText>
        Disabled youth are enrolled at centers based on their home address, and as a result, there is no 'competition' for enrollees. This factor limits the incentive to produce quality programming at the centers. Good curriculum or bad, roughly the same number of youth will remain enrolled.
      </BodyText>
      <BodyText>
        Both the above arguments, of course, rely on the unrealistic assumption that staff and directors are motivated only by monetary and career incentives.
      </BodyText>
      <BodyText>
        There are several different ways the introduction of private companies could increase costs.
      </BodyText>
      <BodyText>
        First, there are the potential monetary costs. Depending on the voucher payment that the government settles on for each private company, Laraguay could end up spending <I>more</I> per student under the new arrangement.
      </BodyText>
      <BodyText>
        In addition, if the private companies bring disability services to regions or areas that had previously been without them, this will lead to an increase in the number of youth enrolled and thereby increase total costs. This should not be a major concern, however, as expanding access is central to improving the disability assistance program.
      </BodyText>
      <BodyText>
        Perhaps most serious is the potential cost to the quality of the programs. Competition should normally improve quality, but there is the risk that profit motivated private firms will seek to spend as little as possible in order to maximize returns. This could seriously damage the condition of the programming.
      </BodyText>
      <BodyText>
        What's more, care for the disabled can be a difficult thing to entrust to private companies. Disabled youth often have difficulty reporting mistreatment. There needs to be some governing body to prevent abuse.
      </BodyText>
      <BodyText>
        A well designed private marketplace could mitigate this risk, by establishing a regulator entrusted with monitoring and reviewing the conduct of the private companies.
      </BodyText>
    </View>
  );
};

export default Explanation;
