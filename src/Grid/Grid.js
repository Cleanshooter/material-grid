import React from 'react';
//import './material-grid.css';

const GenerateGridClassNames = (props) => {
  let classes = "mdl-grid";
  if(props.noSpacing){
    classes += " mdl-grid--no-spacing";
  }
  if(props.customClass){
    classes += " " + props.customClass;
  }
  return classes;
}

const Grid = (props) => {
  return (
    <div className={GenerateGridClassNames(props)}>{ props.children }</div>
  );
};

Grid.propTypes = {
  noSpacing: React.PropTypes.bool,
  customClass: React.PropTypes.string
};

export default Grid;