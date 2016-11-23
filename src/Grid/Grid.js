import React from 'react';
//import './material-grid.css';

const GenerateGridClassNames = (props) => {
  let classes = "mdl-grid";
  console.log(props);
  return classes;
}

const Grid = (props) => {
  return (
    <div className={GenerateGridClassNames(props)}>{ props.children }</div>
  );
};

export default Grid;