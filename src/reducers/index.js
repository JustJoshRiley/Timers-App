import { combineReducers } from "redux";

import timerReducer from './timerReducer'
import selectedTimerReducer from "./selectedTimerReducer";

export default combineReducers({
    timers: timerReducer,
    selectedTimer: selectedTimerReducer
});