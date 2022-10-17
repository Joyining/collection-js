const reduce = (items: Array<any>, callable: Function, initialValue?: any) => {
  let res = initialValue !== undefined ? initialValue : items[0];
  const firstIndex = initialValue !== undefined ? 0 : 1;
  for (let i = firstIndex; i < items.length; i++) {
    res = callable(res, items[i]);
  }
  return res;
};

export default reduce;