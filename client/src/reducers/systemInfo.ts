import { 
  SET_SYSTEM
} from '@/constants/systemInfo';

const INITIAL_STATE = { };

export default function systemInfo (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SYSTEM: 
      return {
        ...state,
        ...action.data
      }
    default:
      return {
        ...state
      }
  }
}