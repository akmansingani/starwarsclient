import { combineReducers } from 'redux';
import featureReducer from "./featureReducer";


export default combineReducers({
  feature: featureReducer
});