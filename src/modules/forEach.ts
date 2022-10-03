const forEach = (items: Array<any>, callable: Function) => {
  for (let i = 0; i < items.length; i++) {
    callable(items[i]);
  }
};

export default forEach;