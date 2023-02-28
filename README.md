# dis.md
<a href="https://discord.gg/y9KUzq2yaT"><img src="https://img.shields.io/discord/1077492444574261339?style=for-the-badge&color=5865F2&logo=discord&logoColor=white&label=Abdlmu'tii" alt="Discord server" /></a><br>
A simple JavaScript library for parsing Discord markdown syntax and converting it to HTML.

## Installation

You can install `discord-md-parser` using [npm](https://www.npmjs.com/package/dis.md) by running the following command:

```bash
npm install dis.md
```

## Usage
To use the discord-md-parser library, you first need to import it into your JavaScript code:

```js
const markdown = require('dis.md');
```
Then, you can use the parseDiscordMarkdownToHTML function to convert Discord markdown syntax to HTML. For example:

```js
const md = '**BEST SALES**, _LOL_, __LOL__, **LOL**, ~~LOL~~, `LOL`,\n```js\nconsole.log("Hello, world!");\n```';
const html = markdown.parse(md);
console.log(html); // logs the parsed HTML
```
This will output the following HTML:

```html
<strong>BEST SALES</strong>, <em>LOL</em>, <u>LOL</u>, <strong>LOL</strong>, <s>LOL</s>, <span style="background-color: black; font-family: monospace; color: white;">LOL</span><br /><pre>console.log("Hello, world!");</pre>
```

## Credits
Credits goes to [abdlmutii](https://github.com/abdlmutii), if you like this npm package please remember to check other work i've done on github and star [this repo](https://github.com/abdlmutii/dis.md).

## License
This library is licensed under the MIT License.
