'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _weav = require('weav');

var _SaveBtnRow = require('../elements/SaveBtnRow');

var _SaveBtnRow2 = _interopRequireDefault(_SaveBtnRow);

var _Obj = require('../elements/Obj');

var _Obj2 = _interopRequireDefault(_Obj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactStripeConnectForm = function (_Component) {
  _inherits(ReactStripeConnectForm, _Component);

  function ReactStripeConnectForm(props) {
    _classCallCheck(this, ReactStripeConnectForm);

    var _this = _possibleConstructorReturn(this, (ReactStripeConnectForm.__proto__ || Object.getPrototypeOf(ReactStripeConnectForm)).call(this, props));

    _this.state = {
      isLoading: false,
      stripeAccount: _this.props.stripeAccount
    };

    _this.saveStripeInformation = _this.saveStripeInformation.bind(_this);
    _this.onValueChange = _this.onValueChange.bind(_this);
    return _this;
  }

  _createClass(ReactStripeConnectForm, [{
    key: 'onValueChange',
    value: function onValueChange(path, value) {
      var updateStripeAccount = this.props.updateStripeAccount;


      updateStripeAccount(path, value);
    }
  }, {
    key: 'saveStripeInformation',
    value: function saveStripeInformation() {
      var saveStripeAccount = this.props.saveStripeAccount;
      var stripeAccount = this.state.stripeAccount;


      saveStripeAccount(stripeAccount);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          stripeAccount = _props.stripeAccount,
          loadingComponent = _props.loadingComponent,
          isLoading = _props.isLoading,
          showFieldsWhenLoading = _props.showFieldsWhenLoading;


      return _react2.default.createElement(
        'div',
        null,
        !isLoading ? _react2.default.createElement(_SaveBtnRow2.default, {
          onSave: this.saveStripeInformation
        }) : loadingComponent,
        showFieldsWhenLoading || !showFieldsWhenLoading && !isLoading ? _react2.default.createElement(_Obj2.default, _extends({}, this.props, {
          obj: stripeAccount,
          onValueChange: this.onValueChange
        })) : null
      );
    }
  }]);

  return ReactStripeConnectForm;
}(_react.Component);

ReactStripeConnectForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  stripeAccount: _propTypes2.default.object.isRequired,
  fontSize: _propTypes2.default.number,
  shrinkingFont: _propTypes2.default.bool,
  readOnlyFields: _propTypes2.default.arrayOf(_propTypes2.default.string),
  keysNotToDisplay: _propTypes2.default.arrayOf(_propTypes2.default.string),
  // eslint-disable-next-line react/forbid-prop-types
  labelStyle: _propTypes2.default.object,
  // eslint-disable-next-line react/forbid-prop-types
  textboxStyle: _propTypes2.default.object,
  // eslint-disable-next-line react/forbid-prop-types
  checkboxStyle: _propTypes2.default.object,
  // eslint-disable-next-line react/forbid-prop-types
  readOnlyLabelStyle: _propTypes2.default.object,
  // eslint-disable-next-line react/forbid-prop-types
  readOnlyTextboxStyle: _propTypes2.default.object,
  // eslint-disable-next-line react/forbid-prop-types
  editableLabelStyle: _propTypes2.default.object,
  // eslint-disable-next-line react/forbid-prop-types
  editableTextboxStyle: _propTypes2.default.object,
  // eslint-disable-next-line react/forbid-prop-types
  specialLabels: _propTypes2.default.object,
  isLoading: _propTypes2.default.bool,
  // eslint-disable-next-line react/forbid-prop-types
  loadingComponent: _propTypes2.default.object,
  showFieldsWhenLoading: _propTypes2.default.bool,
  updateStripeAccount: _propTypes2.default.func,
  saveStripeAccount: _propTypes2.default.func
};

ReactStripeConnectForm.defaultProps = {
  shrinkingFont: true,
  fontSize: 16,
  labelStyle: {},
  textboxStyle: {},
  checkboxStyle: {},
  readOnlyLabelStyle: {},
  readOnlyTextboxStyle: {},
  editableLabelStyle: {},
  editableTextboxStyle: {},
  readOnlyFields: ['interval', 'delay_days', 'payout_statement_descriptor', 'payouts_enabled', 'charges_enabled', 'business_tax_id_provided', 'product_description', 'details_submitted'],
  specialLabels: {
    dob: 'DATE OF BIRTH'
  },
  keysNotToDisplay: ['disabled_reason', 'fields_needed', 'due_by', 'verification', 'id', 'object', 'url', 'created'],
  isLoading: false,
  loadingComponent: _react2.default.createElement(_weav.LoadingBar, {
    text: 'Loading...'
  }),
  showFieldsWhenLoading: false,
  updateStripeAccount: function updateStripeAccount() {},
  saveStripeAccount: function saveStripeAccount() {}
};

exports.default = ReactStripeConnectForm;