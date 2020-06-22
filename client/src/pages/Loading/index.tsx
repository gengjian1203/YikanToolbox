import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import GlobalDataManager from '@/manager/GlobalDataManager';
import { router2url } from '@/kits/format/index';

import './index.scss'

const m_managerGlobalData = GlobalDataManager.getInstance();

export default class Loading extends Component {
  config = { }

  state = { }

  //////////////////////////////////////////////////
  // 生命周期
  //////////////////////////////////////////////////
  // onLoad之前
  componentWillMount () { 
    Taro.reLaunch({
      url: router2url(m_managerGlobalData.objAppInfo.strPathMain, this.$router),
    });
  }

  // onLoad之后
  componentDidMount () { }

  // onUnload
  componentWillUnmount () { }

  // onShow
  componentDidShow () { }

  // onHide
  componentDidHide () { }

  // 下拉刷新
  onPullDownRefresh () { }

  // 触底刷新
  onReachBottom () { }

  //////////////////////////////////////////////////
  // 自定义函数
  //////////////////////////////////////////////////

  // 
  render () {
    return (<View></View>)
  }
}
