'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SurveyEditor = undefined;

var _backTop = require('antd/lib/back-top');

var _backTop2 = _interopRequireDefault(_backTop);

var _affix = require('antd/lib/affix');

var _affix2 = _interopRequireDefault(_affix);

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/back-top/style');

require('antd/lib/affix/style');

require('antd/lib/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _ToolBar = require('./ToolBar');

var _ToolBar2 = _interopRequireDefault(_ToolBar);

var _FAB = require('./FAB');

var _FAB2 = _interopRequireDefault(_FAB);

var _Editor = require('../Selectors/Editor');

var _DragList = require('../Components/DragList');

var _DragList2 = _interopRequireDefault(_DragList);

var _PageEditor = require('./PageEditor');

var _PageEditor2 = _interopRequireDefault(_PageEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = _layout2.default.Header,
    Footer = _layout2.default.Footer,
    Sider = _layout2.default.Sider,
    Content = _layout2.default.Content;

var SurveyEditor = exports.SurveyEditor = function (_Component) {
  _inherits(SurveyEditor, _Component);

  function SurveyEditor() {
    _classCallCheck(this, SurveyEditor);

    return _possibleConstructorReturn(this, (SurveyEditor.__proto__ || Object.getPrototypeOf(SurveyEditor)).apply(this, arguments));
  }

  _createClass(SurveyEditor, [{
    key: 'render',
    value: function render() {
      var pages = this.props.pages;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _layout2.default,
          { style: { margin: 20 } },
          _react2.default.createElement(
            Header,
            { style: { background: '#fff', padding: 0, position: 'relative' } },
            _react2.default.createElement(_ToolBar2.default, null),
            _react2.default.createElement(
              _affix2.default,
              { style: { position: 'absolute', bottom: 20, right: 20 } },
              _react2.default.createElement(_FAB2.default, null)
            )
          ),
          _react2.default.createElement(
            Content,
            { style: { marginTop: 20 } },
            _react2.default.createElement(_backTop2.default, null),
            _react2.default.createElement(
              'div',
              { style: { padding: 24, background: '#fff', textAlign: 'center' } },
              _react2.default.createElement(_DragList2.default, { Component: _PageEditor2.default, data: pages })
            )
          ),
          _react2.default.createElement(
            Footer,
            { style: { textAlign: 'center' } },
            '\xA92017 Survey Editor'
          )
        )
      );
    }
  }]);

  return SurveyEditor;
}(_react.Component);

SurveyEditor.propTypes = {
  prop: _propTypes2.default
};


var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    pages: (0, _Editor.getPages)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SurveyEditor);