'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdown = require('antd/es/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = require('antd/es/icon');

var _icon2 = _interopRequireDefault(_icon);

var _menu = require('antd/es/menu');

var _menu2 = _interopRequireDefault(_menu);

var _button = require('antd/es/button');

var _button2 = _interopRequireDefault(_button);

require('antd/es/dropdown/style');

require('antd/es/icon/style');

require('antd/es/menu/style');

require('antd/es/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FAB = function FAB(_ref) {
  var onUndo = _ref.onUndo,
      onRedo = _ref.onRedo,
      onExport = _ref.onExport,
      denormalize = _ref.denormalize;


  var menu = _react2.default.createElement(
    _menu2.default,
    null,
    _react2.default.createElement(
      _menu2.default.Item,
      { key: 'onUndo' },
      _react2.default.createElement(_button2.default, { type: 'primary', onClick: onUndo, shape: 'circle', icon: 'rollback', size: 'large' })
    ),
    _react2.default.createElement(
      _menu2.default.Item,
      { key: 'onRedo' },
      _react2.default.createElement(
        _button2.default,
        { type: 'primary', onClick: onRedo, shape: 'circle', size: 'large' },
        _react2.default.createElement(_icon2.default, { type: 'enter', style: { transform: 'rotate(180deg)' } })
      )
    ),
    _react2.default.createElement(
      _menu2.default.Item,
      { key: 'onExport' },
      _react2.default.createElement(_button2.default, { type: 'primary', onClick: function onClick() {
          return onExport(denormalize());
        }, shape: 'circle', icon: 'save', size: 'large' })
    )
  );

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _dropdown2.default,
      { overlay: menu, placement: 'topCenter' },
      _react2.default.createElement(_button2.default, { type: 'primary', shape: 'circle', icon: 'plus', size: 'large' })
    )
  );
};

FAB.propTypes = {
  onUndo: _propTypes2.default.func.isRequired,
  onRedo: _propTypes2.default.func.isRequired,
  onExport: _propTypes2.default.func.isRequired,
  denormalize: _propTypes2.default.func.isRequired
};

exports.default = FAB;