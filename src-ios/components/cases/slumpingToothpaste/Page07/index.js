import React from 'react';
import CasePage from '../../CasePage';
import Body from './Body';

export default function Page07(props) {
  return (
    <CasePage
      Body={Body}
      answer={{type: null}}
      {...props}
    />
  );
};


