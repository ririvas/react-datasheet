'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InternalCellRenderer = require('./InternalCellRenderer');

var _InternalCellRenderer2 = _interopRequireDefault(_InternalCellRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InternalRowRenderer = function (_React$Component) {
  _inherits(InternalRowRenderer, _React$Component);

  function InternalRowRenderer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InternalRowRenderer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InternalRowRenderer.__proto__ || Object.getPrototypeOf(InternalRowRenderer)).call.apply(_ref, [this].concat(args))), _this), _this.isEditing = function (i, j) {
      return _this.props.editI === i && _this.props.editJ === j;
    }, _this.isClearing = function (i, j) {
      return _this.props.clearingI === i && _this.props.clearingJ == j;
    }, _this.isSelected = function (i, j) {
      var _this$props = _this.props,
          startI = _this$props.startI,
          startJ = _this$props.startJ,
          endI = _this$props.endI,
          endJ = _this$props.endJ;

      var posX = j >= startJ && j <= endJ;
      var negX = j <= startJ && j >= endJ;
      var posY = i >= startI && i <= endI;
      var negY = i <= startI && i >= endI;

      return posX && posY || negX && posY || negX && negY || posX && negY;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InternalRowRenderer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _props = this.props,
          row = _props.row,
          cells = _props.cells;
      var _props2 = this.props,
          forceEdit = _props2.forceEdit,
          editValue = _props2.editValue;
      var _props3 = this.props,
          attributesRenderer = _props3.attributesRenderer,
          cellRenderer = _props3.cellRenderer,
          valueRenderer = _props3.valueRenderer,
          dataRenderer = _props3.dataRenderer,
          valueViewer = _props3.valueViewer,
          dataEditor = _props3.dataEditor;
      var _props4 = this.props,
          editI = _props4.editI,
          editJ = _props4.editJ,
          clearingI = _props4.clearingI,
          clearingJ = _props4.clearingJ,
          startI = _props4.startI,
          startJ = _props4.startJ,
          endI = _props4.endI,
          endJ = _props4.endJ;
      var _props5 = this.props,
          rowRenderer = _props5.rowRenderer,
          keyFn = _props5.keyFn,
          equalityFn = _props5.equalityFn;
      var _props6 = this.props,
          onMouseDown = _props6.onMouseDown,
          onMouseOver = _props6.onMouseOver,
          onDoubleClick = _props6.onDoubleClick,
          onContextMenu = _props6.onContextMenu,
          onChange = _props6.onChange,
          onRevert = _props6.onRevert;
      var _props7 = this.props,
          handleKeyboardCellMovement = _props7.handleKeyboardCellMovement,
          handleKey = _props7.handleKey,
          handleEdit = _props7.handleEdit;


      if (equalityFn !== nextProps.equalityFn) {
        return true;
      }
      if (cells.length !== nextProps.cells.length) {
        return true;
      }
      var cellEqualityFn = equalityFn ? equalityFn : function (a, b) {
        return a === b;
      };
      if (cells.some(function (cell, ii) {
        return !cellEqualityFn(cell, nextProps.cells[ii]);
      })) {
        return true;
      }

      if (row !== nextProps.row) {
        return true;
      }
      if (forceEdit !== nextProps.forceEdit) {
        return true;
      }
      if (editValue !== nextProps.editValue) {
        return true;
      }

      if (attributesRenderer !== nextProps.attributesRenderer) {
        return true;
      }
      if (cellRenderer !== nextProps.cellRenderer) {
        return true;
      }
      if (valueRenderer !== nextProps.valueRenderer) {
        return true;
      }
      if (dataRenderer !== nextProps.dataRenderer) {
        return true;
      }
      if (valueViewer !== nextProps.valueViewer) {
        return true;
      }
      if (dataEditor !== nextProps.dataEditor) {
        return true;
      }

      if (rowRenderer !== nextProps.rowRenderer) {
        return true;
      }
      if (keyFn !== nextProps.keyFn) {
        return true;
      }

      if (editI !== nextProps.editI || editJ !== nextProps.editJ) {
        return true;
      }
      if (clearingI !== nextProps.clearingI || clearingJ !== nextProps.clearingJ) {
        return true;
      }
      if (startI !== nextProps.startI || startJ !== nextProps.startJ) {
        return true;
      }
      if (endI !== nextProps.endI || endJ !== nextProps.endJ) {
        return true;
      }

      if (onMouseDown !== nextProps.onMouseDown) {
        return true;
      }
      if (onMouseOver !== nextProps.onMouseOver) {
        return true;
      }
      if (onDoubleClick !== nextProps.onDoubleClick) {
        return true;
      }
      if (onContextMenu !== nextProps.onContextMenu) {
        return true;
      }
      if (onChange !== nextProps.onChange) {
        return true;
      }
      if (onRevert !== nextProps.onRevert) {
        return true;
      }
      if (handleKeyboardCellMovement !== nextProps.handleKeyboardCellMovement) {
        return true;
      }
      if (handleKey !== nextProps.handleKey) {
        return true;
      }
      if (handleEdit !== nextProps.handleEdit) {
        return true;
      }

      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props8 = this.props,
          row = _props8.row,
          cells = _props8.cells;
      var _props9 = this.props,
          forceEdit = _props9.forceEdit,
          editValue = _props9.editValue;
      var _props10 = this.props,
          onMouseDown = _props10.onMouseDown,
          onMouseOver = _props10.onMouseOver,
          onDoubleClick = _props10.onDoubleClick,
          onContextMenu = _props10.onContextMenu,
          onChange = _props10.onChange,
          onRevert = _props10.onRevert;
      var _props11 = this.props,
          handleKeyboardCellMovement = _props11.handleKeyboardCellMovement,
          handleKey = _props11.handleKey,
          handleEdit = _props11.handleEdit;
      var _props12 = this.props,
          attributesRenderer = _props12.attributesRenderer,
          cellRenderer = _props12.cellRenderer,
          valueRenderer = _props12.valueRenderer,
          dataRenderer = _props12.dataRenderer,
          valueViewer = _props12.valueViewer,
          dataEditor = _props12.dataEditor;
      var _props13 = this.props,
          RowRenderer = _props13.rowRenderer,
          keyFn = _props13.keyFn;


      var i = row;

      return _react2.default.createElement(
        RowRenderer,
        { key: keyFn ? keyFn(i) : i, row: row, cells: cells },
        cells.map(function (cell, j) {
          return _react2.default.createElement(_InternalCellRenderer2.default, _extends({
            row: i,
            col: j,
            cell: cell,
            forceEdit: forceEdit,
            onMouseDown: onMouseDown,
            onMouseOver: onMouseOver,
            onDoubleClick: onDoubleClick,
            onContextMenu: onContextMenu,
            onChange: onChange,
            onRevert: onRevert,
            onNavigate: handleKeyboardCellMovement,
            onKey: handleKey,
            selected: _this2.isSelected(i, j),
            editing: _this2.isEditing(i, j),
            clearing: _this2.isClearing(i, j),
            attributesRenderer: attributesRenderer,
            cellRenderer: cellRenderer,
            valueRenderer: valueRenderer,
            dataRenderer: dataRenderer,
            valueViewer: valueViewer,
            dataEditor: dataEditor,
            editValue: _this2.isEditing(i, j) ? editValue : undefined
          }, _this2.isEditing(i, j) ? {
            onEdit: handleEdit
          } : {}));
        })
      );
    }
  }]);

  return InternalRowRenderer;
}(_react2.default.Component);

exports.default = InternalRowRenderer;