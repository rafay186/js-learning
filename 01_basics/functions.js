const onePlusAvrg = (x , y) =>{
    return 1 + (x + y)/2
}
const sayHi= () =>{
    console.log ("Hn bhai kesa haaa?")
    return ("Ma theek");
}
let a = 33;
let b = 11;
let c = 15;
let v = sayHi();
console.log(v)
console.log("One Plus Average of numbers are =", onePlusAvrg(a,b))
console.log("One Plus Average of numbers are =", onePlusAvrg(a,c))
console.log("One Plus Average of numbers are =", onePlusAvrg(b,c))