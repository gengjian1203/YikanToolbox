import Taro, { Component } from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import { AtFloatLayout } from "taro-ui";

export default class NavigationHeader extends Component<any, any> {
  state = {
    
  }

  static defaultProps = {
    isOpened: false,
    setShowLoginDialog: () => {}
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 设置对话框状态
  setLoginDialogState (isShow) {
    this.setState({
      isOpened: isShow
    });
  }

  // 对话框收起
  handleLoginDialogClose () {
    console.log('handleLoginDialogClose');
    const {
      setShowLoginDialog
    } = this.props;
    setShowLoginDialog(false);
  }

  // 点击登录按钮
  handleLoginClick () {
    console.log('handleLoginClick');
  }

  render() {
    const {
      isOpened,
    } = this.props;
    console.log('render', isOpened);

    return (
      <View className='login-dialog-wrap'>
        <AtFloatLayout 
          isOpened={isOpened}
          onClose={() => this.handleLoginDialogClose()}
        >
          <View>
            啦啦啦
            <Button 
              openType='getUserInfo'
              onClick={() => this.handleLoginClick()}
            >
              登录
            </Button>
          </View>
        </AtFloatLayout>
      </View>
    )
  }
}