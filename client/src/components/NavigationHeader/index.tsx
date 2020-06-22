import Taro, { Component } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { AtNavBar } from "taro-ui";

import './index.scss';

import GlobalDataManager from '@/manager/GlobalDataManager';

const m_managerGlobalData = GlobalDataManager.getInstance();

export default class NavigationHeader extends Component<any, any> {
  static options = {
    addGlobalClass: true
  }

  state = {
    
  }

  static defaultProps = {
    isShowIcon: false,
    strTitle: ''
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleLeftIconClick = (objPageInfo, objAppInfo) => {
    const { 
      isShowIcon
    } = this.props;
    if (!isShowIcon) {
      return;
    }
    if (objPageInfo.length === 1) {
      // 首页
      Taro.reLaunch({
        url: objAppInfo.strPathMain
      });
    } else {
      // 返回
      Taro.navigateBack();
    }
  }

  render() {
    const { 
      strTitle,
      isShowIcon
    } = this.props;
    const objSystemInfo = m_managerGlobalData.objSystemInfo;    // 系统信息
    const objAppInfo = m_managerGlobalData.objAppInfo;          // 小程序信息
    const objPageInfo = Taro.getCurrentPages();                 // 路由信息
    const nAtNavBarHeight = 43;                                 // AtNavBar导航栏高度
    
    let strIcon = '';
    if (isShowIcon) {
      if (objPageInfo.length === 1) {
        // 首页
        strIcon = 'iconfont icon-nav-home';
      } else {
        // 返回
        strIcon = 'iconfont icon-nav-back';
      }
    }

    return (
      <View className='navigation-header-wrap'>
        {/* 绝对定位浮于页面顶部 */}
        <View className='navigation-header-content'>
          <View style={`height: ${objSystemInfo.statusBarHeight}px;`}>
          </View>
          <AtNavBar
            border={false}
            title={strTitle}
            leftIconType={strIcon}
            onClickLeftIcon={() => this.handleLeftIconClick(objPageInfo, objAppInfo)}
          />
        </View>
        {/* 占位 */}
        <View style={`height: ${objSystemInfo.statusBarHeight + nAtNavBarHeight}px;`}>
        </View>
      </View>
    )
  }
}