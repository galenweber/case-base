import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import bcgImgSrc from '../../assets/images/company-logos/bcg/bcg-logo.png';

const CasePanel = function CasePanel({ navigation, pages, name, company, updated, caseIndex }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('CasePage', {
        pages,
        name,
        caseIndex,
      })}
    >
      <Image
        style={styles.image}
        source={bcgImgSrc}
      />
      <View
        style={styles.textBody}
      >
        <Text style={styles.title}>
          {name}
        </Text>
        <Text style={styles.company}>
          {company}
        </Text>
        <View
          style={styles.filler}
        />
        <Text style={styles.updated}>
          {updated}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const propTypes = {
  caseIndex: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired,
  updated: PropTypes.string.isRequired,
};

CasePanel.propTypes = propTypes;

export default CasePanel;

