'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _Boolean = require('./Boolean.style');

var _label = require('../utils/label');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boolean = function (_Component) {
  _inherits(Boolean, _Component);

  function Boolean(props) {
    _classCallCheck(this, Boolean);

    var _this = _possibleConstructorReturn(this, (Boolean.__proto__ || Object.getPrototypeOf(Boolean)).call(this, props));

    var value = props.value;


    _this.state = {
      value: value
    };

    _this.handleCheckbox = _this.handleCheckbox.bind(_this);
    return _this;
  }

  _createClass(Boolean, [{
    key: 'handleCheckbox',
    value: function handleCheckbox() {
      var _props = this.props,
          onValueChange = _props.onValueChange,
          objectPath = _props.objectPath;
      var value = this.state.value;


      this.setState({
        value: !value
      });

      onValueChange(objectPath, !value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          label = _props2.label,
          options = _props2.options,
          specialLabels = _props2.specialLabels,
          fontSize = _props2.fontSize,
          checkboxStyle = _props2.checkboxStyle,
          labelStyle = _props2.labelStyle;
      var value = this.state.value;


      var formattedOptions = [];
      for (var i = 0; i < options.length; i += 1) {
        formattedOptions.push({
          value: options[i],
          label: options[i]
        });
      }

      var id = 'id_' + Math.random();
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          {
            htmlFor: id,
            style: (0, _objectAssign2.default)({}, _Boolean.labelBasicStyle, {
              fontSize: fontSize
            }, labelStyle)
          },
          _react2.default.createElement('input', {
            type: 'checkbox',
            style: (0, _objectAssign2.default)({}, _Boolean.textboxBasicStyle, {
              maxWidth: 300
            }, checkboxStyle),
            checked: value,
            onChange: this.handleCheckbox
          }),
          (0, _label.convertProperLabelFromKey)(label, specialLabels)
        )
      );
    }
  }]);

  return Boolean;
}(_react.Component);

Boolean.propTypes = {
  label: _propTypes2.default.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: _propTypes2.default.any,
  options: _propTypes2.default.arrayOf(_propTypes2.default.any),
  // eslint-disable-next-line react/forbid-prop-types
  specialLabels: _propTypes2.default.object,
  fontSize: _propTypes2.default.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  labelStyle: _propTypes2.default.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  checkboxStyle: _propTypes2.default.object.isRequired,
  onValueChange: _propTypes2.default.func.isRequired,
  objectPath: _propTypes2.default.string
};

Boolean.defaultProps = {
  label: '',
  value: '',
  options: [],
  specialLabels: {},
  objectPath: ''
};

exports.default = Boolean;