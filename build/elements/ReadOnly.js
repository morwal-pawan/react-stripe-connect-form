'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _label = require('../utils/label');

var _ReadOnly = require('./ReadOnly.style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReadOnly = function ReadOnly(props) {
  var label = props.label,
      value = props.value,
      specialLabels = props.specialLabels,
      fontSize = props.fontSize,
      textboxStyle = props.textboxStyle,
      labelStyle = props.labelStyle;


  var id = 'id_' + Math.random();

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      {
        htmlFor: id,
        style: (0, _objectAssign2.default)({}, _ReadOnly.labelBasicStyle, labelStyle, {
          fontSize: fontSize
        })
      },
      (0, _label.convertProperLabelFromKey)(label, specialLabels)
    ),
    _react2.default.createElement(
      'p',
      {
        style: (0, _objectAssign2.default)({}, _ReadOnly.textboxBasicStyle, textboxStyle)
      },
      value
    )
  );
};

ReadOnly.propTypes = {
  label: _propTypes2.default.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: _propTypes2.default.any,
  // eslint-disable-next-line react/forbid-prop-types
  specialLabels: _propTypes2.default.object,
  fontSize: _propTypes2.default.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  textboxStyle: _propTypes2.default.object,
  // eslint-disable-next-line react/forbid-prop-types
  labelStyle: _propTypes2.default.object
};

ReadOnly.defaultProps = {
  label: '',
  value: '',
  specialLabels: {},
  textboxStyle: {},
  labelStyle: {}
};

exports.default = ReadOnly;