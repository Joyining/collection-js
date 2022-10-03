import { test, expect } from 'vitest';
import { filter } from './index';

test('filter', () => {
  const actual = filter([1, 2, 3, 4, 5], (v: number) => v > 2);
  const expected = [3, 4, 5];

  expect(actual).toStrictEqual(expected);
});