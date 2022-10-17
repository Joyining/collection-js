import { test, expect } from 'vitest';
import { reduce } from './index';

test('reduce without initialValue', () => {
  const actual = reduce([1, 2, 3, 4, 5], (acc: any, v: number) => acc += v);
  const expected = 15;

  expect(actual).toStrictEqual(expected);
});

test('reduce with initialValue', () => {
  const actual = reduce([1, 2, 3, 4, 5], (acc: any, v: number) => acc += v, 100);
  const expected = 115;

  expect(actual).toStrictEqual(expected);
});

test('reduce with initialValue', () => {
  const actual = reduce([], (acc: any, v: number) => acc += v);
  const expected = undefined;

  expect(actual).toStrictEqual(expected);
});

test('reduce to combine array', () => {
  const actual = reduce([['a', 'b'], ['c', 'd'], ['e', 'f']], (acc: any, v: Array<String>) => acc.concat(v), []);
  const expected = ['a', 'b', 'c', 'd', 'e', 'f'];

  expect(actual).toStrictEqual(expected);
});