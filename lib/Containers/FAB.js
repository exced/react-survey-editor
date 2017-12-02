'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/dropdown/style');

require('antd/lib/menu/style');

require('antd/lib/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reduxUndo = require('redux-undo');

var _Editor = require('../Actions/Editor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FAB = function (_Component) {
  _inherits(FAB, _Component);

  function FAB() {
    _classCallCheck(this, FAB);

    return _possibleConstructorReturn(this, (FAB.__proto__ || Object.getPrototypeOf(FAB)).apply(this, arguments));
  }

  _createClass(FAB, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          undo = _props.undo,
          redo = _props.redo,
          addPage = _props.addPage;


      var menu = _react2.default.createElement(
        _menu2.default,
        null,
        _react2.default.createElement(
          _menu2.default.Item,
          null,
          _react2.default.createElement(_button2.default, { onClick: undo, shape: 'circle', icon: 'backward', size: 'large' })
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          null,
          _react2.default.createElement(_button2.default, { onClick: redo, shape: 'circle', icon: 'forward', size: 'large' })
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          null,
          _react2.default.createElement(_button2.default, { onClick: addPage, shape: 'circle', icon: 'file-add', size: 'large' })
        )
      );

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _dropdown2.default,
          { overlay: menu, placement: 'bottomCenter' },
          _react2.default.createElement(_button2.default, { type: 'primary', shape: 'circle', icon: 'plus', size: 'large' })
        )
      );
    }
  }]);

  return FAB;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    undo: function undo() {
      return dispatch(_reduxUndo.ActionCreators.undo());
    },
    redo: function redo() {
      return dispatch(_reduxUndo.ActionCreators.redo());
    },
    addPage: function addPage() {
      return dispatch((0, _Editor.addPage)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FAB);