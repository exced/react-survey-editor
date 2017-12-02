'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dispatcher;

require('antd/lib/row/style');

require('antd/lib/dropdown/style');

require('antd/lib/button/style');

require('antd/lib/col/style');

require('antd/lib/menu/style');

require('antd/lib/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _DragList = require('../Components/DragList');

var _Editor = require('../Types/Editor');

var _QuestionEditorComponents = require('../Components/QuestionEditorComponents');

var _EditFields = require('../Components/EditFields');

var _QuestionMenu = require('../Components/QuestionMenu');

var _QuestionMenu2 = _interopRequireDefault(_QuestionMenu);

var _Editor2 = require('../Actions/Editor');

var _Editor3 = require('../Transforms/Editor');

var _Editor4 = require('./Styles/Editor.css');

var _Editor5 = _interopRequireDefault(_Editor4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layoutStyle = {
  margin: 20,
  background: '#f7f7f7',
  borderRadius: 6,
  marginBottom: 24,
  border: '2px solid',
  borderColor: '#f7f7f7',
  overflow: 'hidden'
};

var Header = _layout2.default.Header,
    Footer = _layout2.default.Footer,
    Sider = _layout2.default.Sider,
    Content = _layout2.default.Content;

var SubMenu = _menu2.default.SubMenu;

var dispatcher = (_dispatcher = {}, _defineProperty(_dispatcher, _Editor.QUESTION_TEXT, _QuestionEditorComponents.QuestionText), _defineProperty(_dispatcher, _Editor.QUESTION_TEXT_AREA, _QuestionEditorComponents.QuestionTextArea), _defineProperty(_dispatcher, _Editor.QUESTION_DATE, _QuestionEditorComponents.QuestionDate), _defineProperty(_dispatcher, _Editor.QUESTION_DISCRETE_SCALE, _QuestionEditorComponents.QuestionDiscreteScale), _defineProperty(_dispatcher, _Editor.QUESTION_NUMERICAL_SCALE, _QuestionEditorComponents.QuestionNumericalScale), _defineProperty(_dispatcher, _Editor.QUESTION_CHOICES, _QuestionEditorComponents.QuestionChoices), _defineProperty(_dispatcher, _Editor.QUESTION_IMAGE, _QuestionEditorComponents.QuestionImage), _defineProperty(_dispatcher, _Editor.QUESTION_RANK, _QuestionEditorComponents.QuestionRank), _dispatcher);

var QuestionEditor = function (_Component) {
  _inherits(QuestionEditor, _Component);

  function QuestionEditor(props) {
    _classCallCheck(this, QuestionEditor);

    var _this = _possibleConstructorReturn(this, (QuestionEditor.__proto__ || Object.getPrototypeOf(QuestionEditor)).call(this, props));

    _this.setItem = function (value) {
      var _this$props = _this.props,
          item = _this$props.data.item,
          setQuestion = _this$props.setQuestion;

      setQuestion(item.id, _extends({}, item, value));
    };

    _this.resetItem = function (type) {
      var _this$props2 = _this.props,
          item = _this$props2.data.item,
          resetQuestion = _this$props2.resetQuestion;

      resetQuestion(item.id, type);
    };

    _this.removeItem = function () {
      return _this.props.removeQuestion(_this.props.data.item.id);
    };

    _this.onClickOptions = function (_ref) {
      var key = _ref.key;
    };

    _this.state = {};
    return _this;
  }

  _createClass(QuestionEditor, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$data = _props.data,
          item = _props$data.item,
          index = _props$data.index,
          collapsed = _props.collapsed,
          setQuestion = _props.setQuestion,
          resetQuestion = _props.resetQuestion,
          moveQuestion = _props.moveQuestion,
          removeQuestion = _props.removeQuestion;
      var id = item.id,
          title = item.title,
          mandatory = item.mandatory,
          enabledIf = item.enabledIf,
          type = item.type;


      var EditorComponent = dispatcher[type];

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
          { style: { padding: 10 } },
          _react2.default.createElement(
            _col2.default,
            { span: 2 },
            _react2.default.createElement(_DragList.Handle, null)
          ),
          _react2.default.createElement(
            _col2.default,
            { span: 18 },
            _react2.default.createElement(
              'div',
              { style: { textAlign: 'center' } },
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(_EditFields.EditText, { value: title, onChange: function onChange(title) {
                    return _this2.setItem({ title: title });
                  }, size: 'large', placeholder: 'Question' }),
                _react2.default.createElement(
                  'sup',
                  null,
                  _react2.default.createElement(_button2.default, { type: 'dashed', onClick: function onClick() {
                      return _this2.setItem({ mandatory: !mandatory });
                    }, shape: 'circle', icon: mandatory ? 'star' : 'star-o', size: 'small' })
                )
              )
            )
          ),
          _react2.default.createElement(
            _col2.default,
            { span: 4 },
            _react2.default.createElement(
              _dropdown2.default,
              { overlay: _react2.default.createElement(_QuestionMenu2.default, { onClick: function onClick(type) {
                    return _this2.resetItem(type);
                  } }) },
              _react2.default.createElement(
                _button2.default,
                { shape: 'circle', type: 'secondary', icon: 'setting', size: 'large' },
                (0, _Editor3.typeToName)()
              )
            ),
            _react2.default.createElement(
              _dropdown2.default,
              { overlay: options },
              _react2.default.createElement(_button2.default, { shape: 'circle', icon: 'ellipsis', size: 'large' })
            ),
            _react2.default.createElement(_button2.default, { type: 'danger', onClick: function onClick() {
                return _this2.removeItem();
              }, shape: 'circle', icon: 'delete', size: 'large' })
          )
        ),
        _react2.default.createElement(
          Content,
          { style: { textAlign: 'left', margin: 10, marginLeft: 50 } },
          !collapsed && _react2.default.createElement(EditorComponent, { value: item, onChange: this.setItem })
        )
      );
    }
  }]);

  return QuestionEditor;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setQuestion: function setQuestion(id, value) {
      return dispatch((0, _Editor2.setItem)(id, value));
    },
    resetQuestion: function resetQuestion(id, type) {
      return dispatch((0, _Editor2.resetItem)(id, type));
    },
    moveQuestion: function moveQuestion(oldIndex, newIndex) {
      return dispatch((0, _Editor2.moveItem)());
    },
    removeQuestion: function removeQuestion(id) {
      return dispatch((0, _Editor2.removeItem)(id));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(QuestionEditor);