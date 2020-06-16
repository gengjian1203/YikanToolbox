import Taro, { Component } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { AtNavBar } from "taro-ui";

import GlobalDataManager from '@/manager/GlobalDataManager';

const g_globalData = GlobalDataManager.getInstance();

export default class NavigationHeader extends Component {
  state = {
    
  }

  static defaultProps = {
    strTitle: String
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleLeftIconClick = (objPageInfo, objAppInfo) => {
    console.log('handleLeftIconClick', objPageInfo, objAppInfo);
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
    const objSystemInfo = g_globalData.objSystemInfo;
    const objAppInfo = g_globalData.objAppInfo;
    const objPageInfo = Taro.getCurrentPages();
    
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
        <View style={`height: ${objSystemInfo.statusBarHeight}PX;`}>
        </View>
        <AtNavBar 
          border={false}
          title={strTitle}
          leftIconType={strIcon}
          onClickLeftIcon={() => this.handleLeftIconClick(objPageInfo, objAppInfo)}
        />
      </View>
    )
  }
}

NavigationHeader.defaultProps = {
  strTitle: String
}