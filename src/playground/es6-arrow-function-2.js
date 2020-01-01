// argument object - no longer bound with arrow function

const add = (a,b)=> {
    //console.log(arguments);
    return a+b;
}

console.log(add(3,4,1001));
// this keyword - no longer bound
const user = {
    name: "Abhinav",
    cities: ["Noida","Gurgaon","Nainital"],
    printPlacesLived(){
        // console.log(this.name);
        // console.log(this.cities);
        //const that=this;

        // this.cities.forEach(function(city){
        //     console.log(that.name+' has lived in '+city);
        // });
        return this.cities.map((city)=> this.name + ' has lived in ' + city);
        // this.cities.forEach((city)=>{
        //     console.log(this.name+' has lived in '+city);
        // });
        //return cityMessages;
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [10,20,30],
    multiplyby: 3,
    multiply(){
        return this.numbers.map((number)=>number*this.multiplyby);
    }
}
console.log(multiplier.multiply())