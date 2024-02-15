import { combineReducers} from "@reduxjs/toolkit";
import crudReducer from './crudSlice';

const rootReducer = combineReducers({
    allTasks: crudReducer
})

export default rootReducer;