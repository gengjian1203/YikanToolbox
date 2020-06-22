import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';
import TitleBar from '@/components/TitleBar/index';
import { 
  CheckLogin,
  Throttle 
} from '@/kits/decorator/index';
import { router2url } from '@/kits/format/index';

import './index.scss';

type PageStateProps = { };

type PageDispatchProps = { };

type PageOwnProps = { };

type PageState = { };

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

type IState = PageState;

@Throttle(['handleAdminItemClick'], 1000)
@CheckLogin(['handleAdminItemClick'])
export default class AvatarModule extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  }

  state = {
    // 存储管理列表信息
    arrListData: [{
      strTitle: '管理模块1',
      strArrow: 'right',
      objIconInfo: {
        value: 'iconfont icon-home',
        color: 'green',
        prefixClass: 'iconfont icon-home',
        size: 25,
      },
      objClickParam: {
        strPath: '/pages/Activity/ActivityDetail/index',
        params: {
          aaa: 111
        }
      }
    }, {
      strTitle: '管理模块2',
      strArrow: 'right',
      objIconInfo: {
        value: 'iconfont icon-home',
        color: 'red',
        prefixClass: 'iconfont icon-home',
        size: 25,
      },
      objClickParam: {
        strPath: '/pages/Activity/ActivityDetail/index',
        params: { }
      }
    }, {
      strTitle: '管理模块3',
      strArrow: 'right',
      objIconInfo: {
        value: 'iconfont icon-home',
        color: 'orange',
        prefixClass: 'iconfont icon-home',
        size: 25,
      },
      objClickParam: {
        strPath: '/pages/Activity/ActivityDetail/index',
        params: { }
      }
    }, {
      strTitle: '管理模块4',
      strArrow: 'right',
      objIconInfo: {
        value: 'iconfont icon-home',
        color: 'pink',
        prefixClass: 'iconfont icon-home',
        size: 25,
      },
      objClickParam: {
        strPath: '/pages/Activity/ActivityDetail/index',
        params: { }
      }
    }, {
      strTitle: '管理模块5',
      strArrow: 'right',
      objIconInfo: {
        value: 'iconfont icon-home',
        color: 'black',
        prefixClass: 'iconfont icon-home',
        size: 25,
      },
      objClickParam: {
        strPath: '/pages/Activity/ActivityDetail/index',
        params: { }
      }
    }]
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

  // 点击管理项
  handleAdminItemClick(params: object, e: Event) {
    e.stopPropagation();
    console.log('handleAdminItemClick', params);
    Taro.navigateTo({
      url: router2url(params.strPath, params),
    });
  }

  render () {
    const {
      arrListData
    } = this.state;

    return (
      <View className='kits-module-wrap'>
        {/* 标题条 */}
        <TitleBar
          strTitle='管理模块'
        />
        {/* 内容 */}
        <AtList
          hasBorder={false}
        >
          {
            arrListData.map((item) => {
              return (
                <AtListItem
                  title={item.strTitle}
                  arrow={item.strArrow}
                  iconInfo={item.objIconInfo}
                  onClick={this.handleAdminItemClick.bind(this, item.objClickParam)}
                />
              )
            })
          }
          
        </AtList>
      </View>
    )
  }
}
