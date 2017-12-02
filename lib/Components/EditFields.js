'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditText = undefined;

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _templateObject = _taggedTemplateLiteral(['\ncolor: ', ';\nfont-size: 1.25em;\npadding: 0.25em 1em;\nborder-width: 1px;\nborder-color: ', ';\nbackground-color: transparent;\nwidth: auto;\nheight: auto;\ntext-align: center;\n'], ['\ncolor: ', ';\nfont-size: 1.25em;\npadding: 0.25em 1em;\nborder-width: 1px;\nborder-color: ', ';\nbackground-color: transparent;\nwidth: auto;\nheight: auto;\ntext-align: center;\n']);

require('antd/lib/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Editor = require('./Styles/Editor.css');

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledInput = (0, _styledComponents2.default)(_input2.default)(_templateObject, function (props) {
  return props.color ? props.color : '#181919';
}, function (props) {
  return props.focused ? '#181919' : 'transparent';
});

var EditText = exports.EditText = function EditText(_ref) {
  var _onChange = _ref.onChange,
      value = _ref.value,
      size = _ref.size,
      placeholder = _ref.placeholder;
  return _react2.default.createElement(StyledInput, {
    onFocus: function onFocus(e) {
      return e.target.select();
    },
    onBlur: function onBlur(e) {
      return e.target.blur();
    },
    onPressEnter: function onPressEnter(e) {
      return e.target.blur();
    },
    size: size,
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    placeholder: placeholder
  });
};