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
 * Toggle functional component.
 *
 * @param {string}  label     Toggle label
 * @param {string}  id        Toggle ID.
 * @param {Array}   classes   Toggles class.
 * @param {string}  id        Button ID.
 * @param {func}    onChange  onChange function
 * @param {boolean} disabled  Disabled or not.
 * @return {*} Toggle component.
 * @constructor
 */
function SUIToggle(_ref) {
  var label = _ref.label,
      id = _ref.id,
      classes = _ref.classes,
      checked = _ref.checked,
      onChange = _ref.onChange,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      props = _objectWithoutProperties(_ref, ["label", "id", "classes", "checked", "onChange", "disabled"]);

  var combinedClasses = (0, _classnames.default)('sui-toggle', classes);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", {
    className: combinedClasses
  }, _react.default.createElement("input", {
    type: "checkbox",
    id: id,
    onChange: onChange,
    checked: checked
  }), _react.default.createElement("span", {
    className: "sui-toggle-slider"
  })), label && _react.default.createElement("label", {
    htmlFor: id,
    className: "sui-toggle-label"
  }, label));
}

SUIToggle.propTypes = {
  classes: _propTypes.default.array,
  checked: _propTypes.default.bool,
  id: _propTypes.default.string,
  onChange: _propTypes.default.func,
  label: _propTypes.default.string
};
var _default = SUIToggle;
exports.default = _default;

//# sourceMappingURL=index.js.map