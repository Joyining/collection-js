import { test, expect } from 'vitest';
import { forEach } from './index';

test('forEach', () => {
  const actual:Object = {};
  forEach([1, 2, 3, 4, 5], (v: any) => actual[v as keyof Object] = v);
  const expected = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  };

  expect(actual).toStrictEqual(expected);
});