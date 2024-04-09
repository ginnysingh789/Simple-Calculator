
var displayElement = document.querySelector("#display");
var update;
var value;

var result=document.querySelector(".Cal");
result.addEventListener('click',Result);
function Result(){
    try {
         value=eval(displayElement.textContent);
        displayElement.textContent=value;
         update=true; 
    } 
    catch (error) {
        alert("Enter Valid Operations");
        displayElement.textContent=""; 
    }
   
    
}
var numberElements = document.querySelectorAll(".number");
numberElements.forEach(function(element) {
    element.addEventListener('click', function() {
        if(update)
        {
            displayElement.textContent ="";
            update=false; 
        }
        
        displayElement.textContent += element.textContent;
    });
});
var OperatorElements = document.querySelectorAll(".operator");
OperatorElements.forEach(function(opr) {
    opr.addEventListener('click', function() {
       
        
        displayElement.textContent += opr.textContent;
        update=false;
    });
});
var ClearElement=document.querySelector(".Clear")
ClearElement.addEventListener('click',Clear);
function Clear(){
    displayElement.textContent="";
}
