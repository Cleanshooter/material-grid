import React from 'react';
import './material-cell.css';

const GenerateCellClassNames = (props) => {
  let classes = "mdl-cell";
  console.log(props);
  return classes;
}

const Cell = (props) => {
  let classNames = GenerateCellClassNames(props);
  return (
    <div className={classNames}></div>
  );
};

export default Cell;