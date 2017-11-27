'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.moveQuestion = exports.setQuestion = exports.removeQuestion = exports.addQuestion = exports.movePage = exports.setPage = exports.removePage = exports.addPage = exports.newSurvey = exports.select = undefined;

var _Editor = require('../Types/Editor');

// Action Creators
var select = exports.select = function select(selected) {
    return {
        type: _Editor.SELECT,
        payload: {
            selected: selected
        }
    };
};

var newSurvey = exports.newSurvey = function newSurvey() {
    return {
        type: _Editor.NEW_SURVEY
    };
};

var addPage = exports.addPage = function addPage() {
    return {
        type: _Editor.ADD_PAGE
    };
};

var removePage = exports.removePage = function removePage(index) {
    return {
        type: _Editor.REMOVE_PAGE,
        payload: {
            index: index
        }
    };
};

var setPage = exports.setPage = function setPage(index, value) {
    return {
        type: _Editor.SET_PAGE,
        payload: {
            index: index,
            value: value
        }
    };
};

var movePage = exports.movePage = function movePage(oldIndex, newIndex) {
    return {
        type: _Editor.MOVE_PAGE,
        payload: {
            oldIndex: oldIndex,
            newIndex: newIndex
        }
    };
};

var addQuestion = exports.addQuestion = function addQuestion(pageIndex, type) {
    return {
        type: _Editor.ADD_QUESTION,
        payload: {
            pageIndex: pageIndex,
            type: type
        }
    };
};

var removeQuestion = exports.removeQuestion = function removeQuestion(pageIndex, questionIndex) {
    return {
        type: _Editor.REMOVE_QUESTION,
        payload: {
            pageIndex: pageIndex,
            questionIndex: questionIndex
        }
    };
};

var setQuestion = exports.setQuestion = function setQuestion(pageIndex, questionIndex, value) {
    return {
        type: _Editor.SET_QUESTION,
        payload: {
            pageIndex: pageIndex,
            questionIndex: questionIndex,
            value: value
        }
    };
};

var moveQuestion = exports.moveQuestion = function moveQuestion(pageIndex, oldIndex, newIndex) {
    return {
        type: _Editor.MOVE_QUESTION,
        payload: {
            pageIndex: pageIndex,
            oldIndex: oldIndex,
            newIndex: newIndex
        }
    };
};