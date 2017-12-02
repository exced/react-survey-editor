'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxUndo = require('redux-undo');

var _reduxUndo2 = _interopRequireDefault(_reduxUndo);

var _Editor = require('./Editor');

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // surveyEditor: undoable(surveyEditor, {
  //   limit: 10 // history limit
  // }),
  editor: _Editor2.default
};