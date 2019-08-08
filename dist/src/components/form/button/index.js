"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Button functional component.
 *
 * @param {string}  label     Button label
 * @param {string}  id        Button ID
 * @param {Array}   classes   Button classes
 * @param {func}    onChange  onChange function
 * @param {string}  icon      Icon class
 * @param {boolean} disabled  Disabled or not
 * @return {*} Button component
 * 
 * @constructor
 */
function SUIButton(_ref) {
  var label = _ref.label,
      id = _ref.id,
      classes = _ref.classes,
      onClick = _ref.onClick,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? false : _ref$icon,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      props = _objectWithoutProperties(_ref, ["label", "id", "classes", "onClick", "icon", "disabled"]);

  var combinedClasses = (0, _classnames.default)('sui-button', classes);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("button", {
    type: "button",
    id: id,
    className: combinedClasses,
    onClick: onClick,
    disabled: disabled
  }, icon && _react.default.createElement("i", {
    className: "sui-icon-".concat(icon),
    "aria-hidden": "true"
  }), label));
}

SUIButton.propTypes = {
  classes: _propTypes.default.array,
  icon: _propTypes.default.string,
  id: _propTypes.default.string,
  onClick: _propTypes.default.func,
  label: _propTypes.default.string
};
var _default = SUIButton;
exports.default = _default;

//# sourceMappingURL=index.js.map