import assert from 'power-assert';

import { sum } from '../src/scripts/utils/sum';

console.log(sum);

describe('index', () => {
  it('sum', () => {
    let result = sum(1, 1);

    assert(result === 2);
  });
});
