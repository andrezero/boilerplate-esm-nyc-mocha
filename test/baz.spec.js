import { baz } from '../src/baz';

import { expect } from 'chai';

describe('baz', function () {
  describe('baz()', function () {
    it('should return number minus one', function () {
      expect(baz(1)).to.equal(0);
    });
  });
});
