import { createStore } from 'redux'
import throttle from 'lodash/throttle'
import app from './reducers/app'
import { loadState, saveState } from './localStorage'

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    app,
    persistedState
  );

  store.subscribe(throttle(() => {
    saveState({
      clicks: store.getState().clicks // Explicit list
    });
  }, 1000 ));

  return store;
}
export default configureStore;
