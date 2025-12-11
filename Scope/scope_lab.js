// Ambito globale
var globalVar = "Sono una variabile globale";
let globalLet = "Sono anche globale, ma scoping con let";
const globalConst = "Sono una costante globale";


function show(){
// Ambito di blocco
var blockVar = "Sono un var con ambito di blocco";
let blockLet = "Sono un let con ambito di blocco";
const blockConst = "Sono una const con ambito di blocco";

//Block Scope
console.log(blockVar);
console.log(blockLet);
}

show();

// Ambito globale
console.log(globalVar); // Output: "Sono una variabile globale"
console.log(globalLet); // Output: "Sono anche globale, ma con ambito let"
console.log(globalConst); // Output: "Sono una costante globale"