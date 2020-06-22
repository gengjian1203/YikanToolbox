import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import NavigationHeader from '@/components/NavigationHeader/index';
import LoginDialog from '@/components/LoginDialog/index';

import { CheckLogin } from '@/kits/decorator/index';

import './index.scss'

@CheckLogin(['handleBtnTestClick'])
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
    m_isShowLoginDlg: false,                    // 是否展示登录弹窗
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

  componentWillUnmount () { 
    // 注销事件
    this.UnregisterEvents();
  }

  componentDidShow () { 
    // 注册事件
    this.RegisterEvents();
  }

  componentDidHide () { 
    // 注销事件
    this.UnregisterEvents();
  }

  // 下拉刷新
  onPullDownRefresh () { }

  // 触底刷新
  onReachBottom () { }

  // 被动分享生命周期
  onShareAppMessage (res) { }

  //////////////////////////////////////////////////
  // 自定义函数
  //////////////////////////////////////////////////
  // 注册事件
  RegisterEvents () {
    // 登录交互事件
    Taro.eventCenter.on('show-login-dialog', () => {
      this.setShowLoginDialog(true);
    });
  }

  // 注销事件
  UnregisterEvents () {
    // 登录交互事件
    Taro.eventCenter.off('show-login-dialog');
  }
  
  // 设置登录弹窗展示/隐藏
  setShowLoginDialog (isShow: boolean) {
    console.log('setShowLoginDialog', isShow);
    this.setState({
      m_isShowLoginDlg: isShow
    });
  }

  // 点击按钮事件
  handleBtnTestClick () {
    console.log('ActivityDetail handleBtnTestClick');
  }

  // 
  render () {
    const {
      m_isShowLoginDlg,         // 是否展示登录弹窗
    } = this.state;

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
        <Button
          onClick={this.handleBtnTestClick.bind(this)}
        >
          点击一下触发登录验证
        </Button>
        {/* 弹出内容 */}
        { 
          m_isShowLoginDlg &&
          <LoginDialog
            setShowLoginDialog={this.setShowLoginDialog.bind(this)}
          />
        }
      </View>
    )
  }
}
