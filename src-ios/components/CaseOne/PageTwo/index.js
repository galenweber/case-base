import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import CasePage from '../../CasePage';
import Explanation from './Explanation';
import Body from './Body';
import answer from './answer';


const PageTwo = function PageTwo(props) {

  return (
    <CasePage
      Body={Body}
      Explanation={Explanation}
      answer={answer}
      {...props}
    />
  )
}

export default PageTwo;
