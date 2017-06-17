import React from 'react';
import CasePage from '../../CasePage';
import Explanation from './Explanation';
import Body from './Body';
import answer from './answer';

export default function Page05(props) {
  return (
    <CasePage
      Body={Body}
      Explanation={Explanation}
      answer={answer}
      {...props}
    />
  );
};

