import React from 'react';
//import './material-grid.css';

const GenerateGridClassNames = (props) => {
  let classes = "mdl-grid";
  if(props.noSpacing){
    classes += " mdl-grid--no-spacing";
  }
  return classes;
}

const Grid = (props) => {
  return (
    <div className={GenerateGridClassNames(props)}>{ props.children }</div>
  );
};

export default Grid;