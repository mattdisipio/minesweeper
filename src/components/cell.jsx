import React, { Component } from 'react'

class Cell extends Component {

  onClick(e) {
    if (e.shiftKey || e.ctrlKey || e.altKey) {
      return this.props.markCell(this.props.x, this.props.y)
    } else {
      return this.props.clickCell(this.props.x, this.props.y)
    }
  }

  cellText() {
    return this.props.isMine ? 'X' : this.props.numAdjacent
  }

  cellBackgroundColor() {
    if (this.props.isFlagged || (this.props.gameState === 'won' && this.props.isMine)) {
      return  '#ffb2b2'
    } else if (this.props.isMine && (this.props.isExplored || this.props.showAllMines)) {
      return '#ff0000'
    } else if (this.props.isQuestion) {
      return  '#cc99ff'
    } else if (this.props.isExplored) {
      return '#bfbfbf'
    } else {
      return '#ededed'
    }
  }
  cellTextColor() {
    const textColors = {
      1: '#0004fc',
      2: '#008000',
      3: '#fc0000',
      4: '#000280',
      5: '#800101',
      6: '#00807d',
      7: '#000000',
      8: '#808080',
    }
    return textColors[this.props.numAdjacent]
  }

  render() {
    const cellStyle = {
      backgroundColor: this.cellBackgroundColor(),
      color: this.props.isMine ? '#000000' : this.cellTextColor(),
    }
    return (
      <div className="cell border" style={cellStyle} onClick={(e) => this.onClick(e)}>
        { this.props.isExplored ? <span className="cell-text">{this.cellText()}</span> : null }
      </div>
    )
  }
}

Cell.propTypes = {
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  isMine: React.PropTypes.bool.isRequired,
  isExplored: React.PropTypes.bool.isRequired,
  isFlagged: React.PropTypes.bool.isRequired,
  isQuestion: React.PropTypes.bool.isRequired,
  numAdjacent: React.PropTypes.number,
  clickCell: React.PropTypes.func.isRequired,
  markCell: React.PropTypes.func.isRequired,
  showAllMines: React.PropTypes.bool.isRequired,
  gameState: React.PropTypes.string,
}

export default Cell
