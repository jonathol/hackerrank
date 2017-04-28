/*
Sample Input

NULL, data = 3, position = 0
3 --> NULL, data = 4, position = 0

Sample Output

3 --> NULL
4 --> 3 --> NULL
*/

function insert(head, data, position) {
    var node = new Node(data);

    if(head === null) {
        return node;
    }

    if (position === 0){
        node.next = head;
        return node;
    }

    var current = head;
    var i = 1;

    while ( i < position) {
        current = current.next;
        i++;
    }

    node.next = current.next;
    current.next = node;

    return head;


}
