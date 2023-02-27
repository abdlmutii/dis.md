function parse(text) {
  const replacements = [
    { pattern: /\*\*(.*?)\*\*/g, replacement: '<strong>$1</strong>' },
    { pattern: /__(.*?)__/g, replacement: '<u>$1</u>' },
    { pattern: /~~(.*?)~~/g, replacement: '<s>$1</s>' },
    { pattern: /`(.*?)`/g, replacement: '<span style="background-color: black; font-family: monospace; color: white;">$1</span>' },
    { pattern: /\n/g, replacement: '<br />' },
    { pattern: /(^|\s)`{3}([^\r\n]+)\r?\n([\s\S]+?)\r?\n`{3}($|\s)/gm, replacement: '<pre>$2\n$3</pre>' },
    { pattern: /(^|\s)`(.+?)`($|\s)/gm, replacement: '<code>$2</code>' },
    { pattern: /(_)([^_]+)(_)/g, replacement: '<em>$2</em>' },
    { pattern: /(\*\*)([^*]+)(\*\*)/g, replacement: '<strong>$2</strong>' },
  ];

  replacements.forEach(({ pattern, replacement }) => {
    text = text.replace(pattern, replacement);
  });

  return text;
}

module.exports = { parse }
