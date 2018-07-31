// g : 最後まで検索する
// global
var text = "114514";
console.log("text : " + text);

// replace(pat1, pat2) : pat1をpat2に置換する
console.log("text.replace(/1/,'e') : " + text.replace(/1/, "e"));
console.log("text.replace(/1/g,'e') : " + text.replace(/1/g, "e"));
