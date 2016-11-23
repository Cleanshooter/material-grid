import React from 'react';
//import './material-cell.css';

const GenerateCellClassNames = (props) => {
  let classes = "mdl-cell";
  if(props.col){
    classes += " mdl-cell--"+props.col+"-col";
  }
  if(props.desktop){
    classes += " mdl-cell--"+props.desktop+"-col-desktop";
  }
  if(props.tablet){
    classes += " mdl-cell--"+props.tablet+"-col-tablet";
  }
  if(props.phone){
    classes += " mdl-cell--"+props.phone+"-col-phone";
  }
  if(props.offset){
    classes += " mdl-cell--"+props.offset+"-offset";
  }
  if(props.offsetDesktop){
    classes += " mdl-cell--"+props.offsetDesktop+"-offset-desktop";
  }
  if(props.offsetTablet){
    classes += " mdl-cell--"+props.offsetTablet+"-offset-tablet";
  }
  if(props.offsetPhone){
    classes += " mdl-cell--"+props.offsetPhone+"-offset-phone";
  }
  if(props.hideDesktop){
    classes += " mdl-cell--hide-desktop";
  }
  if(props.hideTablet){
    classes += " mdl-cell--hide-tablet";
  }
  if(props.hidePhone){
    classes += " mdl-cell--hide-phone";
  }
  if(props.stretch){
    classes += " mdl-cell--stretch";
  }
  if(props.top){
    classes += " mdl-cell--top";
  }
  if(props.middle){
    classes += " mdl-cell--middle";
  }
  if(props.bottom){
    classes += " mdl-cell--bottom";
  }
  return classes;
}

const Cell = (props) => {
  return (
    <div className={GenerateCellClassNames(props)}>{ props.children }</div>
  );
};

export default Cell;