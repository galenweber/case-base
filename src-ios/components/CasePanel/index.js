import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import styles from './styles';
import settingsImgSrc from '../../assets/images/settings/ic_settings.png';

const CasePanel = function CasePanel({ navigation, pages, name, company, thumbnail, caseIndex, lastModified, }) {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('CaseSwiper', {
        pages,
        name,
        caseIndex,
      })}
    >
      <Image
        style={styles.image}
        source={thumbnail}
      />
      <View
        style={styles.textBody}
      >
        <View style={styles.textMoreRow}>
          <View
            style={styles.titleAndCompany}
          >
            <Text style={styles.title}>
              {name}
            </Text>
            <Text style={styles.company}>
              {company}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings', {
              caseIndex,
              name,
              pages,
            })}
          >
            <Image
              source={settingsImgSrc}
            />
          </TouchableOpacity>
        </View>
        <View
          style={styles.filler}
        />
        <Text style={styles.updated}>
          Last modified: {
            (lastModified)
              ? dateFormat(
                  new Date(lastModified),
                  'mmmm dS, yyyy, h:MM TT'
                )
              : 'Not started'
          }
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
};

CasePanel.propTypes = propTypes;

export default CasePanel;

