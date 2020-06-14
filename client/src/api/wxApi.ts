function getSystemInfo () {
  wx.getSystemInfo({
    success: (res) => {
      console.log('wxApi getSystemInfo success', res);
    },
    fail: (err) => {
      console.log('wxApi getSystemInfo fail', err);
    }
  })
  console.log('hello getSystemInfo');
}

export default {
  getSystemInfo
}