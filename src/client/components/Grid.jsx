import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ rows, cols, cellWidth, cellHeight }) => {
  const cells = [];

  for (let x = 0; x < cols; x += 1) {
    for (let y = 0; y < rows; y += 1) {
      cells.push(
        <rect
          key={`${x}:${y}`}
          x={x * cellWidth}
          y={y * cellHeight}
          width={cellWidth}
          height={cellHeight}
        />
      );
    }
  }

  return <g stroke="#ccc">{cells}</g>;
};

Grid.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  cellWidth: PropTypes.number.isRequired,
  cellHeight: PropTypes.number.isRequired
};

export default Grid;
