import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtAvatar } from 'taro-ui';
import { WithShare } from '@/kits/decorator/index';

import './index.scss';

// @WithShare()
export default class AvatarModule extends Component {
  static options = {
    addGlobalClass: true
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  constructor() { }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 点击头像，拉起登录授权
  handleAvatarClick () {
    console.log('handleAvatarClick');
  }

  render () {
    return (
      <View 
        className='avatar-module-wrap'
        onClick={this.handleAvatarClick.bind(this)}
      >
        {/* 头像 */}
        <AtAvatar
          className='content-avatar'
          size='large'
          circle={true}
          image=''
          text='头像'
        />
        {/* 昵称 */}
        <View className='content-name'>
          {'请点击头像进行登录'}
        </View>
        
        {/* 浮动菜单按钮 */}
        <View className='float-menu iconfont icon-home'>
        </View>
      </View>
    )
  }
}
