// this file is not covered at all by tests

// known issue: Files not exercised by tests are not included in coverage report
// attempting to use `all: true` in .nycrc causes nyc to crash
// https://github.com/istanbuljs/nyc/issues/938

const qux = (num) => {
  return num - 1;
};

export { qux };
