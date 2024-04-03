const marvel_heroes = [ "spiderman", "ironman", "thor", "hulk", "captain america"];

const dc_heroes =["superman ", "batman", "wonderwoman", "flash"];

marvel_heroes.push(dc_heroes);

console.log(marvel_heroes);

console.log(marvel_heroes[5][1]);

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);

const all_heroes2 = [...marvel_heroes, ...dc_heroes];

console.log(all_heroes2);

const newArray = [1,2,3,4,[3,5,2,6,[2,4,1,6,8],2,6,8,9],9,9,4];

const anotherArray = newArray.flat(Infinity);

console.log(anotherArray);


console.log(Array.isArray("Ahaan"));
console.log(Array.from("Ahaan"));

console.log(Array.from({name: "Ahaan"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1,score2,score3, score4));

