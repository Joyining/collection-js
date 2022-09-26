const map = (items: Array<any>, callable: Function) => {
  const res = [];
  for (let i = 0; i < items.length ; i++) {
    res[i] = callable(items[i]);
  }
  return res;
};

export default map;