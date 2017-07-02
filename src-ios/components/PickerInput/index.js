import React from 'react';
import {
  Picker,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const PickerInput = function PickerInput({
  submitted,
  response,
  handleInput,
  id,
  items,
}) {
  const handleValueChange = function handleValueChange(itemVal) {
    if (!submitted) handleInput(id, itemVal);
  };

  return (
    <View>
      <Picker
        enabled={!submitted}
        style={styles.pickerInput}
        onValueChange={handleValueChange}
        selectedValue={response}
      >
        {items.map(e => (
          <Picker.Item
            label={e.label}
            value={e.value}
            key={e.value}
          />
        ))}
      </Picker>
    </View>
  );
};

const propTypes = {
  handleInput: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  response: PropTypes.string,
  submitted: PropTypes.bool,
};

const defaultProps = {
  submitted: false,
  response: '',
};

PickerInput.propTypes = propTypes;
PickerInput.defaultProps = defaultProps;

export default PickerInput;

