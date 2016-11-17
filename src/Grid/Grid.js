import React from 'react';
import './material-grid.css';

const GenerateGridClassNames = (props) => {
  let classes = "mdl-grid";
  consol.log(props);
  return classes;
}

const Grid = (props) => {
  let classNames = GenerateGridClassNames(props);
  return (
    <div className={classNames}></div>
  );
};

export default Grid;