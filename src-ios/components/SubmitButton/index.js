import React from 'react';
import {
  Button,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SubmitButton = function SubmitButton({
  submitResponse,
  toggleModal,
  response,
  submitted,
  id,
}) {
  const enabled = response && response.length;
  const title = (submitted) ? 'View Answer' : 'Submit';

  const handlePress = function handlePress(id) {
    if (!submitted) return submitResponse(id);
    return toggleModal(id);
  }

  return (
    <Button
      onPress={() => handlePress(id)}
      disabled={!enabled}
      title={title}
    />
  )
}

export default SubmitButton;

