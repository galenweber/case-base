import React from 'react';
import CasePage from '../../../CasePage';
import Body from './Body';

export default function Page01(props) {
  return (
    <CasePage
      Body={Body}
      answer={{type: null}}
      {...props}
    />
  );
};

