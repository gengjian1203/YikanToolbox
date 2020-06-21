import Taro, { Component } from "@tarojs/taro";
import { View, Button } from "@tarojs/components";

import './index.scss';

type PageStateProps = { };

type PageDispatchProps = { };

type PageOwnProps = {
  setShowLoginDialog: (isShow: boolean) => any;
};

type PageState = { };

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

type IState = PageState;

export default class LoginDialog extends Component<IProps, IState> {
  state = {
    
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  
  // 点击蒙板
  handleMaskClick () {
    console.log('handleMaskClick');
    const {
      setShowLoginDialog
    } = this.props;
    setShowLoginDialog(false);
  }

  // 点击登录按钮
  handleLoginClick () {
    console.log('handleLoginClick');
    const {
      setShowLoginDialog
    } = this.props;
    setShowLoginDialog(false);
  }

  render() {
    return (
      <View className='login-dialog-wrap'>
        <View 
          className='login-dialog-mask'
          onClick={() => this.handleMaskClick()}
        >
          <View className='login-dialog-content'>
              <View className='content-text'>
                登录后即可体验更多服务
              </View>
              <Button 
                className='content-button'
                openType='getUserInfo'
                onClick={() => this.handleLoginClick()}
              >
                微信登录
              </Button>
            </View>
        </View>
      </View>
    )
  }
}