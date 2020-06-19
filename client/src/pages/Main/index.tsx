import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

import NavigationHeader from '@/components/NavigationHeader/index';
import TabbarBottom from '@/components/TabbarBottom/index';
import LoginDialog from '@/components/LoginDialog/index';
import VPageHome from './components/VPageHome/index';
import VPageMine from './components/VPageMine/index';
import VPageStore from './components/VPageStore/index';

export default class Main extends Component {
  config = {
    // 支持下拉刷新
    enablePullDownRefresh: true,
    // 不支持右划返回
    disableSwipeBack: true,
    // 上拉刷新阈值
    onReachBottomDistance: 50,
  }

  state = {
    // 常量
    m_arrVPageTitle: ['首页', '拼团', '我的'],
    // 
    m_nSelectVPage: 0,        // 渲染索引值
    m_objPageParams: {},      // 页面接收参数
    m_isShowLoginDlg: false,  // 是否展示登录弹窗
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
  // onLoad之前
  componentWillMount () { }

  // onLoad之后
  componentDidMount () { 
    this.state.m_objPageParams = this.$router.params;
    console.log('componentDidMount', this.state.m_objPageParams);
    // 渲染显示页面
    if (this.state.m_objPageParams.indexSelectVPage) {
      const nSelectVPage = parseInt(this.state.m_objPageParams.indexSelectVPage);
      this.setSelectVPage(nSelectVPage);
    }
  }

  // onUnload
  componentWillUnmount () { }

  // onShow
  componentDidShow () { 
    console.log('componentDidShow');
  }

  // onHide
  componentDidHide () { }

  // 下拉刷新
  onPullDownRefresh () { }

  // 触底刷新
  onReachBottom () { }

  // 被动分享生命周期
  onShareAppMessage (res) { }

  //////////////////////////////////////////////////
  // 自定义函数
  //////////////////////////////////////////////////
  // 修改展示页面组件索引值
  setSelectVPage (nSelectVPage) {
    this.setState({
      m_nSelectVPage: nSelectVPage
    })
  }

  // 设置登录弹窗展示/隐藏
  setShowLoginDialog (isShow: boolean) {
    console.log('setShowLoginDialog', isShow);
    this.setState({
      m_isShowLoginDlg: isShow
    });
  }

  // 测试按钮
  handleTestClick () {
    this.setShowLoginDialog(true);
  }

  // 
  render () {
    const {
      m_nSelectVPage,           // 选中的页面
      m_arrVPageTitle,          // 首页列表的页面名称
      m_isShowLoginDlg,         // 是否展示登录弹窗
    } = this.state;

    let renderVPage: any = null;
    
    switch(m_nSelectVPage) {
      case 0: {
        renderVPage = (<VPageHome setShowLoginDialog={this.setShowLoginDialog.bind(this)}/>);
        break;
      }
      case 1: {
        renderVPage = (<VPageStore setShowLoginDialog={this.setShowLoginDialog.bind(this)}/>);
        break;
      }
      case 2: {
        renderVPage = (<VPageMine setShowLoginDialog={this.setShowLoginDialog.bind(this)}/>);
        break;
      }
      default: {
        renderVPage = (<VPageHome setShowLoginDialog={this.setShowLoginDialog.bind(this)}/>);
        break;
      }
    }
    
    return (
      <View className='main-wrap'>
        {/* 头部导航 */}
        <NavigationHeader 
          isShowIcon={false}
          strTitle={m_arrVPageTitle[m_nSelectVPage]}
        />
        {/* 页面内容 */}
        <View className='main-content'>
          {renderVPage}
          <View
            onClick={() => this.handleTestClick()}
          >
            点击测试
          </View>
        </View>
        {/* 弹出内容 */}
        <LoginDialog
          isOpened={m_isShowLoginDlg}
          setShowLoginDialog={this.setShowLoginDialog.bind(this)}
        />
        {/* 底部tabbar */}
        <TabbarBottom
          nSelectVPage={m_nSelectVPage}
          setSelectVPage={this.setSelectVPage.bind(this)}
        />
      </View>
    )
  }
}
