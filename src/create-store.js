import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cloneDeep, map, random } from 'lodash';

import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(
    thunk.withExtraArgument({
      cloneDeep,
      map,
      random
    })
  )
);

export default store;