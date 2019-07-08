import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import PropTypes from 'prop-types';

import * as actions from '../../actions';
import './index.css';

class GameOfLife extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    cols: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired,
    initBoard: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    gol: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          alive: PropTypes.bool.isRequired,
          age: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
            .isRequired
        })
      )
    ).isRequired
  };

  componentWillMount() {
    const { cols, rows, initBoard } = this.props;

    initBoard(cols, rows);
  }

  componentDidMount() {
    this.startRunning();
  }

  startRunning() {
    const { nextStep } = this.props;

    this.run = setInterval(() => nextStep(), 100);
  }

  renderLiveCells() {
    const { cols, rows, gol } = this.props;

    const cellWidth = 720 / cols;
    const cellHeight = 720 / rows;

    return map(gol, (col, x) =>
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

        return <rect key={`${x}:${y}`} {...props} />;
      })
    );
  }

  render() {
    return (
      <div id="board">
        <svg width={720} height={720}>
          <g fill="transparent" strokeWidth={1} stroke="#ccc">
            {this.renderLiveCells()}
          </g>

          <g strokeWidth={1} fill="transparent">
            <rect x={0} y={0} width={720} height={720} stroke="#000" />
          </g>
        </svg>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { gol: state.gol };
}

export default connect(
  mapStateToProps,
  actions
)(GameOfLife);
