import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import './index.scss';

export default class TitleBar extends Component<any, any> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  constructor() { }

  static defaultProps = {
    strTitle: ''
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {
      strTitle = ''
    } = this.props;
    return (
      <View className='title-bar-wrap'>
        {/* 标志 */}
        <View className='title-sign'>
          
        </View>
        {/* 标题 */}
        <View className='title-text'>
          {strTitle}
        </View>
      </View>
    )
  }
}
