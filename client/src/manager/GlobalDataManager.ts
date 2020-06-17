// 全局变量管理器
export default class GlobalDataManager {
  // 单例对象
  static _instance: GlobalDataManager;

  // 全局变量
  objAppInfo: object = {        // 小程序级信息
    strPathMain: '',            // 首页路由
  };
  objSystemInfo: object = {};   // 手机系统信息

  constructor() { }

  static getInstance() {
    if (!this._instance) {
      this._instance = new GlobalDataManager();
    }
    return this._instance;
  }

}