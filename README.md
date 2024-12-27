# console-hooker

Hook console.log seamlessly. Node.js or browser.

## Installation

```sh
npm i -s @allnulled/console-hooker
```

## Importation

In node.js:

```js
require("@allnulled/console-hooker");
```

In html:

```html
<script src="node_modules/@allnulled/console-hooker/console-hooker.js"></script>
```

## Usage

Once loaded the file, `ConsoleHooker` is available globally:

```js
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
```