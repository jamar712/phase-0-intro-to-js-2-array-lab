// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyApprendCat(name){
    cats.pop(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
  cats.pop(name)  
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
function appendCat(name){
   const copyofcats = [...cats,name];
   return copyofcats;
}
function prependCat(name){
    const copyofcats = [name, ...cats];
    return copyofcats;
}
function removeFirstCat(name){
    const copyofcats = cats.slice(1);
    return copyofcats;
}
function removeLastCat(name){
    const copyofcats = cats.slice(0, cats.length - 1);
    return copyofcats;
}