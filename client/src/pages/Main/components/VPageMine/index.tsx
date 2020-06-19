import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

import AvatarModule from './components/AvatarModule/index';
import KitsModule from './components/KitsModule/index';
import AdminModule from './components/AdminModule/index';

import './index.scss'

export default class VPageHome extends Component {
  static defaultProps = {
    setShowLoginDialog: () => {}
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  constructor() { }

  componentWillMount () { 
    console.log('VPageMine WillMount.');
  }

  componentDidMount () { 
    console.log('VPageMine DidMount.');
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='home-wrap'>        
        {/* 内容 */}
        <View>
          {/* 头像模块 */}
          <AvatarModule/>
          {/* 工具模块 */}
          <KitsModule/>
          {/* 管理模块 */}
          <AdminModule/>
        </View>
      </View>
    )
  }
}
