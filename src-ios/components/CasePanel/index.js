import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import styles from './styles';
import bcgImgSrc from '../../assets/images/company-logos/bcg/bcg-logo.png';

export default function CasePanel(props) {
  const { navigate } = props.navigation;
  console.log('case index is ', props.caseIndex);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('CasePage', {
        pages: props.pages,
        name: props.name,
        caseIndex: props.caseIndex,
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
          {props.name}
        </Text>
        <Text style={styles.company}>
          {props.company}
        </Text>
        <View
          style={styles.filler}
        />
        <Text style={styles.updated}>
          {props.updated}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

