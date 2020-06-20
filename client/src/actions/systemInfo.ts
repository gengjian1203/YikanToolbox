import { SYSTEM_INFO } from '@/constants/systemInfo';

export function setSystemInfo (objSystemInfo) {
  return {
    type: SYSTEM_INFO,
    data: objSystemInfo
  }
}

export function getSystemInfo () {
  return {
    type: SYSTEM_INFO,
    data: null
  }
}


export default {
  setSystemInfo,
  getSystemInfo
}