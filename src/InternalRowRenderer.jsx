import React from 'react'

import DataCell from './DataCell'


const InternalRowRenderer = props => {

  const { row, cells } = props
  const { forceEdit, editValue } = props
  const { onMouseDown, onMouseOver, onDoubleClick, onContextMenu, onChange, onRevert } = props
  const { handleKeyboardCellMovement, handleKey, handleEdit } = props // const { handleKeyboardCellMovement, handleKey, handleEdit, isSelected, isClearing, isEditing  } = props
  const { attributesRenderer, cellRenderer, valueRenderer, dataRenderer, valueViewer, dataEditor } = props
  const { editI, editJ, clearingI, clearingJ, startI, startJ, endI, endJ } = props
  const { rowRenderer: RowRenderer, keyFn } = props

  const isEditing = (i, j) => editI === i && editJ === j
  const isClearing = (i, j) => clearingI === i && clearingJ == j
  const isSelected = (i, j) => {
    const posX = (j >= startJ && j <= endJ)
    const negX = (j <= startJ && j >= endJ)
    const posY = (i >= startI && i <= endI)
    const negY = (i <= startI && i >= endI)

    return (posX && posY) ||
      (negX && posY) ||
      (negX && negY) ||
      (posX && negY)
  }

  const i = row

  return (
    <RowRenderer key={keyFn ? keyFn(i) : i} row={row} cells={cells}>
      {
        cells.map((cell, j) => {
          return (
            <DataCell
              key={cell.key ? cell.key : `${i}-${j}`}
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
              selected={isSelected(i, j)}
              editing={isEditing(i, j)}
              clearing={isClearing(i, j)}
              attributesRenderer={attributesRenderer}
              cellRenderer={cellRenderer}
              valueRenderer={valueRenderer}
              dataRenderer={dataRenderer}
              valueViewer={valueViewer}
              dataEditor={dataEditor}
              editValue={editValue}
              {... isEditing(i, j) ? {
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

export default React.memo(InternalRowRenderer)


// export default class InternalRowRenderer extends React.Component {

//   isEditing = (i, j) => this.props.editI === i && this.props.editJ === j
//   isClearing = (i, j) => this.props.clearingI === i && this.props.clearingJ == j
//   isSelected = (i, j) => {
//     const { startI, startJ, endI, endJ } = this.props
//     const posX = (j >= startJ && j <= endJ)
//     const negX = (j <= startJ && j >= endJ)
//     const posY = (i >= startI && i <= endI)
//     const negY = (i <= startI && i >= endI)

//     return (posX && posY) ||
//       (negX && posY) ||
//       (negX && negY) ||
//       (posX && negY)
//   }

//   shouldComponentUpdate( nextProps ) {
//     const { row, cells } = this.props
//     const { forceEdit, editValue } = this.props
//     const { attributesRenderer, cellRenderer, valueRenderer, dataRenderer, valueViewer, dataEditor } = this.props
//     const { editI, editJ, clearingI, clearingJ, startI, startJ, endI, endJ } = this.props
//     const { rowRenderer, keyFn } = this.props

//     if (cells.length !== nextProps.cells.length) { return true }
//     if (cells.some((cell, ii) => nextProps.cells[ii] !== cell)) {
//       return true
//     }

//     if (row !== nextProps.row) { return true }
//     if (forceEdit !== nextProps.forceEdit) { return true }
//     if (editValue !== nextProps.editValue) { return true }

//     if (attributesRenderer !== nextProps.attributesRenderer) { return true }
//     if (cellRenderer !== nextProps.cellRenderer) { return true }
//     if (valueRenderer !== nextProps.valueRenderer) { return true }
//     if (dataRenderer !== nextProps.dataRenderer) { return true }
//     if (valueViewer !== nextProps.valueViewer) { return true }
//     if (dataEditor !== nextProps.dataEditor) { return true }

//     if (rowRenderer !== nextProps.rowRenderer) { return true }
//     if (keyFn !== nextProps.keyFn) { return true }

//     if (editI !== nextProps.editI || editJ !== nextProps.editJ) { return true }
//     if (clearingI !== nextProps.clearingI || clearingJ !== nextProps.clearingJ) { return true }
//     if (startI !== nextProps.startI || startJ !== nextProps.startJ) { return true }
//     if (endI !== nextProps.endI || endJ !== nextProps.endJ) { return true }

//     return false
//   }

//   render() {
//     const { row, cells } = this.props
//     const { forceEdit, editValue } = this.props
//     const { onMouseDown, onMouseOver, onDoubleClick, onContextMenu, onChange, onRevert } = this.props
//     const { handleKeyboardCellMovement, handleKey, handleEdit } = this.props 
//     const { attributesRenderer, cellRenderer, valueRenderer, dataRenderer, valueViewer, dataEditor } = this.props
//     const { rowRenderer: RowRenderer, keyFn } = this.props

//     const i = row

//     return (
//       <RowRenderer key={keyFn ? keyFn(i) : i} row={row} cells={cells}>
//         {
//           cells.map((cell, j) => {
//             return (
//               <DataCell
//                 key={cell.key ? cell.key : `${i}-${j}`}
//                 row={i}
//                 col={j}
//                 cell={cell}
//                 forceEdit={forceEdit}
//                 onMouseDown={onMouseDown}
//                 onMouseOver={onMouseOver}
//                 onDoubleClick={onDoubleClick}
//                 onContextMenu={onContextMenu}
//                 onChange={onChange}
//                 onRevert={onRevert}
//                 onNavigate={handleKeyboardCellMovement}
//                 onKey={handleKey}
//                 selected={this.isSelected(i, j)}
//                 editing={this.isEditing(i, j)}
//                 clearing={this.isClearing(i, j)}
//                 attributesRenderer={attributesRenderer}
//                 cellRenderer={cellRenderer}
//                 valueRenderer={valueRenderer}
//                 dataRenderer={dataRenderer}
//                 valueViewer={valueViewer}
//                 dataEditor={dataEditor}
//                 editValue={editValue}
//                 {... this.isEditing(i, j) ? {
//                 onEdit: handleEdit
//                 }
//                 : {}
//                 }
//               />
//             )
//           })
//           }
//       </RowRenderer>
//     )
//   }
// }

