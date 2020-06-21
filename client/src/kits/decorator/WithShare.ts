import Taro from '@tarojs/taro';

function WithShare() {
  return function decoratorComponent (constructor) {
    return class WithShare extends constructor {
      // componentWillMount () { 
      //   console.log('decoratorComponent componentWillMount');
      // }

      // componentDidMount () { 
      //   console.log('decoratorComponent componentDidMount');
      // }
    
      // componentWillUnmount () { 
      //   console.log('decoratorComponent componentWillUnmount');
      // }
    
      // componentDidShow () { 
      //   console.log('decoratorComponent componentDidShow');
      // }
    
      // componentDidHide () { 
      //   console.log('decoratorComponent componentDidHide');
      // }

      handleAvatarClick() {
        console.log('decoratorComponent handleAvatarClick');
      }
    }
  } as any
}

export default WithShare;