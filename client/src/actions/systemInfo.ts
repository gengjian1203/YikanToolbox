import { SET_SYSTEM } from '@/constants/systemInfo';

export function setSystemInfo (objSystemInfo: object) {
  return {
    type: SET_SYSTEM,
    objSystemInfo: objSystemInfo
  }
}

export default {
  setSystemInfo,
  
}