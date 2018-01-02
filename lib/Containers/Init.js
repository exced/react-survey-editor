'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Survey = require('../Actions/Survey');

var _Init = require('../Components/Init');

var _Init2 = _interopRequireDefault(_Init);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    set: function set(v) {
      return dispatch((0, _Survey.set)(v));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps, null, { withRef: true })(_Init2.default);