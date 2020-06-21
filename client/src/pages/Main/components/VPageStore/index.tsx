import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class VPageStore extends Component<any, any> {
  static options = {
    addGlobalClass: true
  }
  
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
    console.log('VPageStore WillMount.');
  }

  componentDidMount () { 
    console.log('VPageStore DidMount.');
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleActivityClick () {
    console.log('handleActivityClick');
    Taro.navigateTo({
      url: '/pages/Activity/ActivityDetail/index?param=hellodetail'
    })
  }

  render () {
    return (
      <View className='store-wrap'>
        {/* 内容 */}
        <View>
          This is Store page......
          <View 
            onClick={this.handleActivityClick.bind(this)}
          >
            黄瓜拼团
          </View>
          <View 
            onClick={this.handleActivityClick.bind(this)}
          >
            冬瓜拼团
          </View>
          <View 
            onClick={this.handleActivityClick.bind(this)}
          >
            南瓜拼团
          </View>
        </View>
      </View>
    )
  }
}
