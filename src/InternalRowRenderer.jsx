import React from 'react'

import InternalCellRenderer from './InternalCellRenderer';

export default class InternalRowRenderer extends React.Component {

  isEditing = (i, j) => this.props.editI === i && this.props.editJ === j
  isClearing = (i, j) => this.props.clearingI === i && this.props.clearingJ == j
  isSelected = (i, j) => {
    const { startI, startJ, endI, endJ } = this.props
    const posX = (j >= startJ && j <= endJ)
    const negX = (j <= startJ && j >= endJ)
    const posY = (i >= startI && i <= endI)
    const negY = (i <= startI && i >= endI)

    return (posX && posY) ||
      (negX && posY) ||
      (negX && negY) ||
      (posX && negY)
  }

  shouldComponentUpdate( nextProps ) {
    const { row, cells } = this.props
    const { forceEdit, editValue } = this.props
    const { attributesRenderer, cellRenderer, valueRenderer, dataRenderer, valueViewer, dataEditor } = this.props
    const { editI, editJ, clearingI, clearingJ, startI, startJ, endI, endJ } = this.props
    const { rowRenderer, keyFn, equalityFn } = this.props

    const { onMouseDown, onMouseOver, onDoubleClick, onContextMenu, onChange, onRevert } = this.props
    const { handleKeyboardCellMovement, handleKey, handleEdit } = this.props 

    if (equalityFn !== nextProps.equalityFn) { return true }
    if (cells.length !== nextProps.cells.length) { return true }
    const cellEqualityFn = equalityFn ? equalityFn : (a, b) => a === b;
    if (cells.some((cell, ii) => !cellEqualityFn(cell, nextProps.cells[ii]))) {
      return true
    }

    if (row !== nextProps.row) { return true }
    if (forceEdit !== nextProps.forceEdit) { return true }
    if (editValue !== nextProps.editValue) { return true }

    if (attributesRenderer !== nextProps.attributesRenderer) { return true }
    if (cellRenderer !== nextProps.cellRenderer) { return true }
    if (valueRenderer !== nextProps.valueRenderer) { return true }
    if (dataRenderer !== nextProps.dataRenderer) { return true }
    if (valueViewer !== nextProps.valueViewer) { return true }
    if (dataEditor !== nextProps.dataEditor) { return true }

    if (rowRenderer !== nextProps.rowRenderer) { return true }
    if (keyFn !== nextProps.keyFn) { return true }

    if (editI !== nextProps.editI || editJ !== nextProps.editJ) { return true }
    if (clearingI !== nextProps.clearingI || clearingJ !== nextProps.clearingJ) { return true }
    if (startI !== nextProps.startI || startJ !== nextProps.startJ) { return true }
    if (endI !== nextProps.endI || endJ !== nextProps.endJ) { return true }

    if (onMouseDown !== nextProps.onMouseDown) { return true }
    if (onMouseOver !== nextProps.onMouseOver) { return true }
    if (onDoubleClick !== nextProps.onDoubleClick) { return true }
    if (onContextMenu !== nextProps.onContextMenu) { return true }
    if (onChange !== nextProps.onChange) { return true }
    if (onRevert !== nextProps.onRevert) { return true }
    if (handleKeyboardCellMovement !== nextProps.handleKeyboardCellMovement) { return true }
    if (handleKey !== nextProps.handleKey) { return true }
    if (handleEdit !== nextProps.handleEdit) { return true }

    return false
  }

  render() {
    const { row, cells } = this.props
    const { forceEdit, editValue } = this.props
    const { onMouseDown, onMouseOver, onDoubleClick, onContextMenu, onChange, onRevert } = this.props
    const { handleKeyboardCellMovement, handleKey, handleEdit } = this.props 
    const { attributesRenderer, cellRenderer, valueRenderer, dataRenderer, valueViewer, dataEditor } = this.props
    const { rowRenderer: RowRenderer, keyFn } = this.props

    const i = row

    return (
      <RowRenderer key={keyFn ? keyFn(i) : i} row={row} cells={cells}>
        {
          cells.map((cell, j) => {
            return (
              <InternalCellRenderer
                row={i}
                col={j}
                cell={cell}
                forceEdit={forceEdit}
                onMouseDown={onMouseDown}
                onMouseOver={onMouseOver}
                onDoubleClick={onDoubleClick}
                onContextMenu={onContextMenu}
                onChange={onChange}
                onRevert={onRevert}
                onNavigate={handleKeyboardCellMovement}
                onKey={handleKey}
                selected={this.isSelected(i, j)}
                editing={this.isEditing(i, j)}
                clearing={this.isClearing(i, j)}
                attributesRenderer={attributesRenderer}
                cellRenderer={cellRenderer}
                valueRenderer={valueRenderer}
                dataRenderer={dataRenderer}
                valueViewer={valueViewer}
                dataEditor={dataEditor}
                editValue={this.isEditing(i, j) ? editValue : undefined}
                {... this.isEditing(i, j) ? {
                onEdit: handleEdit
                }
                : {}
                }
              />
            )
          })
          }
      </RowRenderer>
    )
  }
}

