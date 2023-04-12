function sort() {
  const list = [];
  const arrList = [...arguments];
  arrList.forEach((arrg) => {
    list.push(...arrg);
  });

  list.sort((a, b) => {
    return b - a;
  });

  return list;
}

const end = sort([5, 6, 2], [3, 9, 8], [1, 4, 7]);
console.log(...end);
