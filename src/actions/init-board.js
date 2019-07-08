import { GOL_INIT } from './types';

export default function initBoard(width, height) {
  const getNeighbors = (x, y) => {
    const nxBounds = { min: x - 1, max: x + 1 };
    const nyBounds = { min: y - 1, max: y + 1 };

    const positions = [];

    for (let nx = nxBounds.min; nx <= nxBounds.max; nx += 1) {
      for (let ny = nyBounds.min; ny <= nyBounds.max; ny += 1) {
        if (nx >= 0 && nx < width) {
          if (ny >= 0 && ny < height) {
            positions.push({ x: nx, y: ny });
          }
        }
      }
    }

    return positions.filter(pos => pos.x !== x || pos.y !== y);
  };

  return (dispatch, getState, { random }) => {
    const state = [];

    for (let x = 0; x < width; x += 1) {
      state.push([]);

      for (let y = 0; y < height; y += 1) {
        const alive = !!random(0, 1);
        state[x].push({
          alive,
          neighbors: getNeighbors(x, y, width, height),
          age: alive ? 0 : false
        });
      }
    }

    dispatch({
      type: GOL_INIT,
      payload: state
    });
  };
}
