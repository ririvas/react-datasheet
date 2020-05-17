import React from 'react'

import DataCell from './DataCell'


export default class InternalCellRenderer extends React.Component {

  shouldComponentUpdate( nextProps ) {
    const { row, col, cell, equalityFn } = this.props
    const { forceEdit, editValue } = this.props
    const { attributesRenderer, cellRenderer, valueRenderer, dataRenderer, valueViewer, dataEditor } = this.props
    const { selected, editing, clearing } = this.props;

    
    const { onMouseDown, onMouseOver, onDoubleClick, onContextMenu, onChange, onRevert } = this.props
    const { onNavigate, onKey, onEdit } = this.props 

    if (equalityFn !== nextProps.equalityFn) { return true }
    const cellEqualityFn = equalityFn ? equalityFn : (a, b) => a === b;
    if (!cellEqualityFn(cell, nextProps.cell)) {
      return true
    }

    if (row !== nextProps.row) { return true }
    if (col !== nextProps.col) { return true }
    if (forceEdit !== nextProps.forceEdit) { return true }
    if (editValue !== nextProps.editValue) { return true }

    if (attributesRenderer !== nextProps.attributesRenderer) { return true }
    if (cellRenderer !== nextProps.cellRenderer) { return true }
    if (valueRenderer !== nextProps.valueRenderer) { return true }
    if (dataRenderer !== nextProps.dataRenderer) { return true }
    if (valueViewer !== nextProps.valueViewer) { return true }
    if (dataEditor !== nextProps.dataEditor) { return true }

    if (selected !== nextProps.selected) { return true }
    if (editing !== nextProps.editing) { return true }
    if (clearing !== nextProps.clearing) { return true }

    
    if (onMouseDown !== nextProps.onMouseDown) { return true }
    if (onMouseOver !== nextProps.onMouseOver) { return true }
    if (onDoubleClick !== nextProps.onDoubleClick) { return true }
    if (onContextMenu !== nextProps.onContextMenu) { return true }
    if (onChange !== nextProps.onChange) { return true }
    if (onRevert !== nextProps.onRevert) { return true }
    if (onNavigate !== nextProps.onNavigate) { return true }
    if (onKey !== nextProps.onKey) { return true }
    if (onEdit !== nextProps.onEdit) { return true }

    return false
  }

  render() {
    const { row, col, cell } = this.props
    const { forceEdit, editValue } = this.props
    const { onMouseDown, onMouseOver, onDoubleClick, onContextMenu, onChange, onRevert } = this.props
    const { onNavigate, onKey, onEdit } = this.props 
    const { attributesRenderer, cellRenderer, valueRenderer, dataRenderer, valueViewer, dataEditor } = this.props
    const { selected, editing, clearing } = this.props;

    return (
      <DataCell
        key={cell.key ? cell.key : `${row}-${col}`}
        row={row}
        col={col}
        cell={cell}
        forceEdit={forceEdit}
        onMouseDown={onMouseDown}
        onMouseOver={onMouseOver}
        onDoubleClick={onDoubleClick}
        onContextMenu={onContextMenu}
        onChange={onChange}
        onRevert={onRevert}
        onNavigate={onNavigate}
        onKey={onKey}
        selected={selected}
        editing={editing}
        clearing={clearing}
        attributesRenderer={attributesRenderer}
        cellRenderer={cellRenderer}
        valueRenderer={valueRenderer}
        dataRenderer={dataRenderer}
        valueViewer={valueViewer}
        dataEditor={dataEditor}
        editValue={editValue}
        onEdit={onEdit}
      />
    )
  }
}

