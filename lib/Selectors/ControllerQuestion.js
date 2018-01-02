'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPreviousQuestionsFromQuestion = exports.getPreviousQuestionsFromPage = exports.getControllerQuestion = undefined;

var _reselect = require('reselect');

var _Question = require('../Selectors/Question');

var _Page = require('./Page');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Input Selectors
var id = function id(state, props) {
  return props.id;
};

var value = function value(state, props) {
  return props.value;
};

var questions = function questions(state) {
  return state.controller.questions;
};

// Selectors
var getControllerQuestion = exports.getControllerQuestion = (0, _reselect.createSelector)([questions, id], function (questions, id) {
  return questions[id] || {};
});

var getPreviousQuestionsFromPage = exports.getPreviousQuestionsFromPage = (0, _reselect.createSelector)([value, _Page.getOrderedPages, _Question.questions], function (value, pages, questions) {
  return pages.slice(0, pages.findIndex(function (e) {
    return e.id === value.id;
  })).reduce(function (a, p) {
    return [].concat(_toConsumableArray(a), _toConsumableArray(p.questions.map(function (q) {
      return questions[q];
    })));
  }, []);
});

var getPreviousQuestionsFromQuestion = exports.getPreviousQuestionsFromQuestion = (0, _reselect.createSelector)([value, _Page.getOrderedPages, _Question.questions], function (value, pages, questions) {
  return pages.slice(0, pages.findIndex(function (e) {
    return e.id === value.pageId;
  }) + 1).reduce(function (a, p) {
    return [].concat(_toConsumableArray(a), _toConsumableArray((p.id === value.pageId ? p.questions.slice(0, p.questions.indexOf(value.id)) : p.questions).map(function (q) {
      return questions[q];
    })));
  }, []);
});