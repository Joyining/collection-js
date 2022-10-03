const every = (items: Array<any>, callable: Function) => {
  for (let i = 0; i < items.length; i++) {
    if (!callable(items[i])) {
      return false;
    }
  }
  return true;
};

export default every;