'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/row/style');

require('antd/lib/dropdown/style');

require('antd/lib/col/style');

require('antd/lib/menu/style');

require('antd/lib/button/style');

require('antd/lib/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _DragList = require('../Components/DragList');

var _DragList2 = _interopRequireDefault(_DragList);

var _QuestionEditor = require('./QuestionEditor');

var _QuestionEditor2 = _interopRequireDefault(_QuestionEditor);

var _Editor = require('../Actions/Editor');

var _QuestionMenu = require('../Components/QuestionMenu');

var _QuestionMenu2 = _interopRequireDefault(_QuestionMenu);

var _Editor2 = require('../Selectors/Editor');

var _EditFields = require('../Components/EditFields');

var _Editor3 = require('./Styles/Editor.css');

var _Editor4 = _interopRequireDefault(_Editor3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = _layout2.default.Header,
    Footer = _layout2.default.Footer,
    Sider = _layout2.default.Sider,
    Content = _layout2.default.Content;

var ButtonGroup = _button2.default.Group;
var SubMenu = _menu2.default.SubMenu;

var layoutStyle = {
  background: '#e8e5e5',
  borderRadius: 6,
  marginBottom: 24,
  border: '2px solid',
  borderColor: '#e8e5e5',
  overflow: 'hidden'
};

var PageEditor = function (_Component) {
  _inherits(PageEditor, _Component);

  function PageEditor(props) {
    _classCallCheck(this, PageEditor);

    var _this = _possibleConstructorReturn(this, (PageEditor.__proto__ || Object.getPrototypeOf(PageEditor)).call(this, props));

    _this.toggle = function () {
      return _this.setState({ collapsed: !_this.state.collapsed });
    };

    _this.onAddQuestion = function (type) {
      return _this.props.addQuestion(type, _this.props.questions.length, _this.props.data.item.id);
    };

    _this.setItem = function (value) {
      var _this$props = _this.props,
          item = _this$props.data.item,
          setPage = _this$props.setPage;

      setPage(item.id, _extends({}, item, value));
    };

    _this.removeItem = function () {
      return _this.props.removePage(_this.props.data.item.id);
    };

    _this.onClickOptions = function (_ref) {
      var key = _ref.key;
    };

    _this.state = {
      collapsed: false
    };
    return _this;
  }

  _createClass(PageEditor, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var collapsed = this.state.collapsed;
      var _props = this.props,
          _props$data = _props.data,
          item = _props$data.item,
          index = _props$data.index,
          questions = _props.questions;
      var id = item.id,
          title = item.title;


      var options = _react2.default.createElement(
        _menu2.default,
        { onClick: this.onClickOptions },
        _react2.default.createElement(
          _menu2.default.Item,
          { key: '1' },
          'Visible si'
        )
      );

      return _react2.default.createElement(
        _layout2.default,
        { style: layoutStyle },
        _react2.default.createElement(
          _row2.default,
          null,
          _react2.default.createElement(
            _col2.default,
            { span: 2 },
            _react2.default.createElement(
              'div',
              { style: { padding: 10 } },
              _react2.default.createElement(_DragList.Handle, null)
            )
          ),
          _react2.default.createElement(
            _col2.default,
            { span: 18 },
            _react2.default.createElement(
              'div',
              { style: { textAlign: 'center' } },
              _react2.default.createElement(
                'h2',
                null,
                _react2.default.createElement(_EditFields.EditText, { value: title, onChange: function onChange(title) {
                    return _this2.setItem({ title: title });
                  }, size: 'large', placeholder: 'Page' })
              )
            )
          ),
          _react2.default.createElement(
            _col2.default,
            { span: 4 },
            _react2.default.createElement(
              'div',
              { style: { padding: 10 } },
              _react2.default.createElement(
                _dropdown2.default,
                { overlay: _react2.default.createElement(_QuestionMenu2.default, { onClick: this.onAddQuestion }) },
                _react2.default.createElement(_button2.default, { type: 'secondary', shape: 'circle', icon: 'plus', size: 'large' })
              ),
              _react2.default.createElement(_button2.default, { onClick: this.toggle, shape: 'circle', icon: collapsed ? 'down' : 'up', size: 'large' }),
              _react2.default.createElement(
                _dropdown2.default,
                { overlay: options },
                _react2.default.createElement(_button2.default, { shape: 'circle', icon: 'ellipsis', size: 'large' })
              ),
              _react2.default.createElement(_button2.default, { type: 'danger', onClick: this.toggle, shape: 'circle', icon: 'delete', size: 'large' })
            )
          )
        ),
        _react2.default.createElement(
          Content,
          null,
          _react2.default.createElement(_DragList2.default, { collapsed: collapsed, Component: _QuestionEditor2.default, data: questions })
        )
      );
    }
  }]);

  return PageEditor;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    questions: (0, _Editor2.getQuestions)(state, ownProps.data.item.id)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setPage: function setPage(id, value) {
      return dispatch((0, _Editor.setItem)(id, value));
    },
    removePage: function removePage(id) {
      return dispatch((0, _Editor.removeItem)(id));
    },
    addQuestion: function addQuestion(type, index, pageId) {
      return dispatch((0, _Editor.addItem)(type, index, pageId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PageEditor);