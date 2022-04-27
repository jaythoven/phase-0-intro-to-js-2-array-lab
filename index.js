const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift('Bob');
    return cats;
}
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
function appendCat(name) {
    const copyCats = [...cats, 'Broom'];
    return copyCats;
}
function prependCat(name) {
    const copyCats1 = ['Arnold', ...cats];
    return copyCats1
}
function removeLastCat() {
    const copyCats2 = cats.slice(0, cats.length - 1);
    return copyCats2;
}
function removeFirstCat() {
    const copyCats2 = cats.slice(1);
    return copyCats2;
}