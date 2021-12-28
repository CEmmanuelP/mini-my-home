import { combineReducers } from "redux";
import dataReducer from "./redux";

const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;
