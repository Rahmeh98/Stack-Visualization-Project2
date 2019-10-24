// Stack class 
class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
  
    push(element) 
{ 
    // push element into the items 
    this.items.push(element); 
} 

pop() 
{ 
    // return top most element in the stack 
    // and removes it from the stack 
    // Underflow if stack is empty 
    if (this.items.length == 0) 
        return "Underflow"; 
    return this.items.pop(); 
} 

peek() 
{ 
    // return the top most element from the stack 
    // but does'nt delete it. 
    return this.items[this.items.length - 1]; 
} 

isEmpty() { 
    
    return this.items.length == 0; 
}


getItemByIndex(index) {

    return this.items[index];
}

size() {

    return this.items.length;
}


} 


let newStack = new Stack();

function puchElement()
{  

    if(newStack.size()< 4 )
      {

        var elements = document.getElementById("elements");
        var firstElement = document.createElement("div");
        firstElement.style.width= "100px";
        firstElement.style.height= "50px";
        firstElement.style.backgroundColor = "aquamarine";
        elements.appendChild(firstElement);
        
      }

     

     

      newStack.push(firstElement);
}


function popElement(){



    if(newStack.size()>0) {
        newStack.peek().parentNode.removeChild(newStack.peek());
        newStack.pop();
    }
}

function peek() {

    newStack.peek().style.backgroundColor = "red";
}

function size(){

     document.getElementById("sizea").innerHTML=newStack.size();
}

function isEmpty(){

    if(newStack.size() ==0) {

        document.getElementById("empty").innerHTML= "is empty";


    }
    else {

        document.getElementById("empty").innerHTML="is not empty ";

    }
}

function newStacks() {

    for ( i = newStack.size(); i> 0 ; i--) {
        popElement();
    }
}

function swap(){
 if( newStack.size()>1){
    var lastElement = newStack.peek();
    var secondElement = newStack.getItemByIndex(1);
    for(i = newStack.size(); i>= 1 ; i--)
    {
        popElement();
        
    }
    newStack.push(lastElement);
    for(i = 2; i<newStack.size() ; i++)
    {
        newStack.push(i);
    }
 }
    


}



