'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Survey = require('../Selectors/Survey');

var _Normalizr = require('../Selectors/Normalizr');

var _Survey2 = require('../Schemas/Survey');

var _App = require('../Components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    value: (0, _Survey.getSurvey)(state),
    denormalize: function denormalize() {
      return (0, _Survey2.denormalize)((0, _Normalizr.getResult)(state), (0, _Normalizr.getEntities)(state));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { withRef: true })(_App2.default);