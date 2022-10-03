const find = (items: Array<any>, callable: Function) => {
  for (let i = 0; i < items.length; i++) {
    if (callable(items[i])) {
      return items[i];
    }
  }
  return undefined;
};

export default find;