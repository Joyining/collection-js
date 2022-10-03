const some = (items: Array<any>, callable: Function) => {
  for (let i = 0; i < items.length; i++) {
    if (callable(items[i])) {
      return true;
    }
  }
  return false;
};

export default some;