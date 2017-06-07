import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ExplanationModal from '../ExplanationModal';
import SubmitButton from '../SubmitButton';
import InputRow from '../InputRow';

const CasePage = function CasePage({
  Body,
  Explanation,
  toggleModal,
  submitResponse,
  submittedById,
  handleInput,
  responseById,
  modalById,
  pageIndex,
  caseIndex,
  answer,
}) {

  const id = `c${caseIndex}p${pageIndex}`;
  const response = responseById[id];
  const submitted = submittedById[id];

  const modalProps = {
    toggleModal,
    id,
    visible: modalById[id],
  };

  const inputProps = Object.assign(
    {
      submitted,
      response,
      handleInput,
      id,
    },
    answer
  );


  const buttonProps = {
    submitResponse,
    toggleModal,
    response,
    submitted,
    id,
  };

  return (
    <View style={styles.casePage}>
      <ExplanationModal {...modalProps}>
        <Explanation />
      </ExplanationModal>
      <ScrollView>
        <View style={styles.bodyContainer}>
          <Body />
        </View>
      </ScrollView>
      <View>
        <InputRow {...inputProps}/>
        <SubmitButton {...buttonProps}/>
      </View>
    </View>
  );
};

const propTypes = {
  Body: PropTypes.func.isRequired,
  Explanation: PropTypes.function,
};

const defaultProps = {
}

CasePage.propTypes = propTypes;

export default CasePage;




