function getFlag(code) {
  const res = code
    .toUpperCase()
    .split("")
    .map((ch) => 127397 + ch.charCodeAt(0));
  return String.fromCodePoint(...res);
}

console.log(getFlag("CA"));
console.log(getFlag("IN"));
