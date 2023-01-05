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
        let new_node = new Node(val)            
        if(!this.head){                         
            this.head = new_node; 
            return this;
        }
        new_node.next = this.head;              
        this.head = new_node;                   
    }
    removeFront(){
        if(this.head == null){                  
            return this.head;
        }
        let removedNode = this.head; 
        this.head = removedNode.next; 
        removedNode.next = null;            
        return this.head; 
    }
    Front(){
        if(this.head == null){                  
            return null;  
        }else{
            return this.head.data;
        }
        //return this.head ? this.head.data : null; 
    }
}

SLL1 = new LinkedList();
SLL1.addFront(18); 
console.log(SLL1);      //LinkedList { head: Node { data: 18, next: null } }
SLL1.addFront(5);
console.log(SLL1);      //LinkedList {head: Node { data: 5, next: Node { data: 18, next: null } }}
SLL1.addFront(73);
console.log(SLL1);      //LinkedList {head: Node { data: 73, next: Node { data: 5, next: [Node] } }}
SLL1.removeFront();
console.log(SLL1);      //LinkedList {head: Node { data: 5, next: Node { data: 18, next: null } }}
SLL1.removeFront();
console.log(SLL1);      //LinkedList { head: Node { data: 18, next: null } }
console.log(SLL1.Front());  //18