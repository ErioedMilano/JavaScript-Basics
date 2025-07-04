// STRING METHODS

let userName = "Cristiano Ronaldo";
let dogName = "  Bruno  ";
let phoneNumber = "987-321-654";

console.log(userName.charAt(10));
console.log(userName.indexOf("o"))
console.log(userName.lastIndexOf("o"))
console.log(userName.length)
console.log(dogName.trim())
console.log(userName.toUpperCase())
console.log(userName.toLowerCase())
console.log(userName.repeat(2))

let result = userName.startsWith("C")
console.log(result)

result = userName.endsWith("d")
console.log(result)

if (userName.includes(" ")){
    console.log("Please remove ' ' From username")
}
else {
    console.log(userName)
}

phoneNumber = phoneNumber.replaceAll("-"," ")
console.log(phoneNumber)
