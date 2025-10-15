export function printTree(node: any, indent: string = "") {
  console.log(indent + node.constructor.name);
  for (let i = 0; i < node.childCount; i++) {
    printTree(node.getChild(i), indent + "  ");
  }
}
