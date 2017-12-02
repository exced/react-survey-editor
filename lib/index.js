'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Editor = require('./Reducers/Editor');

Object.defineProperty(exports, 'Reducer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Editor).default;
  }
});

var _SurveyEditor = require('./Containers/SurveyEditor');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SurveyEditor).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }