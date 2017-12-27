'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initialValue = undefined;

var _lodash = require('lodash');

var initialValue = exports.initialValue = function initialValue() {
    return {
        id: (0, _lodash.uniqueId)(),
        title: 'Page',
        visibleIf: 'true',
        questions: []
    };
};