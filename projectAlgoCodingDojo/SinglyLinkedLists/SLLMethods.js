//Singly Linked Lists = an object comprised of nodes that uses references w/o having to use up large amounts of memory
    //Reference/Pointers = are fixed in size and it reference to some piece of data that lives in memory. 
    //Instead of the contents of a variable, it will should where the contents of the variable lives, the address. 

//Linked Lists: Caboose(points to null), Next(address of the next node), Node(Data and next), Head(most impt node)
    //SLL has only one entry which is the head, when adding nodes, need to keep assigning the head to the new node!
    //Node is comprised of data and a pointer to the next node, need both as attributes for the class Node
    //Want the next to point to null b/c do not know where this node will go pn the SLL. 
    //LinkedList needs only the head b/c its the most impt node to keep track of, w/o it then no SLL. 
    //SLL do not know where the other nodes would go
    // constructors = functions that declare the class (minimal attributes needed to define it)

class Node {
    constructor(data){
        this.data = data; 
        this.next = null; 
    }
}

class LinkedList{
    constructor(){
        this.head = null; 
    }
    addFront(val){
        let new_node = new Node(val)            //creates a new node object with the value given b/c we called the class, Node
        if(!this.head){                         //if this.head is not present also means if SLL is empty, set new_node as this.head
            this.head = new_node; 
            return this;
        }
        new_node.next = this.head;              //if list is not empty, assign the head to be the next node to the new node
        this.head = new_node;                   //assign the new_node to be the new head of the list
    }
    removeFront(){
        let removedNode = this.head;            //var to hold the node that is going to be removed
        this.head = removedNode.next;           //states that the new head is the node that was next to the old head
        removedNode.next = null;                //b/c it points to null, its no longer connected to the list
        return this.head; 
    }
}