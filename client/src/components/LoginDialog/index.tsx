import Taro, { Component } from '@tarojs/taro';
import classNames from 'classnames'
import { View, Button } from '@tarojs/components';
import StorageManager from '@/manager/StorageManager';

import './index.scss';

type PageStateProps = { };

type PageDispatchProps = { };

type PageOwnProps = {
  setShowLoginDialog: (isShow: boolean) => any;
};

type PageState = { 
  m_isShow: boolean;
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

type IState = PageState;

export default class LoginDialog extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  }

  state = {
    m_isShow: true,
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  
  // 设置登录框的展示/隐藏状态
  setShow (isShow: boolean) {
    const {
      setShowLoginDialog
    } = this.props;
    this.setState({
      m_isShow: isShow
    });
    setTimeout(() => {
      setShowLoginDialog(isShow);
    }, 200);
  }

  // 点击蒙板
  handleMaskClick (e: Event) {
    e.stopPropagation();
    console.log('handleMaskClick');
    this.setShow(false);
  }

  // 点击登录按钮
  handleLoginClick (e: Event) {
    e.stopPropagation();
    console.log('handleLoginClick');
    const strKey = 'memberInfo';
    StorageManager.getInstance().setStorageSync(strKey, {
      memberId: 'mem-12345'
    });
    this.setShow(false);
  }

  render() {
    const {
      m_isShow
    } = this.state;

    return (
      <View className='login-dialog-wrap'>
        <View 
          className='login-dialog-mask'
          onClick={this.handleMaskClick.bind(this)}
        >
          <View className={classNames('login-dialog-content', 
                                      m_isShow ? 'fade-in-from-btottom' : 'fade-out-from-btottom')}
          >
              <View className='content-text'>
                登录后即可体验更多服务
              </View>
              <Button 
                className='content-button'
                openType='getUserInfo'
                onClick={this.handleLoginClick.bind(this)}
              >
                微信登录
              </Button>
            </View>
        </View>
      </View>
    )
  }
}