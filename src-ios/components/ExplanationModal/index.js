import React from 'react';
import {
  Button,
  Modal,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class ExplanationModal extends React.Component {
  render() {
    const {visible = false, toggleModal, id, children } = this.props;
    return (
      <Modal
        visible={visible}
      >
        <View style={styles.modal}>
          <View>
            {children}
            <View style={styles.filler} >
            </View>
            <Button
              title="Close Explanation"
              onPress={() => toggleModal(id)}
              style={styles.button}
            />
          </View>
        </View>
      </Modal>
    )
  }
}

const propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.element.isRequired,
}

ExplanationModal.propTypes = propTypes;

export default ExplanationModal;
