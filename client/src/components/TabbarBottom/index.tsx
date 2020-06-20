import Taro, { Component, useState } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { AtTabBar } from "taro-ui";

type PageStateProps = { };

type PageDispatchProps = { };

type PageOwnProps = { 
  setMainPageSelect: (nSelectIndex: number) => any;
};

type PageState = { };

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

type IState = PageState;
export default class TabbarBottom extends Component<IProps, IState> {
  constructor() {
    super(...arguments);
  }

  static options = {
    addGlobalClass: true
  }

  state = {
    nSelectIndex: 0
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 函数式组件
  renderTabbar() {
    const {
      nSelectIndex
    } = this.state;
    const {
      setMainPageSelect
    } = this.props;

    return (
      <AtTabBar 
        fixed
        tabList={[{ 
          title: '首页', 
          iconType: 'iconfont icon-home', 
          selectedIconType: 'iconfont icon-home-select' 
        }, { 
          title: '拼团', 
          iconType: 'iconfont icon-store', 
          selectedIconType: 'iconfont icon-store-select' 
        }, { 
          title: '我的', 
          iconType: 'iconfont icon-mine', 
          selectedIconType: 'iconfont icon-mine-select', 
        }]}
        onClick={
          (value) => {
            if (value !== nSelectIndex) {
              console.log('handleClick', value);
              setMainPageSelect(value);
              this.setState({
                nSelectIndex: value
              });
            }
          }
        }
        current={nSelectIndex}
      />
    )
  }

  render() {
    return (
      <View className='tabbar-bottom-wrap'>
        {this.renderTabbar()}
      </View>
    )
  }
}