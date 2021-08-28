export const time = (fn) => {
  setTimeout(() => {
    fn("hello world");
  }, 2000);
};

export const promise = (a) =>
  new Promise((resolve, reject) => {
    if (a > 0) {
      resolve(false);
    } else {
      reject(true);
    }
  });
