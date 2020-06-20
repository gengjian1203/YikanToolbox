import {
  SET_MAIN_PAGE_SELECT
} from '@/constants/MainPageInfo';

export function setMainPageSelect (nSelectIndex) {
  return {
    type: SET_MAIN_PAGE_SELECT,
    nMainPageSelect: nSelectIndex
  }
}

export default {
  setMainPageSelect,
}