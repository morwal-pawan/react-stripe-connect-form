'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Array = require('./Array');

var _Array2 = _interopRequireDefault(_Array);

var _Element = require('./Element');

var _Element2 = _interopRequireDefault(_Element);

var _Boolean = require('./Boolean');

var _Boolean2 = _interopRequireDefault(_Boolean);

var _ReadOnly = require('./ReadOnly');

var _ReadOnly2 = _interopRequireDefault(_ReadOnly);

var _label = require('../utils/label');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Obj = function Obj(props) {
  var label = props.label,
      obj = props.obj,
      keysNotToDisplay = props.keysNotToDisplay,
      readOnlyFields = props.readOnlyFields,
      fontSize = props.fontSize,
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
      (0, _label.convertProperLabelFromKey)(label)
    ) : null,
    Object.keys(obj).map(function (key) {
      var nextObjectPath = key;
      if (objectPath !== '') {
        nextObjectPath = objectPath + '.' + key;
      }
      /*
       * ...props pass these through:
       * keysNotToDisplay= keysNotToDisplay
       * readOnlyFields= readOnlyFields
       * specialLabels= specialLabels
       */
      if (_lodash2.default.isArray(obj[key]) && !_lodash2.default.includes(keysNotToDisplay, key)) {
        return _react2.default.createElement(_Array2.default, _extends({}, props, {
          key: Math.random(),
          label: key,
          list: obj[key],
          fontSize: (0, _label.findNewFontSize)(shrinkingFont, fontSize),
          objectPath: nextObjectPath
        }));
      } else if (_lodash2.default.isObject(obj[key]) && !_lodash2.default.includes(keysNotToDisplay, key)) {
        return _react2.default.createElement(Obj, _extends({}, props, {
          key: Math.random(),
          label: key,
          obj: obj[key],
          fontSize: (0, _label.findNewFontSize)(shrinkingFont, fontSize),
          objectPath: nextObjectPath
        }));
      } else if (_lodash2.default.isBoolean(obj[key]) && !_lodash2.default.includes(keysNotToDisplay, key)) {
        return _react2.default.createElement(_Boolean2.default, _extends({}, props, {
          key: Math.random(),
          label: key,
          value: obj[key],
          options: ['true', 'false'],
          fontSize: (0, _label.findNewFontSize)(shrinkingFont, fontSize),
          objectPath: nextObjectPath
        }));
      } else if (_lodash2.default.includes(keysNotToDisplay, key)) {
        return null;
      } else if (_lodash2.default.includes(readOnlyFields, key)) {
        return _react2.default.createElement(_ReadOnly2.default, _extends({}, props, {
          key: Math.random(),
          label: key,
          value: obj[key],
          fontSize: (0, _label.findNewFontSize)(shrinkingFont, fontSize),
          objectPath: nextObjectPath
        }));
      }

      return _react2.default.createElement(_Element2.default, _extends({}, props, {
        key: Math.random(),
        label: key,
        value: obj[key],
        fontSize: (0, _label.findNewFontSize)(shrinkingFont, fontSize),
        objectPath: nextObjectPath
      }));
    })
  );
};

Obj.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  obj: _propTypes2.default.object,
  label: _propTypes2.default.string,
  keysNotToDisplay: _propTypes2.default.arrayOf(_propTypes2.default.string),
  readOnlyFields: _propTypes2.default.arrayOf(_propTypes2.default.string),
  fontSize: _propTypes2.default.number.isRequired,
  objectPath: _propTypes2.default.string
};

Obj.defaultProps = {
  obj: {},
  label: null,
  keysNotToDisplay: [],
  readOnlyFields: [],
  objectPath: ''
};

exports.default = Obj;