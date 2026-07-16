
//        ***   Code by do - While loop   ***

 let n = Number.parseInt(prompt("Enter any number"));
let factorial = 1;
let i = 1 ;
if (n === 0){
    console.log("Factorial of 0 is 1")
}
else{
    do {
       factorial *= i
        i++
    }
    while(i <= n)
    
        console.log(" Factorial of", n , "is", factorial)
    }
    // _____________________________
//        ***   Code by While loop   ***

// let factorial = 1;
// let i = 1
// let n = Number.parseInt(prompt("Enter any number for factorial"))
// if(n == 0 ){
//     console.log("factorial of 0 is 1")
// }
// else{
//     while(i <= n){
//         factorial *= i
//         i++
//     }
//     console.log("Factorial of", n, "is", factorial)
// }