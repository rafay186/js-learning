for (let k = 1; k <= 5; k++) {
    console.log("*".repeat(k));
}
console.log("---------")
for (let i = 5; i >= 1; i--) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);
}