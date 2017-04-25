/*
Sample Input

This example uses the following two linked lists:

  NULL
  1->2->3->NULL
Null and Node1 are the two head nodes passed as arguments to Print(Node* head).

Note: In linked list diagrams, -> describes a pointer to the next node in the list.

Sample Output

1
2
3

*/

function print(head) {
    if (head !== null){
        console.log(head.data)
        print(head.next);
    }    
}
