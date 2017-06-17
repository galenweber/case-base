import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import PhotoView from 'react-native-photo-viewer';
import styles from './styles';

const ImageFrame = function ImageFrame({ source, style }) {
  return (
    <View
      style={styles.imageContainer}
    >
      <PhotoView
        minimumZoomScale={0.5}
        maximumZoomScale={3}
        style={style}
        source={source}
        resizeMode="contain"
      />
    </View>
  );
};

const propTypes = {
  source: PropTypes.number.isRequired,
};

ImageFrame.propTypes = propTypes;

export default ImageFrame;


