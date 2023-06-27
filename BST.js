/* BUSCAR EL MINIMO */

function findMin(node){
        // base case
        if (root === null) return -1;

        let current = root;

        // leftmost node is minimum so we move in BST till left node is not
        // NULL.
        while (current.left !== null) {
            current = current.left;
        }
        // returning the data at leftmost node.
        return (current.data);
    }

/* BUSCAR EL MAXIMO */
function findMax(node){
    if (node == null)
        return Number.MIN_VALUE;

    let res = node.data;
    let lres = findMax(node.left);
    let rres = findMax(node.right);

    if (lres > res)
        res = lres;
    if (rres > res)
        res = rres;
    return res;
}

/* BUSCAR ELEMENTO X */


class Solution {
    // Function to search a node in BST.
    search(root, x) {
        // base case
        if (root === null) return false;

        // if data at current node is equal to x, we return true.
        if (root.data === x) return true;

        // if data at the current node is less than given value, we call the
        // function recursively to search in right subtree.
        if (root.data < x) return this.search(root.right, x);
        // else we call the function recursively to search in left subtree.
        return this.search(root.left, x);
    }
}
/* MERGE TREES */
const mergeTrees = (t1, t2) => {
    //when there is null given tree
    if(!t1 || !t2) return t1 || t2
  
    //both of trees are not null,
    //we sum the value, and transform t1,
    //we can also choose t2, and return t2 at the end
    t1.val += t2.val
    
    //recursively traverse left path  
    t1.left = mergeTrees(t1.left, t2.left)
    //recursively traverse right path
    t1.right = mergeTrees(t1.right, t2.right)
    
    //return merged tree
    return t1
       
      
  }

  /* SUMAR NODOS */
  function addBT(root)
{
    if (root == null)
        return 0;
    return (root.key + addBT(root.left) +
                       addBT(root.right));
}


/* GENERAR ARBOL */
var generateBST = function (array) {
    var newBST = new BinarySearchTree(array[0]);
    for (let i = 1; i < array.length; i++) {
  
      newBST.insert(array[i]);
    }
  
    return newBST;
  };

/* BUSQUEDA BINARIA */
var binarySearch = function (array, target) {
  // Tu código aca:
  //console.log(...array);

  let first = 0;    //left endpoint
  let last = array.length - 1;   //right endpoint
  let position = -1;
  let found = false;
  let middle;

  while (found === false && first <= last) {
      middle = Math.floor((first + last)/2);
      if (array[middle] == target) {
          found = true;
          position = middle;
      } else if (array[middle] > target) {  //if in lower half
          last = middle - 1;
      } else {  //in in upper half
          first = middle + 1;
      }
  }
  return position;
  

}

  var binarySearch = function (array, pred) {
    // Tu código aca:
    var min = array[0];
    
    var max = array.length - 1;
  
    var guess;
  
    while (max >= min) {
      guess = Math.floor((min + max) / 2);
      if (array[guess] === pred) {
        return guess;
      }
      else if (array[guess] < pred ) {
        min = guess + 1;
      }
      else {  
        max = guess - 1;
     }
    }
    
    return -1;
  }

/* suma */
  BinarySearchTree.prototype.sum = function () {
    if (!this.right && !this.left) return this.value;
    if (!this.right && this.left) return this.value + this.left.sum();
    if (this.right && !this.left) return this.value + this.right.sum();
    if (this.right && this.left) return this.value + this.left.sum() + this.right.sum();
}

BinarySearchTree.prototype.height = function(){
  // Tu código aca:
     /* if (!this.value) {
      return 0;
    }
  
    return 1 + Math.max(this.right.height(), this.left.height());
  };*/
      if (this.value === null){
  	            return 0;
      }
  	        else {
        	      /* compute the depth of each subtree */
  	            let lDepth = this.right.height();
                let rDepth = this.left.height();
  	   
  	            /* use the larger one */
  	            if (lDepth > rDepth){
  	                return (lDepth + 1);
                  }
  	             else{
                  return (rDepth + 1);
                }
	        }
    }