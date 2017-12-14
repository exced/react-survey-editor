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

var _SiderMenu = require('../Containers/SiderMenu');

var _SiderMenu2 = _interopRequireDefault(_SiderMenu);

var _SurveyEditor = require('../Containers/SurveyEditor');

var _SurveyEditor2 = _interopRequireDefault(_SurveyEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = _layout2.default.Content,
    Sider = _layout2.default.Sider;

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.toggleCollapsed = function () {
      return _this.setState({ collapsed: !_this.state.collapsed });
    };

    _this.state = {
      collapsed: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var collapsed = this.state.collapsed;
      var _props = this.props,
          value = _props.value,
          onExport = _props.onExport;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _layout2.default,
          { style: { minHeight: '100vh' } },
          _react2.default.createElement(_backTop2.default, null),
          _react2.default.createElement(
            Sider,
            { collapsible: true, trigger: null, collapsed: collapsed, style: { height: '100%', position: 'fixed', left: 0 } },
            _react2.default.createElement('div', { style: { height: 32, background: 'rgba(255, 255, 255, .2)', margin: 16 } }),
            _react2.default.createElement(_SiderMenu2.default, { value: value, onExport: onExport, collapsed: collapsed, onCollapse: this.toggleCollapsed })
          ),
          _react2.default.createElement(
            _layout2.default,
            { style: { marginLeft: collapsed ? 60 : 200, transition: "all 0.3s" } },
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
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;


App.propTypes = {
  value: _propTypes2.default.object.isRequired,
  onExport: _propTypes2.default.func.isRequired
};