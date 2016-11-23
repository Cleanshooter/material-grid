'use strict';

import React from 'react';

require('styles//Cell.css');

const GenerateCellClassNames = (props) => {
  let classes = 'mdl-cell';
  console.log(props);
  return classes;
}

const Cell = (props) => {
  return (
    <div className={GenerateCellClassNames(props)}></div>
  );
};

export default Cell;