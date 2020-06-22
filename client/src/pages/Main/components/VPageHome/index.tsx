import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

type PageStateProps = { };

type PageDispatchProps = { };

type PageOwnProps = { };

type PageState = { };

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

type IState = PageState;

export default class VPageHome extends Component<IProps, IState> {
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

  componentWillMount () { 
    console.log('VPageHome WillMount.');
  }

  componentDidMount () { 
    console.log('VPageHome DidMount.');
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='home-wrap'>
        {/* 内容 */}
        <View>
          This is Home page......
        </View>
      </View>
    )
  }
}