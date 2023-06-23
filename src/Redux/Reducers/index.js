import { combineReducers } from 'redux';
import ClientDetails from './ClientReducer';
import MasterDataReducer from './MasterDataReducer';

export default combineReducers({
  ClientDetails,
  MasterDataReducer
});
