import {
  SET_MAIN_PATH
} from '@/constants/appInfo'

const INITIAL_STATE = { };

export default function appInfo (state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_MAIN_PATH:
      const objResult = state;
      objResult.strPathMain = action.data;
      return objResult;
    default: 
      return {
        ...state
      }
  }
}