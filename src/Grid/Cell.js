import React from 'react';
//import './material-cell.css';

const GenerateCellClassNames = (props) => {
  let classes = "mdl-cell";
  console.log(props);
  return classes;
}

const Cell = (props) => {
  return (
    <div className={GenerateCellClassNames(props)}>{ props.children }</div>
  );
};

export default Cell;