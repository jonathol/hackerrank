// Print the Elements of a Linked List
function print(head) {
    if (head !== null){
        console.log(head.data)
        print(head.next);
    }
}

// Insert a Node at the Tail of a Linked List
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

// Insert a node at the head of a linked list
function insert(head, data) {
    var node = new Node(data);
    if (head !== null){
        node.next = head;
    }

    return node;
}

// Insert a node at a specific position in a linked list
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

// Delete a Node
function deleteNode(head, position) {
    var current = head;
    if (position === 0){
        return current.next;
    }
    for (var i = 0; i<position-1; i++){
        current = current.next;
    }
    current.next = current.next.next;
    return head;
}

// Print in Reverse
function reversePrint(head) {
    var nodeList = [];
    var node = head;


    while (node !== null){
        nodeList.push(node.data);
        node = node.next;
    }

    while (nodeList.length > 0){
        console.log(nodeList.pop());
    }
}

// Compare two linked lists
function compareLinkedLists( headA, headB) {
    var nodeA = headA;
    var nodeB = headB;


    if (nodeA === null || nodeB === null) {
        return 0;
    }
    if(nodeA !== null && nodeB !== null){
        while(nodeA.data === nodeB.data){
           if(nodeA.next === null){
              if(nodeB.next === null){
                 return 1;
               }else{
                 return 0;
              }
           }

           nodeA = nodeA.next;
           nodeB = nodeB.next;
        }
    }
    return 0;
