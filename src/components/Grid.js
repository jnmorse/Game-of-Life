import React from 'react';

const Grid = ({ rows, cols, cellWidth, cellHeight}) => {
  const cells = [];
  
  for(let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
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
  
  return(
    <g stroke="#ccc">
      {cells}
    </g>
  );
};

export default Grid;