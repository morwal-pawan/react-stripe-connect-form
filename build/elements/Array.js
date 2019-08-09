'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _weav = require('weav');

var _Obj = require('./Obj');

var _Obj2 = _interopRequireDefault(_Obj);

var _label = require('../utils/label');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Array = function Array(props) {
  var label = props.label,
      list = props.list,
      keysNotToDisplay = props.keysNotToDisplay,
      specialLabels = props.specialLabels,
      fontSize = props.fontSize,
      onValueChange = props.onValueChange,
      objectPath = props.objectPath,
      shrinkingFont = props.shrinkingFont;


  return _react2.default.createElement(
    'div',
    null,
    label ? _react2.default.createElement(
      'p',
      {
        style: {
          fontSize: fontSize
        }
      },
      (0, _label.convertProperLabelFromKey)(label, specialLabels)
    ) : null,
    list.map(function (item, itemIndex) {
      // "example 1"
      if (_lodash2.default.isString(item) && !_lodash2.default.includes(keysNotToDisplay, item)) {
        return _react2.default.createElement(_weav.Textbox, {
          value: item,
          onChange: function onChange(e) {
            onValueChange(objectPath, e.target.value);
          }
        });
      } else if (_lodash2.default.isArray(item) && !_lodash2.default.includes(keysNotToDisplay, item)) {
        return _react2.default.createElement(Array, _extends({}, props, {
          list: item,
          fontSize: (0, _label.findNewFontSize)(shrinkingFont, fontSize),
          objectPath: objectPath + '[' + itemIndex + ']'
        }));
      } else if (_lodash2.default.isObject(item) && !_lodash2.default.includes(keysNotToDisplay, item)) {
        return _react2.default.createElement(_Obj2.default, _extends({}, props, {
          obj: item,
          fontSize: (0, _label.findNewFontSize)(shrinkingFont, fontSize),
          objectPath: objectPath + '[' + itemIndex + ']'
        }));
      }
      return null;
    })
  );
};

Array.propTypes = {
  label: _propTypes2.default.string,
  list: _propTypes2.default.arrayOf(_propTypes2.default.any),
  keysNotToDisplay: _propTypes2.default.arrayOf(_propTypes2.default.string),
  // eslint-disable-next-line react/forbid-prop-types
  specialLabels: _propTypes2.default.object,
  fontSize: _propTypes2.default.number,
  onValueChange: _propTypes2.default.func.isRequired,
  objectPath: _propTypes2.default.string
};

Array.defaultProps = {
  label: null,
  list: [],
  fontSize: 14,
  keysNotToDisplay: [],
  specialLabels: {},
  objectPath: ''
};

exports.default = Array;