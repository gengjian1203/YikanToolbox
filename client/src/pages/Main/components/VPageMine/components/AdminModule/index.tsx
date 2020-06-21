import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';
import TitleBar from '@/components/TitleBar/index';

import './index.scss';

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

  // 点击工具项
  handleAdminItemClick() {
    console.log('handleAdminItemClick');
  }

  render () {
    return (
      <View className='kits-module-wrap'>
        {/* 标题条 */}
        <TitleBar
          strTitle='管理模块'
        />
        {/* 内容 */}
        <AtList
          hasBorder={false}
        >
          <AtListItem
            title='管理模块1'
            arrow='right'
            iconInfo={{
              value: 'iconfont icon-home',
              color: 'green',
              prefixClass: 'iconfont icon-home',
              size: 25,
            }}
            onClick={this.handleAdminItemClick.bind(this)}
          />
          <AtListItem
            title='管理模块2'
            arrow='right'
            iconInfo={{
              value: 'iconfont icon-home',
              color: 'pink',
              prefixClass: 'iconfont icon-home',
              size: 25,
            }}
            onClick={this.handleAdminItemClick.bind(this)}
          />
          <AtListItem
            title='管理模块3'
            arrow='right'
            iconInfo={{
              value: 'iconfont icon-home',
              color: 'blue',
              prefixClass: 'iconfont icon-home',
              size: 25,
            }}
            onClick={this.handleAdminItemClick.bind(this)}
          />
          <AtListItem
            title='管理模块4'
            arrow='right'
            iconInfo={{
              value: 'iconfont icon-home',
              color: 'red',
              prefixClass: 'iconfont icon-home',
              size: 25,
            }}
            onClick={this.handleAdminItemClick.bind(this)}
          />
        </AtList>
      </View>
    )
  }
}
