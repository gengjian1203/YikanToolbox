const LIFE_CYCLE_MAP = ['willMount', 'didMount', 'didShow'];

function CheckLogin(lifecycle = 'willMount') {
  // 异常规避提醒
  if (LIFE_CYCLE_MAP.indexOf(lifecycle) < 0) {
    console.warn(
      `传入的生命周期不存在, 鉴权判断异常 ===========> $_{lifecycle}`
    );
    return Component => Component;
  }
    
  return function withLoginComponent(Component) {
    // 避免H5兼容异常
    if (tool.isH5()) {
      return Component;
    }
      
    // 这里还可以通过redux来获取本地用户信息，在用户一次登录之后，其他需要鉴权的页面可以用判断跳过流程
    // @connect(({ user }) => ({
    //   userInfo: user.userInfo,
    // }))
    return class CheckLogin extends Component {
      constructor(props) {
        super(props);
      }
 
      async componentWillMount() {
        if (super.componentWillMount) {
          if (lifecycle === LIFE_CYCLE_MAP[0]) {
            const res = await this.$_autoLogin();
            if (!res) return;
          }
 
          super.componentWillMount();
        }
      }
 
      async componentDidMount() {
        if (super.componentDidMount) {
          if (lifecycle === LIFE_CYCLE_MAP[1]) {
            const res = await this.$_autoLogin();
            if (!res) return;
          }
 
          super.componentDidMount();
        }
      }
 
      async componentDidShow() {
        if (super.componentDidShow) {
          if (lifecycle === LIFE_CYCLE_MAP[2]) {
            const res = await this.$_autoLogin();
            if (!res) return;
          }
 
          super.componentDidShow();
        }
      }
    }
      
    $_autoLogin = () => {
      // ...这里是登录逻辑
      console.log('llllllogin...');
    }
  }


export default CheckLogin;


