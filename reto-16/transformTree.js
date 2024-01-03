function transformTree(tree) {
  if (tree.length === 0) return null;
  let nodes = [];
  let i = 0;
  while (tree[i] !== undefined) {
    let newNode = {
      value: tree[i],
      left: null,
      right: null,
    };
    nodes.push(newNode);
    i = i + 1;
  }

  for (let n = nodes.length - 1; n >= 0; n--) {
    let left_node = nodes[n * 2 + 1];
    let right_node = nodes[n * 2 + 2];
    if (left_node !== undefined) {
      if (left_node.value !== null) {
        nodes[n].left = left_node;
      }
    }

    if (right_node !== undefined) {
      if (right_node.value !== null) {
        nodes[n].right = right_node;
      }
    }
  }

  return nodes[0];
}

console.log(transformTree([3, 1, 0, 8, 12, null, 1]));
