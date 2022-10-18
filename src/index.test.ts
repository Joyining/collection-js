import { test, expect } from 'vitest';
import { collect } from './index';

test('map should work', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .map((v: number) => v * 2)
    .toArray();
  const expected = [2, 4, 6, 8, 10];

  expect(actual).toStrictEqual(expected);
});

test('every true', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .every((v: number) => v > 2);
  const expected = false;

  expect(actual).toStrictEqual(expected);
});

test('every false', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .every((v: number) => v < 6);
  const expected = true;

  expect(actual).toStrictEqual(expected);
});

test('filter', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .filter((v: number) => v > 2)
    .toArray();
  const expected = [3, 4, 5];

  expect(actual).toStrictEqual(expected);
});

test('cannot find', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .find((v: number) => v > 6);
  const expected = undefined;

  expect(actual).toStrictEqual(expected);
});

test('find result', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .find((v: number) => v > 2);
  const expected = 3;

  expect(actual).toStrictEqual(expected);
});

test('some true', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .some((v: number) => v > 2);
  const expected = true;

  expect(actual).toStrictEqual(expected);
});

test('some false', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .some((v: number) => v > 6);
  const expected = false;

  expect(actual).toStrictEqual(expected);
});

test('reject', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .reject((v: number) => v > 2)
    .toArray();
  const expected = [1, 2];

  expect(actual).toStrictEqual(expected);
});

test('forEach', () => {
  const actual:Object = {};
  const arr = [1, 2, 3, 4, 5];
  collect(arr)
    .forEach((v: any) => actual[v as keyof Object] = v);
  const expected = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  };

  expect(actual).toStrictEqual(expected);
});

test('reduce without initialValue', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .reduce((acc: any, v: number) => acc += v);
  const expected = 15;

  expect(actual).toStrictEqual(expected);
});

test('reduce with initialValue', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .reduce((acc: any, v: number) => acc += v, 100);
  const expected = 115;

  expect(actual).toStrictEqual(expected);
});

test('size', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .size();
  const expected = 5;

  expect(actual).toStrictEqual(expected);
});

test('nth', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .nth(1);
  const expected = 2;

  expect(actual).toStrictEqual(expected);
});

test('includes', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .includes(2);
  const expected = true;

  expect(actual).toStrictEqual(expected);
});