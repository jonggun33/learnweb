//////destructuring for dictionary
const man = {
    firstname: 'Gim',
    name: 'j',
    blood: 'A',
    age:33
}
console.log(man);
const {name, age} = man;
console.log(name, age);
const lordify=  ({firstname}) => {
    console.log(`Mr. ${firstname}`)
};
lordify(man)
//////opposite - object literal enhancement
const  a =2;
const elevation = 887;
const funHike = {a, elevation};
console.log(funHike);

////destructuring for list
const l = [1, 2, 4, 8];
console.log(l) 
const [last] = l.reverse();
console.log(last)

/////spread operator
const ll = [...l];
console.log(ll)
const [first, ...rest] = ll;
console.log(rest)
function direction(...args){
    let [start, ...rest] = args;
    console.log(rest);
}
direction(5, 6,23, 4343,44)