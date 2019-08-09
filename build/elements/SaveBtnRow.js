'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _weav = require('weav');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var saveRowStyle = {
  width: '100%',
  paddingTop: 10,
  paddingBottom: 15,
  textAlign: 'right'
};

var SaveBtnRow = function SaveBtnRow(props) {
  var onSave = props.onSave;

  return _react2.default.createElement(
    'div',
    {
      style: saveRowStyle
    },
    _react2.default.createElement(
      _weav.Button,
      {
        capitalize: true,
        onClick: onSave
      },
      'Save'
    )
  );
};

SaveBtnRow.propTypes = {
  onSave: _propTypes2.default.func.isRequired
};

exports.default = SaveBtnRow;