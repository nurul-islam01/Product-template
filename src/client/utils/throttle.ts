const throttle = (func: () => {}, wait = 100) => {
  let timer:  ReturnType<typeof setTimeout>| null = null;
  return (...args: []) => {
    if (timer === null) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
};

export default throttle;
