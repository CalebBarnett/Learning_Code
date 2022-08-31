/*Binary Search that accepts integers.
 * BST will return True or False if value is present in tree.
*/
#include <iostream>

using namespace std;
//Creates binary tree node w/ pointers to left and right
struct node {
    int data;
    struct node *leftNode, *rightNode;
};
//sets initial values for nodes in tree
node *createNode(int data) {
    node *n = new node();
    n->data = data;
    n->rightNode = NULL;
    n->leftNode = NULL;
    return n;
}
/*Check if tree is empty.
 * If tree is empty then create root node.
 * If tree is NOT empty, compare value to node value.
 * If value is less than node value, create node to left.
 * If value is greater than node value, create node to right.
*/
void insert(node *&rootNode, int data) {
    if (rootNode == NULL) {
        rootNode = createNode(data);
    } else if (rootNode->data > data) {
        insert(rootNode->leftNode, data);
    } else insert(rootNode->rightNode, data);
}

//Inserts values into node created.
void insert_node_array(node *&root, int data[], int size) {
    for (int i = 0; i < size; ++i) {
        insert(root, data[i]);
    }
}

//Searches tree for value by user
bool treeSearch(node *tree, int searchValue) {
    while (tree != NULL) {
        if (tree->data == searchValue) {
            return true;
        } else if (tree->data > searchValue) {
            tree = tree->leftNode;
        } else
            tree = tree->rightNode;
    }
    return false;
}

//
int main() {
    node *rootNode;
    int array[] = {35, 18, 48, 72, 60, 25};
    int userValue;
    int arraySize = sizeof(array) / sizeof(int);
    insert_node_array(rootNode, array, arraySize);
    cout << "Enter value: ";
    cin >> userValue;
    if (treeSearch(rootNode, userValue))
        cout << "True \n";
    else
        cout << "False \n";
    system("PAUSE");
    return 0;
}
