'use strict';

import React from 'react';

require('styles//Grid.css');

const GenerateGridClassNames = (props) => {
  let classes = 'mdl-grid';
  console.log(props);
  return classes;
}

let Grid = (props) => {
  return (
    <div className={GenerateGridClassNames(props)}></div>
  );
};

export default Grid;