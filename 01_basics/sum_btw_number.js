let sum = 0;
n1 = prompt("Enter First Number")
n1= Number.parseInt(n1)

n2 = prompt("Enter Second Number")
n2= Number.parseInt(n2)
if(n1 > n2){
for(i= n1; i>= n2; i ++){
    sum += i;
}
}
else{
    for(i= n1; i<= n2; i --){
    sum += i;
}
}
console.log("The sum between the ",n1, "and", n2,"is",sum)