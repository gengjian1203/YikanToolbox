import { combineReducers } from 'redux';
import appInfo from './appInfo';
import MainPageInfo from './MainPageInfo';
import SystemInfo from './SystemInfo';

export default combineReducers ({
  appInfo,
  MainPageInfo,
  SystemInfo
});