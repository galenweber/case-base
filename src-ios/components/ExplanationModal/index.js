import React from 'react';
import {
  Button,
  Modal,
  View,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ExplanationModal = function ExplanationModal({
  children,
  id,
  toggleModal,
  visible = false,
}) {
  return (
    <Modal
      visible={visible}
    >
      <View style={styles.modal}>
        <View>
          <ScrollView>
            {children}
          </ScrollView>
          <Button
            title="Close Answer"
            onPress={() => toggleModal(id)}
            style={styles.button}
          />
        </View>
      </View>
    </Modal>
  );
};

const defaultProps = {
  visible: false,
};

const propTypes = {
  children: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

ExplanationModal.defaultProps = defaultProps;
ExplanationModal.propTypes = propTypes;

export default ExplanationModal;
