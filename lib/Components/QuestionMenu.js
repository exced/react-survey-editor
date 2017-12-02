'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

require('antd/lib/menu/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Editor = require('../Types/Editor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubMenu = _menu2.default.SubMenu;

var QuestionMenu = function QuestionMenu(_ref) {
  var onClick = _ref.onClick;


  var onClickType = function onClickType(_ref2) {
    var key = _ref2.key;

    var type = {
      "1.1": _Editor.QUESTION_TEXT,
      "1.2": _Editor.QUESTION_TEXT_AREA,
      "2": _Editor.QUESTION_DATE,
      "3.1": _Editor.QUESTION_DISCRETE_SCALE,
      "3.2": _Editor.QUESTION_NUMERICAL_SCALE,
      "4.1": _Editor.QUESTION_CHOICES,
      "4.2": _Editor.QUESTION_MATRIX,
      "5": _Editor.QUESTION_IMAGE,
      "6": _Editor.QUESTION_RANK
    }[key];
    if (type) {
      onClick(type);
    }
  };

  return _react2.default.createElement(
    _menu2.default,
    { onClick: onClickType },
    _react2.default.createElement(
      SubMenu,
      { title: 'Texte' },
      _react2.default.createElement(
        _menu2.default.Item,
        { key: '1.1' },
        'Court'
      ),
      _react2.default.createElement(
        _menu2.default.Item,
        { key: '1.2' },
        'Long'
      )
    ),
    _react2.default.createElement(
      _menu2.default.Item,
      { key: '2' },
      'Date'
    ),
    _react2.default.createElement(
      SubMenu,
      { title: '\xC9chelle' },
      _react2.default.createElement(
        _menu2.default.Item,
        { key: '3.1' },
        'Discr\xE8te'
      ),
      _react2.default.createElement(
        _menu2.default.Item,
        { key: '3.2' },
        'Num\xE9rique'
      )
    ),
    _react2.default.createElement(
      SubMenu,
      { title: 'Choix' },
      _react2.default.createElement(
        _menu2.default.Item,
        { key: '4.1' },
        'Liste'
      ),
      _react2.default.createElement(
        _menu2.default.Item,
        { key: '4.2' },
        'Matrice'
      )
    ),
    _react2.default.createElement(
      _menu2.default.Item,
      { key: '5' },
      'Image'
    ),
    _react2.default.createElement(
      _menu2.default.Item,
      { key: '6' },
      'Classement'
    )
  );
};

exports.default = QuestionMenu;