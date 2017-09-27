import { GOL_STEP } from './types';

export default function nextStep(event) {
  return (dispatch, getState, { cloneDeep, map }) => {
    const gol = cloneDeep(getState().gol);
    
    const nextState = map(gol, (col, x) => {
      return map(col, (cell, y) => {
        const liveNeighbors = gol[x][y].neighbors.filter(
          coords => gol[coords.x][coords.y].alive
        );
        
        const neighborCount = liveNeighbors.length;
        
        if (cell.alive) {
          if (neighborCount < 2) {
            return { ...cell, alive: false, age: null}
          } else if (neighborCount === 2 || neighborCount === 3) {
            return { ...cell, age: cell.age + 1 }
          } else {
            return { ...cell, alive: false, age: null };
          }
        } else {
          if (neighborCount === 3) {
            return { ...cell, alive: true, age: 0 }
          }
          
          return { ...cell };
        }
      });
    });
    
    dispatch({
      type: GOL_STEP,
      payload: nextState
    });
  };
}