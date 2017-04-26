/*
Sample Input

NULL, data = 2
2 --> NULL, data = 3

Sample Output

2 -->NULL
2 --> 3 --> NULL
*/

function insert(head, data) {
    if (head === null){
        return new Node(data);
    } else {
        if (head.next === null){
            head.next = new Node(data);
        } else {
            insert(head.next, data);
        }
    }
    return head;
}
