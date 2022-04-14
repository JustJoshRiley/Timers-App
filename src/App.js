import './App.css';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import throttle from 'lodash/throttle'
import reducers from './reducers';
import { update } from './actions';
import { loadState, saveState } from './utils';

import NewTimer from './components/NewTimer';
import ListTimers from './ListTimers';


const persistedState = loadState()
const store = createStore(reducers, persistedState)
store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000));


let lastUpdateTime = Date.now()
setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 50);



function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Timers App</h1>
        <NewTimer/>
        <ListTimers/>
      </div>
    </Provider>
  );
}

export default App;
