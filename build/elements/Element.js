'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _weav = require('weav');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _label = require('../utils/label');

var _Element = require('./Element.style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = function (_Component) {
  _inherits(Element, _Component);

  function Element(props) {
    _classCallCheck(this, Element);

    var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

    var value = props.value;


    _this.state = {
      value: value
    };

    _this.updateElement = _this.updateElement.bind(_this);
    return _this;
  }

  _createClass(Element, [{
    key: 'updateElement',
    value: function updateElement(e) {
      var _props = this.props,
          objectPath = _props.objectPath,
          onValueChange = _props.onValueChange;
      var value = e.target.value;


      this.setState({
        value: value
      });

      onValueChange(objectPath, value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          label = _props2.label,
          specialLabels = _props2.specialLabels,
          labelStyle = _props2.labelStyle,
          textboxStyle = _props2.textboxStyle,
          fontSize = _props2.fontSize;
      var value = this.state.value;


      var id = 'id_' + Math.random();

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          {
            htmlFor: id,
            style: (0, _objectAssign2.default)({}, _Element.labelBasicStyle, {
              fontSize: fontSize
            }, labelStyle)
          },
          (0, _label.convertProperLabelFromKey)(label, specialLabels)
        ),
        _react2.default.createElement(_weav.Textbox, {
          value: value,
          id: id,
          style: (0, _objectAssign2.default)({}, _Element.textboxBasicStyle, textboxStyle),
          onChange: this.updateElement
        })
      );
    }
  }]);

  return Element;
}(_react.Component);

Element.propTypes = {
  label: _propTypes2.default.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: _propTypes2.default.any,
  // eslint-disable-next-line react/forbid-prop-types
  specialLabels: _propTypes2.default.object,
  fontSize: _propTypes2.default.number,
  // eslint-disable-next-line react/forbid-prop-types
  textboxStyle: _propTypes2.default.object,
  // eslint-disable-next-line react/forbid-prop-types
  labelStyle: _propTypes2.default.object,
  onValueChange: _propTypes2.default.func.isRequired,
  objectPath: _propTypes2.default.string
};

Element.defaultProps = {
  label: '',
  value: '',
  fontSize: 12,
  specialLabels: {},
  textboxStyle: {},
  labelStyle: {},
  objectPath: ''
};

exports.default = Element;