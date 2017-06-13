import React from 'react';
import CasePage from '../../CasePage';
import Body from './Body';

const PageOne = function PageOne(props) {
  return (
    <CasePage
      Body={Body}
      answer={{type: null}}
      {...props}
    />
  );
};

export default PageOne;
