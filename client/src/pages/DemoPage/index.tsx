import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

import NavigationHeader from '@/components/NavigationHeader/index';
import DemoCom1 from './components/DemoCom1/index';
import DemoCom2 from './components/DemoCom2/index';

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
    m_arrData: ['0', '1', '2'],
    // 
    m_isBoolean: true,
    m_nNumber: 1,
    m_strString: 'hello',
    m_objData: {
      strTrue: 'True......',
      strFalse: 'False......'
    },
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
  }

  // onUnload
  componentWillUnmount () { }

  // onShow
  componentDidShow () { }

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
      // 常量
      m_arrData,
      m_isBoolean,
      m_nNumber,
      m_strString,
      m_objData,
    } = this.state;
    
    return (
      <View className='main-wrap'>
        {/* 头部导航 */}
        <NavigationHeader 
          isShowIcon={false}
          strTitle='DemoPage页面'
        />
        {/* 页面内容 */}
        <View>This is Demo Page</View>
        <View>{m_strString}</View>
        {/* 条件渲染 */}
        {
          m_isBoolean && <View>{m_objData.strTrue}</View>  
        }
        {
          !m_isBoolean && <View>{m_objData.strFalse}</View>
        }
        {/* 循环渲染 */}
        {
          m_arrData.map((item, index) => {
            return (index === m_nNumber) ? (<View>{item}+{'well done.'}</View>) : (<View>{item}</View>);
          })
        }
        {/* 自定义组件1 */}
        <DemoCom1/>
        {/* 自定义组件2 */}
        <DemoCom2/>
      </View>
    )
  }
}
