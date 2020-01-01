var nameVar='Abhinav';
var nameVar='Pandey';//var based variable can be reassigned as well as redefined

console.log('nameVar',nameVar);
let nameLet='Arpit';//let based variable can only be reassigned
console.log('nameLet',nameLet);

const nameConst = 'Frank';//cannot be reassigned and redefined
console.log('nameConst',nameConst)

function getPetName(){
    var petName='Hal';
    return petName;
}

const petName=getPetName();
console.log(petName);


//Block scoping
const fullname = 'Abhinav Pandey';
let firstName;
if(fullname){
     firstName=fullname.split('')[0];
    //console.log(firstName);
}
//console.log(firstName);