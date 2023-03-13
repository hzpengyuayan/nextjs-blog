function debounce(func, delay) {
  let timerId; // 创建一个计时器 ID
  return function (...args) {
    // 返回一个新函数
    clearTimeout(timerId); // 如果计时器已启动，清除它
    timerId = setTimeout(() => {
      // 启动一个新的计时器
      func.apply(this, args); // 执行传入的函数
    }, delay);
  };
}

export { debounce };
