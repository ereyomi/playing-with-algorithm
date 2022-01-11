const memoizedFibonacci = (index, cache) => {
  cache = cache || []; // incase cache isn't passed

  if (cache[index]) {
    return cache[index];
  } else {
    if (index < 3) {
      return 1;
    } else {
      cache[index] =
        memoizedFibonacci(index - 1, cache) +
        memoizedFibonacci(index - 2, cache);
    }
  }

  return cache[index];
};
console.log(memoizedFibonacci(15)); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
