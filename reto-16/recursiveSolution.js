function transformTree(tree, i = 0) {
  if (tree[i] === undefined || tree[i] === null) return null;
  let node = {
    value: tree[i],
    left: transformTree(tree, i * 2 + 1),
    right: transformTree(tree, i * 2 + 2),
  };
  return node;
}

console.log(transformTree([3, 1, 0, 8, 12, null, 1]));
