let sum = 0;
n1 = prompt("Enter First Number")
n1= Number.parseInt(n1)

n2 = prompt("Enter Second Number")
n2= Number.parseInt(n2)
if(n1 > n2){
for(i= n1; i>= n2; i --){
    sum += i;
}
}
else{
    for(i= n1; i<= n2; i ++){
    sum += i;
}
}
console.log("The sum between the ",n1, "and", n2,"is",sum)

console.log("-----------------------------")

let add = 0;
let fn = Number.parseInt(prompt("Enter First number"))
let sn = Number.parseInt(prompt("Enter Second number"))
let start,end;
if(fn > sn){
    start = fn ;
    end = sn;
}
else{
    start = sn;
    end = fn;
}
for(i = start; i >= end; i--){
    add += i
}
console.log("Sum from", fn, "to", sn, "is",add)