const filter = (items: Array<any>, callable: Function) => {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    if (callable(items[i])) {
      result.push(items[i]);
    }
  }
  return result;
};

export default filter;