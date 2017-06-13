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
    <View style={styles.casePage}>
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
        <View style={styles.answerRow}>
          <View style={styles.inputRow}>
            <InputRow {...inputProps} />
          </View>
          <View style={styles.buttonRow}>
            <SubmitButton {...buttonProps} />
          </View>
        </View>
      ) : <View />}
    </View>
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

