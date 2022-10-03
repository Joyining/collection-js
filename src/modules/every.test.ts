import { test, expect } from 'vitest';
import { every } from './index';

test('every true', () => {
  const actual = every([1, 2, 3, 4, 5], (v: number) => v > 2);
  const expected = false;

  expect(actual).toStrictEqual(expected);
});

test('every false', () => {
  const actual = every([1, 2, 3, 4, 5], (v: number) => v < 6);
  const expected = true;

  expect(actual).toStrictEqual(expected);
});