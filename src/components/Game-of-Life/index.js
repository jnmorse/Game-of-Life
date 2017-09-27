import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';

import * as actions from '../../actions';
import './index.css';

class GameOfLife extends Component {
  componentWillMount() {
    this.props.initBoard(this.props.cols, this.props.rows);
  }
  
  componentDidMount() {
    this.startRunning()
  }
  
  startRunning() {
    this._run = setInterval(() => this.props.nextStep(), 100);
  }
  
  renderLiveCells() {
    const cellWidth = 720 / this.props.cols;
    const cellHeight = 720 / this.props.rows;;
    
    return map(this.props.gol, (col, x) => (
      map(col, (cell, y) => {
        const props = {
          width: cellWidth,
          height: cellHeight,
          x: x * cellWidth,
          y: y * cellHeight
        };
        
        if (cell.alive) {
          const color = cell.age > 0 ? 'green' : '#0000AC';
          props.fill = color;
        }
        
        return(<rect key={`${x}:${y}`} {...props} />);
      })
    ));
  }
  
  render() {
    return(
      <div id="board">
        <svg
          width={720}
          height={720}
        >
          <g fill="transparent" strokeWidth={1} stroke="#ccc">
            {this.renderLiveCells()}
          </g>
          
          <g strokeWidth={1} fill="transparent">
            <rect
              x={0}
              y={0}
              width={720}
              height={720}
              stroke="#000"
            />
          </g>
        </svg>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { gol: state.gol }
}

export default connect(mapStateToProps, actions)(GameOfLife);
