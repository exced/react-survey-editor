'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localeProvider = require('antd/es/locale-provider');

var _localeProvider2 = _interopRequireDefault(_localeProvider);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/locale-provider/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _App = require('../Containers/App');

var _App2 = _interopRequireDefault(_App);

var _Survey = require('../Models/Survey');

var _en_US = require('antd/lib/locale-provider/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _fr_FR = require('antd/lib/locale-provider/fr_FR');

var _fr_FR2 = _interopRequireDefault(_fr_FR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var locales = {
  enUS: _en_US2.default,
  frFR: _fr_FR2.default
};

var Init = function (_Component) {
  _inherits(Init, _Component);

  function Init() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Init);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Init.__proto__ || Object.getPrototypeOf(Init)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
      _this.props.set(_this.props.initialValue);
    }, _this.componentWillReceiveProps = function (nextProps) {
      _this.props.set(nextProps.initialValue);
    }, _this.onExport = function () {
      return _this.app.wrappedInstance.onExport();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Put this in case you need your own save logic


  _createClass(Init, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          locale = _props.locale,
          onExport = _props.onExport;


      return _react2.default.createElement(
        _localeProvider2.default,
        { locale: locales[locale] },
        _react2.default.createElement(_App2.default, { ref: function ref(_ref2) {
            return _this2.app = _ref2;
          }, onExport: onExport })
      );
    }
  }]);

  return Init;
}(_react.Component);

exports.default = Init;


Init.propTypes = {
  initialValue: _propTypes2.default.object,
  locale: _propTypes2.default.string,
  onExport: _propTypes2.default.func
};

Init.defaultProps = {
  initialValue: (0, _Survey.initialValue)(),
  locale: "enUS",
  onExport: function onExport(v) {}
};