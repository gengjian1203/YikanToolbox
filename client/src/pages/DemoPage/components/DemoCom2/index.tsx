import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

type PageStateProps = { };

type PageDispatchProps = { };

type PageOwnProps = { };

type PageState = { };

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

type IState = PageState;
export default class DemoCom2 extends Component<IProps, IState> {
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

  render () {
    return (
      <View className='demo-com-wrap'>
        {/* 内容 */}
        <View>
          This is DemoCom2......
        </View>
      </View>
    )
  }
}
