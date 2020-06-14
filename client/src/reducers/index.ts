import { combineReducers } from 'redux';
import systemInfo from './systemInfo';
import appInfo from './appInfo';

export default combineReducers ({
  appInfo,
  systemInfo
});