import React from 'react';
//import './material-cell.css';

const GenerateCellClassNames = (props) => {
  const classes = "mdl-cell";
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
  if(props.desktopOffset){
    classes += " mdl-cell--"+props.desktopOffset+"-offset-desktop";
  }
  if(props.tabletOffset){
    classes += " mdl-cell--"+props.tabletOffset+"-offset-tablet";
  }
  if(props.phoneOffset){
    classes += " mdl-cell--"+props.phoneOffset+"-offset-phone";
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
  if(props.top){
    classes += " mdl-cell--top";
  }
  if(props.middle){
    classes += " mdl-cell--middle";
  }
  if(props.bottom){
    classes += " mdl-cell--bottom";
  }
  if(props.customClass){
    classes += " " + props.customClass;
  }
  return classes;
}

const Cell = (props) => {
  return (
    <div className={GenerateCellClassNames(props)}>{ props.children }</div>
  );
};

Cell.propTypes = {
    col: React.PropTypes.number.isRequired,
    desktop: React.PropTypes.number,
    tablet: React.PropTypes.number,
    phone: React.PropTypes.number,
    offset: React.PropTypes.number,
    desktopOffset: React.PropTypes.number,
    tabletOffset: React.PropTypes.number,
    phoneOffset: React.PropTypes.number,
    hideDesktop: React.PropTypes.bool,
    hideTablet: React.PropTypes.bool,
    hidePhone: React.PropTypes.bool,
    top: React.PropTypes.bool,
    middle: React.PropTypes.bool,
    bottom: React.PropTypes.bool,
    customClass: React.PropTypes.string
};

export default Cell;