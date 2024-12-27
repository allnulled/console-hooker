require(__dirname + "/console-hooker.js");

const {restore, original} = ConsoleHooker(function(...args) {
  original(args);
  const list = Array.from(args);
  require("fs").appendFileSync("log.txt", JSON.stringify(list) + "\n", "utf8");
});

console.log("hi!"); // log.txt contains now ["hi!"]
console.log("hi!"); // log.txt contains now ["hi!"]\n["hi!"]
console.log("hi!"); // log.txt contains now ["hi!"]\n["hi!"]\n["hi!"]

restore();

console.log("this is not appended");