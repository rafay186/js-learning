let factorial = 1;
n = prompt("Enter any Number")
n = Number.parseInt(n)
for(i=1; i<=n; i++){
    factorial = factorial*i;
}
console.log("The product of First",n, "Numbers is",factorial);