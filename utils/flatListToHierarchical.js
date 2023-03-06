/**
 * Takes a flat list of contentBlocks and reorders them into a proper
 * hierarchy using the id and parentId block properties.
 *
 * @param {Array} data The blocks from WPGraphQL Content Blocks
 * @param {*} param1
 * @returns
 */
export default function flatListToHierarchical(
  data = [],
  { idKey = "id", parentKey = "parentId", childrenKey = "children" } = {}
) {
  const tree = [];
  const childrenOf = {};

  data.forEach((item) => {
    const newItem = { ...item };
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;

    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];

    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem);
  });

  return tree;
}
