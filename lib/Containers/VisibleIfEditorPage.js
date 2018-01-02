'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _ControllerQuestion = require('../Selectors/ControllerQuestion');

var _Question = require('../Selectors/Question');

var _VisibleIfEditor = require('../Components/VisibleIfEditor');

var _VisibleIfEditor2 = _interopRequireDefault(_VisibleIfEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    previousQuestions: (0, _ControllerQuestion.getPreviousQuestionsFromPage)(state, ownProps),
    questionsMap: (0, _Question.questions)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_VisibleIfEditor2.default);