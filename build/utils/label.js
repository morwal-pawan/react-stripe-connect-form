'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findNewFontSize = exports.convertProperLabelFromKey = exports.makeUpperCase = exports.removeUnderscore = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeUnderscore = exports.removeUnderscore = function removeUnderscore(key) {
  return _lodash2.default.replace(key, /_/g, ' ');
};

var makeUpperCase = exports.makeUpperCase = function makeUpperCase(key) {
  return key.toUpperCase();
};

var convertProperLabelFromKey = exports.convertProperLabelFromKey = function convertProperLabelFromKey(key, specialLabels) {
  if (_lodash2.default.has(specialLabels, key)) {
    return specialLabels[key];
  }
  return makeUpperCase(removeUnderscore(key));
};

var findNewFontSize = exports.findNewFontSize = function findNewFontSize(shrinkingFont, fontSize) {
  if (!shrinkingFont || fontSize < 11) {
    return 11;
  }
  return fontSize - 2;
};