import React, { Component } from 'react';
import './material-cell.css';

const GenerateCellClassNames = (props) => {
  let classes = "mdl-cell";
  consol.log(props);
  return classes;
}

const Cell = (props) => {
  let classNames = GenerateCellClassNames(props);
  return (
    <div className={classNames}></div>
  );
};

export default Cell;