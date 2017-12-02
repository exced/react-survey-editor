"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeToName = undefined;

var _Editor = require("../Types/Editor");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var typeToName = exports.typeToName = function typeToName(type) {
  var _SURVEY$QUESTION_TEXT;

  return (_SURVEY$QUESTION_TEXT = {}, _defineProperty(_SURVEY$QUESTION_TEXT, _Editor.SURVEY, "Questionnaire"), _defineProperty(_SURVEY$QUESTION_TEXT, _Editor.QUESTION_TEXT, "Texte"), _defineProperty(_SURVEY$QUESTION_TEXT, _Editor.QUESTION_DATE, "Date"), _defineProperty(_SURVEY$QUESTION_TEXT, _Editor.QUESTION_DISCRETE_SCALE, "Échelle discrète"), _defineProperty(_SURVEY$QUESTION_TEXT, _Editor.QUESTION_NUMERICAL_SCALE, "Échelle numérique"), _defineProperty(_SURVEY$QUESTION_TEXT, _Editor.QUESTION_CHOICES, "Choix"), _defineProperty(_SURVEY$QUESTION_TEXT, _Editor.QUESTION_IMAGE, "Image"), _defineProperty(_SURVEY$QUESTION_TEXT, _Editor.QUESTION_RANK, "Classement"), _SURVEY$QUESTION_TEXT)[type];
};