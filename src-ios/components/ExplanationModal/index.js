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
    const {visible = false, toggleModal, id } = this.props;
    return (
      <Modal
        visible={visible}
      >
        <View style={styles.modal}>
          <View>
            <Text>Under the current plan, AAT will build a server center and two servers. For every 500 customers signed to AAT’s service, the company will add an additional server. The company expects to capture 1&frasl;8 of the Basra metropolitan market in its first year.</Text>
            <Text>What is the solution.</Text>
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
}

ExplanationModal.propTypes = propTypes;

export default ExplanationModal;
