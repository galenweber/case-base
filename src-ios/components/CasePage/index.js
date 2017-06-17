import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ExplanationModal from '../ExplanationModal';
import SubmitButton from '../SubmitButton';
import InputRow from '../InputRow';
import PickerInput from '../PickerInput';

const CasePage = function CasePage({
  answer,
  Body,
  caseIndex,
  Explanation,
  handleInput,
  modalById,
  pageIndex,
  responseById,
  submitResponse,
  submittedById,
  toggleModal,
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
    answer,
  );


  const buttonProps = {
    submitResponse,
    toggleModal,
    response,
    submitted,
    id,
  };

  return (
    <KeyboardAvoidingView
      behavior='position'
      style={styles.casePage}
      contentContainerStyle={styles.casePageContainer}
    >
      {(answer.type) ? (
        <ExplanationModal {...modalProps}>
          <Explanation />
        </ExplanationModal>
      ) : <View />}
      <ScrollView>
        <View style={styles.bodyContainer}>
          <Body />
        </View>
      </ScrollView>
      {(answer.type) ? (
        <View>
          <InputRow {...inputProps} />
          <SubmitButton {...buttonProps} />
        </View>
      ) : <View />}
    </KeyboardAvoidingView>
  );
};

const propTypes = {
  answer: PropTypes.shape().isRequired,
  Body: PropTypes.func.isRequired,
  caseIndex: PropTypes.number.isRequired,
  Explanation: PropTypes.func,
  handleInput: PropTypes.func.isRequired,
  modalById: PropTypes.shape().isRequired,
  pageIndex: PropTypes.number.isRequired,
  responseById: PropTypes.shape().isRequired,
  submitResponse: PropTypes.func.isRequired,
  submittedById: PropTypes.shape().isRequired,
  toggleModal: PropTypes.func.isRequired,
};



CasePage.propTypes = propTypes;

export default CasePage;

