import React from 'react';
import {
  Button,
  ScrollView,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../case-styles';
import BodyText from '../../BodyText';
import AnswerInput from '../../AnswerInput';
import ExplanationModal from '../../ExplanationModal';


const PageTwo = function PageTwo(props) {
  const { submitResponse, responseById, submittedById, toggleModal, modalById, pageIndex, caseIndex } = props;
  const PAGE_ID = `c${caseIndex}p${pageIndex}`;
  const response = responseById[PAGE_ID];

  const handleClick = function handleClick(id) {
    if (!submittedById[id]) return submitResponse(id)
    else return toggleModal(id);
  };

  return (
    <View style={styles.pageContainer}>
      <ExplanationModal toggleModal={toggleModal} id={PAGE_ID} visible={modalById[PAGE_ID]} />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
      >
        <BodyText>
          Under the current plan, AAT will build a server center and two servers. For every 500 customers signed to AAT’s service, the company will add an additional server. The company expects to capture 1&frasl;8 of the Basra metropolitan market in its first year.
        </BodyText>
        <BodyText>
          In that first year of operation, how much will AAT spend to build its center and servers?
        </BodyText>
      </ScrollView>
      <View>
        <AnswerInput answer={4} margin={1} id={PAGE_ID} {...props} />
        <Button
          title="Submit"
          disabled={(response !== undefined && response !== null) && response.length === 0}
          onPress={() => handleClick(PAGE_ID)}
        />
      </View>
    </View>
  );
};

const propTypes = {
  submitResponse: PropTypes.func.isRequired,
  responseById: PropTypes.objectOf(PropTypes.string).isRequired,
  submittedById: PropTypes.objectOf(PropTypes.string).isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalById: PropTypes.objectOf(PropTypes.bool).isRequired,
  caseIndex: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
};

PageTwo.propTypes = propTypes;

export default PageTwo;
