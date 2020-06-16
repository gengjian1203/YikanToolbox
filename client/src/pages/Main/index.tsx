import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

import NavigationHeader from '@/components/NavigationHeader/index';
import TabbarBottom from '@/components/TabbarBottom/index';
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
  // 修改展示组件索引值
  setSelectVPage (nSelectVPage) {
    this.setState({
      m_nSelectVPage: nSelectVPage
    })
  }

  // 
  render () {
    const {
      m_nSelectVPage,
      m_arrVPageTitle
    } = this.state;

    let renderVPage: any = null;
    
    switch(m_nSelectVPage) {
      case 0: {
        renderVPage = (<VPageHome/>);
        break;
      }
      case 1: {
        renderVPage = (<VPageStore/>);
        break;
      }
      case 2: {
        renderVPage = (<VPageMine/>);
        break;
      }
      default: {
        renderVPage = (<VPageHome/>);
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
        {renderVPage}
        {/* 底部tabbar */}
        <TabbarBottom
          nSelectVPage={m_nSelectVPage}
          setSelectVPage={this.setSelectVPage.bind(this)}
        />
      </View>
    )
  }
}
