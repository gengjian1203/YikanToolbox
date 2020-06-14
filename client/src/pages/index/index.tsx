import Taro, { Component, useCallback } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { useDispatch } from '@tarojs/redux';
import { SET_SYSTEM } from '@/constants/systemInfo';
import { SET_MAIN_PATH } from '@/constants/appInfo';

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 初始化小程序相关
  initMiniApp () {
    const dispatch = useDispatch();
    const setSystemInfo = useCallback(
      (data) => {
        dispatch({
          type: SET_SYSTEM,
          data: data
        })
      },
      [dispatch]
    );
    const setAppInfo = useCallback(
      (type, data) => {
        dispatch({
          type,
          data
        })
      },
      [dispatch]
    );

    // 获取系统信息
    Taro.getSystemInfo({
      success: (res) => {
        console.log('Main getSystemInfo', res);
        setSystemInfo(res);
      },
      fail: (err) => {
        console.error('Main getSystemInfo', err);
      }
    });  
    // 设置小程序全局配置字段
    setAppInfo(SET_MAIN_PATH, '/pages/Main/index');
  }

  render () {
    this.initMiniApp();

    return (
      <View className='index'>
        
      </View>
    )
  }
}
