class Person {
    constructor(name="Anonymous",age=0){
        this.name=name
        this.age=age
        console.log("test",name)
    }
    getGreeting()  {
        // return 'Hi! '+this.name
        return `Hi. I am ${this.name}`
    }
    getDescription() {
        return `Hi. I am ${this.name} is ${this.age} years old`
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        //super();
        let description = super.getDescription()
        if(this.hasMajor()){
            description+=` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveller extends Person{
    constructor(name,age,homelocation){
        super(name,age);
        this.homelocation = homelocation;        
    }
    getGreeting(){
      let greeting=super.getGreeting();
      if(this.homelocation){
          greeting +=` I am visiting from ${this.homelocation}.`;
      }
      return greeting;  
    }
} 
 

const me = new Traveller('Abhinav Pandey',28,'Gurgaon');
console.log(me.getGreeting());
//console.log(me.getDescription());


const other = new Student();
console.log(other.hasMajor());
console.log(other.getDescription());

const student=new Person('Abhinav Pandey',28);
console.log(student.getDescription());

