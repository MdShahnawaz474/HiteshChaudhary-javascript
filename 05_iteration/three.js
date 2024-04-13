// for of loop:-
// The for of loop in JavaScript provides an easy and concise way to iterate over iterable objects such as arrays, strings, maps, sets, and more. It simplifies the process of iterating over the elements of these data structures without the need for traditional index-based iteration. The syntax of the for...of loop is as follows:

const name =  ["Ahaan", "Fayyaz","Rehan"]
for (const names of name) {
    console.log(names)
}

const greetings= "Hello World!"

for (const greet of greetings) {
    console.log(greet)
    
};

// Maps:-
// a Map is a built-in data structure that allows you to store key-value pairs where both the keys and the values can be of any data type. It provides a way to associate values with keys and efficiently look up, insert, or remove values based on their corresponding keys.



const map=new Map()
map.set('IN','India')
map.set('USA','United States Of america')
map.set('FR','France')

console.log(map)

// map in for of loop array:-

for (const maps of map) {
    console.log(maps)
} /* Output is show in array*/

// here is one syntac where output will not shows in array :-

for (const [maps2, value] of map) {
    console.log(maps2, ':-', value)
}