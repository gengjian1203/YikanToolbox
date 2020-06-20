import {
  SET_MAIN_PAGE_SELECT
} from '@/constants/MainPageInfo';

const INITIVAL_STATE = {
  nSelectIndex: 0,
}

export default function MainPageInfo (state = INITIVAL_STATE, action) {
  switch (action.type) {
    case SET_MAIN_PAGE_SELECT:
      return {
        ...state,
        nSelectIndex: action.nMainPageSelect
      }
    default:
      return {
        ...state
      }
  }
}