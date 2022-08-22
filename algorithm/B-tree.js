class BinarySearchTree {
  constructor() {
    //initially root is null
    this.root = null;
  }

  insertNumberNode(data, left = null, right = null) {
    let Node = {
      //creating a Node
      data, //data we pass will act as individual parent Node
      left, //left and right are subtrees
      right,
    };
    console.log(this.root);
    //suppose currentNumberNode as a parent node
    let currentNumberNode; //current Num Node value decides position of next value
    //if it goes to left subtree or right subtree
    if (!this.root) {
      this.root = Node; //if its not a root make it one by passing a Node
    } else {
      currentNumberNode = this.root; //and if its a root now, assign it to currentNumberNode
      while (currentNumberNode) {
        if (data < currentNumberNode.data) {
          //if data is smaller than cuurent data, send it in left subtree

          if (!currentNumberNode.left) {
            //if current num node don't have Node properties
            currentNumberNode.left = Node; //we will assign it node properties
            break;
          } else {
            //if it has node properties and it is sent by root to left
            currentNumberNode = currentNumberNode.left; //we will make it a left node because it is smaller than root node
          }
        } else if (data > currentNumberNode.data) {
          //if data is larger than cuurent data, send it in right subtree
          if (!currentNumberNode.right) {
            //if current num node don't have Node properties
            currentNumberNode.right = Node; //we will assign it node properties
            break;
          } else {
            //if it has node properties and it is sent by root to right
            currentNumberNode = currentNumberNode.right; //we will make it a right node because it is larger than root node
          }
        } else {
          console.log("Try Different Value");
          break;
        }
      }
    }
  }
}
let BSTtest = new BinarySearchTree();
BSTtest.insertNumberNode(6);
BSTtest.insertNumberNode(5);
BSTtest.insertNumberNode(7);
BSTtest.insertNumberNode(4);
BSTtest.insertNumberNode(8);
BSTtest.insertNumberNode(3);
BSTtest.insertNumberNode(9);
BSTtest.insertNumberNode(2);
BSTtest.insertNumberNode(10);
BSTtest.insertNumberNode(1);
BSTtest.insertNumberNode(11);
console.log(BSTtest);
