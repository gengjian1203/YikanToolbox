import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import classNames from 'classnames'
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

@Throttle(['handleAvatarClick'], 2000)
@CheckLogin(['handleAvatarClick', 'handleCalenderClick'])
export default class AvatarModule extends Component<IProps, IState> {
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
  handleAvatarClick (e) {
    e.stopPropagation();
    console.log('handleAvatarClick');
  }

  // 点击日历，实现打卡
  handleCalenderClick (e) {
    e.stopPropagation();
    console.log('handleCalenderClick');
  }

  render () {
    return (
      <View 
        className='avatar-module-wrap'
        onClick={this.handleAvatarClick.bind(this)}
      >
        {/* 头像 */}
        {
          true ? <View className='content-avatar iconfont icon-avatar'></View>
               : <Image className='content-avatar' mode='widthFix' src='https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83er6JJibWSWCgr0Gh9aNEoArt77vjb875bkIfEkAic8UroEW8lgp7vfvZB7a9DW8OwoIB5oicngaNf7icg/132'/>
        }
        {/* 昵称 */}
        <View className='content-name'>
          {'请点击头像进行登录'}
        </View>
        
        {/* 打卡日历按钮 */}
        <View 
          className={classNames('float-calendar', 
                                'iconfont', 
                                'icon-calender', 
                                true ? 'red-tip' : '')}
          onClick={this.handleCalenderClick.bind(this)}
        >
        </View>
      </View>
    )
  }
}
