import { test, expect } from 'vitest';
import { reject } from './index';

test('reject', () => {
  const actual = reject([1, 2, 3, 4, 5], (v: number) => v > 2);
  const expected = [1, 2];

  expect(actual).toStrictEqual(expected);
});