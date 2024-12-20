const marvelHeros = ["IronMan", "Thor", "SpiderMan"]
const dcHeros = ["Batman", "Superman", "flash"]

//marvelHeros.push(dcHeros)
//console.log(marvelHeros);

const allHeros = marvelHeros.concat(dcHeros)
//console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros]
//console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 4], [6, 7, [4, 6,]], 9]
//console.log(anotherArray.flat(1));

console.log(Array.isArray("Irfan"))
const convertArray = Array.from("Irfan")
console.log(Array.isArray(convertArray))
console.log(convertArray);

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));





