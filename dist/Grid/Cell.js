"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import './material-cell.css';

var GenerateCellClassNames = function GenerateCellClassNames(props) {
  var classes = "mdl-cell";
  if (props.col) {
    classes += " mdl-cell--" + props.col + "-col";
  }
  console.log(props);
  return classes;
};

var Cell = function Cell(props) {
  return _react2.default.createElement(
    "div",
    { className: GenerateCellClassNames(props) },
    props.children
  );
};

exports.default = Cell;