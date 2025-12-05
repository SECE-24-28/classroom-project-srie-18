function myfunction(){

 let x=document.getElementById("x").value;
 
 console.log("MARK FOR X:",x);
 /*console.log("MARK FOR Y:",y);
 let y=document.getElementById("y").value;
 let z =document.getElementById("z").value;
 console.log("MARK FOR Z",z);
 if(x==100){
    console.log("O GRADE");
 }
 else if(x>=80 && x<100){
    console.log("A GRADE");
 }
 else if(x>=70 && x<80){
    console.log("B GRADE");
 }
 else if(x>=60 && x<70){
    console.log("C GRADE");
 }
 else if(x<60 && x>=50){
    console.log("D GRADE");
 }
 else if(x<50 && x>=40){
    console.log("E GRADE");
}
else{
    console.log("FAIL");
}*/
console.log("PRINTING NUMBERS FROM 1 TO x using for loop");
for(let i=1;i<=x;i++){
    if(i%2==0){
        console.log(i);
    }
}/*
console.log("PRINTING NUMBERS FROM X TO 0 using while loop");
while(x>0){
    console.log(x);
    x--;
}
    console.log("PRINTING NUMBERS FROM X TO 1 using do while loop");
do{
    console.log(x);
    x--;
}while(x>0);*/

}