'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Editor = require('./Editor');

var _Editor2 = _interopRequireDefault(_Editor);

var _Survey = require('./Survey');

var _Survey2 = _interopRequireDefault(_Survey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = _layout2.default.Header,
    Footer = _layout2.default.Footer,
    Sider = _layout2.default.Sider,
    Content = _layout2.default.Content;

var SurveyEditor = function (_Component) {
  _inherits(SurveyEditor, _Component);

  function SurveyEditor() {
    _classCallCheck(this, SurveyEditor);

    return _possibleConstructorReturn(this, (SurveyEditor.__proto__ || Object.getPrototypeOf(SurveyEditor)).apply(this, arguments));
  }

  _createClass(SurveyEditor, [{
    key: 'render',
    value: function render() {
      var survey = this.props.survey;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _layout2.default,
          { style: { minHeight: '100vh' } },
          _react2.default.createElement(
            Content,
            null,
            _react2.default.createElement(_Editor2.default, { survey: survey })
          )
        )
      );
    }
  }]);

  return SurveyEditor;
}(_react.Component);

SurveyEditor.propTypes = {
  survey: _propTypes2.default.object.isRequired
};
exports.default = SurveyEditor;