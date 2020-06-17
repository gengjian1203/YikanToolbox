import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import './index.scss'

export default class Loading extends Component {
  config = { }

  state = { }

  //////////////////////////////////////////////////
  // 生命周期
  //////////////////////////////////////////////////
  // onLoad之前
  componentWillMount () { }

  // onLoad之后
  componentDidMount () { 
    console.log('Loading componentDidMount.');
    const strUrl = `/pages/Main/index`;
    Taro.reLaunch({
      url: strUrl,
    })
  }

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
