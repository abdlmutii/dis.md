function parse(text) {

  const replacements = [

    { pattern: /\*\*(.*?)\*\*/g, replacement: '<strong>$1</strong>' },

    { pattern: /__(.*?)__/g, replacement: '<u>$1</u>' },

    { pattern: /~~(.*?)~~/g, replacement: '<s>$1</s>' },

    { pattern: /`([^`]+)`/g, replacement: '<code>$1</code>' },

    { pattern: /\[(.*?)\]\((.*?)\)/g, replacement: '<a style="color:#00AAFC " href="$2">$1</a>' },

    { pattern: /(https?:\/\/[^\s]+)/g, replacement: '<a style="color: #00AAFC" href="$1">$1</a>' },

    { pattern: /\n/g, replacement: '<br />' },

    { pattern: /(^|\s)```([a-z]+)?\n([\s\S]+?)\n```($|\s)/gm, replacement: '<pre>$3</pre>' },

    { pattern: /(_)([^_]+)(_)/g, replacement: '<em>$2</em>' },

    { pattern: /(\*\*)([^*]+)(\*\*)/g, replacement: '<strong>$2</strong>' },

    { pattern: /(\*)([^*]+)(\*)/g, replacement: '<em>$2</em>' },

  ];

  replacements.forEach(({ pattern, replacement }) => {

    text = text.replace(pattern, replacement);

  });

  return text;

}

if (typeof module !== 'undefined') {

  module.exports = { parse };

}
