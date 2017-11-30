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

var _Title = require('./Components/Title');

Object.defineProperty(exports, 'Title', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Title).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }