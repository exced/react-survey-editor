'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Editor = require('./Actions/Editor');

Object.defineProperty(exports, 'Actions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Editor).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }