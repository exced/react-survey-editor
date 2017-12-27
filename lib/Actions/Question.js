'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveQuestion = exports.removeQuestion = exports.resetQuestion = exports.setQuestion = exports.addQuestion = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Question = require('../Types/Question');

var _Question2 = require('../Models/Question');

// Action Creators
var addQuestion = exports.addQuestion = function addQuestion(pageId, type) {
  return {
    type: _Question.ADD_QUESTION,
    payload: _extends({}, (0, _Question2.initialValue)(type), {
      pageId: pageId
    })
  };
};

var setQuestion = exports.setQuestion = function setQuestion(id, value) {
  return {
    type: _Question.SET_QUESTION,
    payload: _extends({}, value, {
      id: id
    })
  };
};

var resetQuestion = exports.resetQuestion = function resetQuestion(id, type) {
  return {
    type: _Question.SET_QUESTION,
    payload: _extends({}, (0, _Question2.initialValue)(type), {
      id: id
    })
  };
};

var removeQuestion = exports.removeQuestion = function removeQuestion(pageId, id) {
  return {
    type: _Question.REMOVE_QUESTION,
    payload: {
      pageId: pageId,
      id: id
    }
  };
};

var moveQuestion = exports.moveQuestion = function moveQuestion(pageId, data) {
  return {
    type: _Question.MOVE_QUESTION,
    payload: {
      pageId: pageId,
      data: data
    }
  };
};