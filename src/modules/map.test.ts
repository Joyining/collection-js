import { test, expect } from 'vitest';
import { map } from './index';

test('map', () => {
  const actual = map([1, 2, 3, 4, 5], (v: number) => v * 2);
  const expected  = [2, 4, 6, 8, 10];

  expect(actual).toStrictEqual(expected);
});