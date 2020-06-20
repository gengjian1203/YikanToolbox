import { combineReducers } from 'redux';
import appInfo from './appInfo';
import MainPageInfo from './MainPageInfo';
import systemInfo from './systemInfo';

export default combineReducers ({
  appInfo,
  MainPageInfo,
  systemInfo
});