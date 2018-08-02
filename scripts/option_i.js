// i : 大文字小文字を区別しない
var text = "Aa";
console.log("text : " + text);

// replace(pat1, pat2) : pat1をpat2に置換する
console.log("text.replace(/a/,'z') : " + text.replace(/a/, "z"));
console.log("text.replace(/a/i,'z') : " + text.replace(/a/i, "z"));
