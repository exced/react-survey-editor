'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backTop = require('antd/es/back-top');

var _backTop2 = _interopRequireDefault(_backTop);

var _layout = require('antd/es/layout');

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/back-top/style');

require('antd/es/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FAB = require('../Containers/FAB');

var _FAB2 = _interopRequireDefault(_FAB);

var _SurveyEditor = require('../Containers/SurveyEditor');

var _SurveyEditor2 = _interopRequireDefault(_SurveyEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = _layout2.default.Content;

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.onExport = function () {
      return _this.props.denormalize();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = this.props.value;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _layout2.default,
          { style: { minHeight: '100vh' } },
          _react2.default.createElement(_backTop2.default, null),
          _react2.default.createElement(
            'div',
            { style: { zIndex: 9999, position: 'fixed', bottom: 30, right: 30 } },
            _react2.default.createElement(_FAB2.default, { value: value, onExport: function onExport() {
                return _this2.props.onExport(_this2.props.denormalize());
              } })
          ),
          _react2.default.createElement(
            Content,
            null,
            _react2.default.createElement(
              'div',
              { style: { padding: 24, background: '#fff', textAlign: 'center' } },
              _react2.default.createElement(_SurveyEditor2.default, { value: value })
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;


App.propTypes = {
  value: _propTypes2.default.object.isRequired,
  onExport: _propTypes2.default.func.isRequired,
  denormalize: _propTypes2.default.func.isRequired
};