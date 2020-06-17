import Taro, { Component, useState } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { AtTabBar } from "taro-ui";

export default class TabbarBottom extends Component {
  

  constructor() {
    super(...arguments);
  }

  state = {
    
  }

  static defaultProps = {
    
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 函数式组件
  renderTabbar() {
    const [nSelectIndex, setSelectIndex] = useState(0);
    const {
      nSelectVPage,
      setSelectVPage
    } = this.props;
    // 初始化索引值
    setSelectIndex(nSelectVPage);

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
            console.log('handleClick', value);
            setSelectIndex(value);
            setSelectVPage(value);
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

TabbarBottom.defaultProps = {
  nSelectVPage: 0,
  setSelectVPage: Function
}