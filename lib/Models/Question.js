'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialValue = undefined;

var _lodash = require('lodash');

var _Question = require('../Types/Question');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialValue = exports.initialValue = function initialValue(type) {
  var _QUESTION_SWITCH$QUES;

  var id = '@@' + (0, _lodash.uniqueId)();
  return (_QUESTION_SWITCH$QUES = {}, _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_SWITCH, {
    id: id,
    type: _Question.QUESTION_SWITCH,
    title: 'Question switch',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    checkedChildren: 'Oui',
    unCheckedChildren: 'Non'
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_TEXT, {
    id: id,
    type: _Question.QUESTION_TEXT,
    title: 'Question texte court',
    mandatory: false,
    visibleIf: 'true',
    tooltip: ''
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_TEXT_AREA, {
    id: id,
    type: _Question.QUESTION_TEXT_AREA,
    title: 'Question texte long',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    autosize: true
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_RATE, {
    id: id,
    type: _Question.QUESTION_RATE,
    title: 'Question note',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    max: 5
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_DATE, {
    id: id,
    type: _Question.QUESTION_DATE,
    title: 'Question date',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    dateType: 'date',
    min: '',
    max: ''
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_DISCRETE_SCALE, {
    id: id,
    type: _Question.QUESTION_DISCRETE_SCALE,
    title: 'Question échelle discrète',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    min: 0,
    max: 100,
    step: 1
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_NUMERICAL_SCALE, {
    id: id,
    type: _Question.QUESTION_NUMERICAL_SCALE,
    title: 'Question échelle numérique',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {}
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_CHOICES, {
    id: id,
    type: _Question.QUESTION_CHOICES,
    title: 'Question choix multiples',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    choices: [],
    max: 4
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_IMAGE, {
    id: id,
    type: _Question.QUESTION_IMAGE,
    title: 'Question Image',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    maxSize: 10000
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_RANK, {
    id: id,
    type: _Question.QUESTION_RANK,
    title: 'Question rang',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    choices: []
  }), _QUESTION_SWITCH$QUES)[type];
};