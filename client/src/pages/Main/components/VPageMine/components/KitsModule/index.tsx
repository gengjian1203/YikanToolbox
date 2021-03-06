import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtGrid } from 'taro-ui';
import TitleBar from '@/components/TitleBar/index';

import { 
  CheckLogin,
  Throttle 
} from '@/kits/decorator/index';

import './index.scss';

type PageStateProps = { };

type PageDispatchProps = { };

type PageOwnProps = { };

type PageState = { };

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

type IState = PageState;

@Throttle(['handleKitsItemClick'], 1000)
@CheckLogin(['handleKitsItemClick'])
export default class AvatarModule extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  }

  state = {
    // 存储工具列表信息
    arrListData: [{
      value: '工具1',
      iconInfo: {
        value: '',
        color: 'red',
        prefixClass: 'iconfont icon-home',
        size: 50,
      }
    }, {
      value: '工具2',
      iconInfo: {
        value: '',
        color: 'yellow',
        prefixClass: 'iconfont icon-home',
        size: 50,
      }
    }, {
      value: '工具3',
      iconInfo: {
        value: '',
        color: 'orange',
        prefixClass: 'iconfont icon-home',
        size: 50,
      }
    }, {
      value: '工具4',
      iconInfo: {
        value: '',
        color: 'green',
        prefixClass: 'iconfont icon-home',
        size: 50,
      }
    }, {
      value: '工具5',
      iconInfo: {
        value: '',
        color: 'glod',
        prefixClass: 'iconfont icon-home',
        size: 50,
      }
    }]
  
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
  handleKitsItemClick(item: object, index: number) {
    console.log('handleKitsItemClick', item, index);
  }

  render () {
    const {
      arrListData
    } = this.state;

    return (
      <View className='kits-module-wrap'>
        {/* 标题条 */}
        <TitleBar
          strTitle='常用工具'
        />
        {/* 内容 */}
        <AtGrid
          mode='square'
          hasBorder={true}
          columnNum={3}
          data={arrListData}
          onClick={this.handleKitsItemClick.bind(this)}
        />
      </View>
    )
  }
}
