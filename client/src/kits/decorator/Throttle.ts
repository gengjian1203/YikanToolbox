// 节流：固定一段时间内只有一次有效操作
const Throttle = (gapTime) => (target, property, descriptor) => {
  let lastTime = null;
  let method = descriptor.value;

  descriptor.value = function (...args) {
    let nowTime = new Date().getTime();
    if (!lastTime || nowTime - lastTime >= gapTime) {
      method.apply(this, args);
      lastTime = nowTime;
    }
  };

  return descriptor;
}

export default Throttle;
