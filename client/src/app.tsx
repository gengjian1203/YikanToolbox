import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux';

import configStore from './store';
import Index from './pages/Main/index'

import './app.scss'

import GlobalDataManager from '@/manager/GlobalDataManager';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();
const g_globalData = GlobalDataManager.getInstance();

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/Main/index',
      'pages/index/index',
      'pages/Activity/ActivityDetail/index'
    ],
    window: {
      navigationStyle: 'custom',
    },
    cloud: true
  }

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
    // 初始化
    this.init();
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}


  // 初始化
  init () {
    this.initMiniApp();
  }

  // 初始化小程序相关
  initMiniApp () {
    // 获取系统信息
    Taro.getSystemInfo({
      success: (res) => {
        console.log('Main getSystemInfo', res);
        g_globalData.objSystemInfo = res;
      },
      fail: (err) => {
        console.error('Main getSystemInfo', err);
        g_globalData.objSystemInfo = {};
      }
    });  
    // 设置小程序全局配置字段
    g_globalData.objAppInfo.strPathMain = '/pages/Main/index';
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
      
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
