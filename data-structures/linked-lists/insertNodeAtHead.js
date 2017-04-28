/*
Sample Input

NULL , data = 1
1 --> NULL , data = 2

Sample Output

1 --> NULL
2 --> 1 --> NULL
*/

function insert(head, data) {
    var node = new Node(data);
    if (head !== null){
        node.next = head;
    }

    return node;

}
