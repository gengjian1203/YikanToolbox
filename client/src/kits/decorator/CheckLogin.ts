const CheckLogin = () => {
  (target, property, descriptor) => {
    const method = descriptor.value;

    descriptor.value = function(...args) {
      method.apply(this, args);
    };

    return descriptor;
  }
}

export default CheckLogin;