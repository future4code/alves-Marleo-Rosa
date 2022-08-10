//EX2
console.log(process.argv[2])

if ((process.argv[2] === "add")) {
    console.log(Number(process.argv[3]) + Number(process.argv[4]))
} else if (process.argv[2] === "sub") {
    console.log(Number(process.argv[3]) - Number(process.argv[4]))
} else if (process.argv[2] === "mult") {
    console.log(Number(process.argv[3]) * Number(process.argv[4]))
} else if (process.argv[2] === "div") {
    console.log(Number(process.argv[3]) / Number(process.argv[4]))
}