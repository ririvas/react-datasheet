'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DataCell = require('./DataCell');

var _DataCell2 = _interopRequireDefault(_DataCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InternalCellRenderer = function (_React$Component) {
    _inherits(InternalCellRenderer, _React$Component);

    function InternalCellRenderer() {
        _classCallCheck(this, InternalCellRenderer);

        return _possibleConstructorReturn(this, (InternalCellRenderer.__proto__ || Object.getPrototypeOf(InternalCellRenderer)).apply(this, arguments));
    }

    _createClass(InternalCellRenderer, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            var _props = this.props,
                row = _props.row,
                col = _props.col,
                cell = _props.cell,
                equalityFn = _props.equalityFn;
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
                selected = _props4.selected,
                editing = _props4.editing,
                clearing = _props4.clearing;
            var _props5 = this.props,
                onMouseDown = _props5.onMouseDown,
                onMouseOver = _props5.onMouseOver,
                onDoubleClick = _props5.onDoubleClick,
                onContextMenu = _props5.onContextMenu,
                onChange = _props5.onChange,
                onRevert = _props5.onRevert;
            var _props6 = this.props,
                onNavigate = _props6.onNavigate,
                onKey = _props6.onKey,
                onEdit = _props6.onEdit;


            if (equalityFn !== nextProps.equalityFn) {
                return true;
            }
            var cellEqualityFn = equalityFn ? equalityFn : function (a, b) {
                return a === b;
            };
            if (!cellEqualityFn(cell, nextProps.cell)) {
                return true;
            }

            if (row !== nextProps.row) {
                return true;
            }
            if (col !== nextProps.col) {
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

            if (selected !== nextProps.selected) {
                return true;
            }
            if (editing !== nextProps.editing) {
                return true;
            }
            if (clearing !== nextProps.clearing) {
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
            if (onNavigate !== nextProps.onNavigate) {
                return true;
            }
            if (onKey !== nextProps.onKey) {
                return true;
            }
            if (onEdit !== nextProps.onEdit) {
                return true;
            }

            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props7 = this.props,
                row = _props7.row,
                col = _props7.col,
                cell = _props7.cell;
            var _props8 = this.props,
                forceEdit = _props8.forceEdit,
                editValue = _props8.editValue;
            var _props9 = this.props,
                onMouseDown = _props9.onMouseDown,
                onMouseOver = _props9.onMouseOver,
                onDoubleClick = _props9.onDoubleClick,
                onContextMenu = _props9.onContextMenu,
                onChange = _props9.onChange,
                onRevert = _props9.onRevert;
            var _props10 = this.props,
                onNavigate = _props10.onNavigate,
                onKey = _props10.onKey,
                onEdit = _props10.onEdit;
            var _props11 = this.props,
                attributesRenderer = _props11.attributesRenderer,
                cellRenderer = _props11.cellRenderer,
                valueRenderer = _props11.valueRenderer,
                dataRenderer = _props11.dataRenderer,
                valueViewer = _props11.valueViewer,
                dataEditor = _props11.dataEditor;
            var _props12 = this.props,
                selected = _props12.selected,
                editing = _props12.editing,
                clearing = _props12.clearing;


            return _react2.default.createElement(_DataCell2.default, {
                key: cell.key ? cell.key : row + '-' + col,
                row: row,
                col: col,
                cell: cell,
                forceEdit: forceEdit,
                onMouseDown: onMouseDown,
                onMouseOver: onMouseOver,
                onDoubleClick: onDoubleClick,
                onContextMenu: onContextMenu,
                onChange: onChange,
                onRevert: onRevert,
                onNavigate: onNavigate,
                onKey: onKey,
                selected: selected,
                editing: editing,
                clearing: clearing,
                attributesRenderer: attributesRenderer,
                cellRenderer: cellRenderer,
                valueRenderer: valueRenderer,
                dataRenderer: dataRenderer,
                valueViewer: valueViewer,
                dataEditor: dataEditor,
                editValue: editValue,
                onEdit: onEdit
            });
        }
    }]);

    return InternalCellRenderer;
}(_react2.default.Component);

exports.default = InternalCellRenderer;