import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import NavigationHeader from '@/components/NavigationHeader/index';
import TabbarBottom from '@/components/TabbarBottom/index';
import LoginDialog from '@/components/LoginDialog/index';
import VPageHome from './components/VPageHome/index';
import VPageMine from './components/VPageMine/index';
import VPageDiscover from './components/VPageDiscover/index';
import { 
  CheckLogin, 
  Throttle
} from '@/kits/decorator/index';

import { 
  connect 
} from '@tarojs/redux';
import { 
  MainPageInfoType 
} from '@/constants/MainPageInfo';
import { 
  setMainPageSelect,
} from '@/actions/MainPageInfo';

import './index.scss';

type PageStateProps = {
  MainPageInfo: MainPageInfoType;
};

type PageDispatchProps = {
  setMainPageSelect: (nSelectIndex: number) => any;
};

type PageOwnProps = {
  
};

type PageState = {
  m_arrVPageTitle: Array<string>,       // 底部导航名称常量
  m_nSelectVPage: number,               // 渲染索引值
  m_objPageParams: object,              // 页面接收参数
  m_isShowLoginDlg: boolean,            // 是否展示登录弹窗
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

type IState = PageState;

@connect(
  ({ MainPageInfo }) => ({
    MainPageInfo
  }),
  dispatch => ({
    setMainPageSelect (nSelectIndex: number) {
      dispatch(setMainPageSelect(nSelectIndex));
    }
  })
)
@Throttle([], 2000)
// @CheckLogin(['handleTestClick'])
export default class Main extends Component<IProps, IState> {
  config = {
    // 支持下拉刷新
    enablePullDownRefresh: true,
    // 不支持右划返回
    disableSwipeBack: true,
    // 上拉刷新阈值
    onReachBottomDistance: 50,
  }

  state = {
    m_arrVPageTitle: ['首页', '发现', '我的'],    // 底部导航名称常量
    m_nSelectVPage: 0,                          // 渲染索引值
    m_objPageParams: {},                        // 页面接收参数
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
  // onLoad之前
  componentWillMount () {
    // 注册事件
    this.RegisterEvents();

    const m_objPageParams =  this.$router.params;
    const {
      setMainPageSelect
    } = this.props;

    this.setState({
      m_objPageParams: this.$router.params
    });

    // 渲染显示页面
    if (m_objPageParams.indexSelectVPage) {
      const nSelectVPage = parseInt(m_objPageParams.indexSelectVPage);
      setMainPageSelect(nSelectVPage);
    }
  }

  // onLoad之后
  componentDidMount () { 
    console.log('MainPage componentDidMount.');
  }

  // onUnload
  componentWillUnmount () { 
    // 注销事件
    this.UnregisterEvents();
  }

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

  // 测试按钮
  handleTestClick () {
    // this.setShowLoginDialog(true);
    console.log('测试按钮功能');
  }

  // 
  render () {
    const {
      m_arrVPageTitle,          // 首页列表的页面名称
      m_isShowLoginDlg,         // 是否展示登录弹窗
    } = this.state;
    const {
      MainPageInfo,
      setMainPageSelect
    } = this.props;

    let renderVPage: any = null;
    
    switch(MainPageInfo.nSelectIndex) {
      case 0: {
        renderVPage = (<VPageHome setShowLoginDialog={this.setShowLoginDialog.bind(this)}/>);
        break;
      }
      case 1: {
        renderVPage = (<VPageDiscover setShowLoginDialog={this.setShowLoginDialog.bind(this)}/>);
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
          strTitle={m_arrVPageTitle[MainPageInfo.nSelectIndex]}
        />
        {/* 页面内容 */}
        <View className='main-content'>
          {renderVPage}
        </View>
        {/* 弹出内容 */}
        { 
          m_isShowLoginDlg &&
          <LoginDialog
            setShowLoginDialog={this.setShowLoginDialog.bind(this)}
          />
        }
        {/* 底部tabbar */}
        <TabbarBottom
          setMainPageSelect={setMainPageSelect.bind(this)}
        />
      </View>
    )
  }
}
