'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _reduxUndo = require('redux-undo');

var _FAB = require('../Components/FAB');

var _FAB2 = _interopRequireDefault(_FAB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onUndo: function onUndo() {
      return dispatch(_reduxUndo.ActionCreators.undo());
    },
    onRedo: function onRedo() {
      return dispatch(_reduxUndo.ActionCreators.redo());
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_FAB2.default);