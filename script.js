// let add = document.getElementById("plus");
console.log("hello world");

var num = 0;
function Add(){
    num++
document.getElementById("title").innerText =num;
}
function Sub(){
    if( num === 0){
    
     alert("No Is Already 0")
    }else{
    num--;
        num = 0
    }
    document.getElementById("title").innerText= num;
}














