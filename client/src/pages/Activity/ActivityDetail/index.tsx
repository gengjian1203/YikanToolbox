import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

import NavigationHeader from '@/components/NavigationHeader/index';

export default class ActivityDetail extends Component {
  config = {
    // 支持下拉刷新
    enablePullDownRefresh: true,
    // 不支持右划返回
    disableSwipeBack: true,
    // 上拉刷新阈值
    onReachBottomDistance: 50,
  }

  state = {
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */

  //////////////////////////////////////////////////
  // 生命周期
  //////////////////////////////////////////////////

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 下拉刷新
  onPullDownRefresh () { }

  // 触底刷新
  onReachBottom () { }

  // 被动分享生命周期
  onShareAppMessage (res) { }

  //////////////////////////////////////////////////
  // 自定义函数
  //////////////////////////////////////////////////

  // 
  render () {
    return (
      <View className='main-wrap'>
        {/* 头部导航 */}
        <NavigationHeader 
          isShowIcon={true}
          strTitle='拼团详情'
        />
        {/* 页面内容 */}
        <View>
          我是拼团详情
        </View>
      </View>
    )
  }
}
