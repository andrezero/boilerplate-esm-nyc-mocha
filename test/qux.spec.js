import { qux } from '../src/qux';

import { expect } from 'chai';

// known issue: Files not exercised by tests are not included in coverage report
// this placeholder test makes sure the file is included in the reports

describe('qux', function () {
  it('should be defined', function () {
    console.log(qux);
    expect(typeof qux).to.equal('function');
  });
});
