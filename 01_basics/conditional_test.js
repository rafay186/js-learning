let a = prompt("What is the Colour of Light")
a = a.toLowerCase()
if(a == "green"){
    console.log("You can Go");
}
else if(a == "red"){
    console.log("Stop");
}
else if(a == "yellow"){
    console.log("Ready to GO/Stop");
}
else{
    console.log("Invalid Colour")
}