
class Student{
    constructor(name,age,cgpa){
        this.name=name;
        this.age=age;
        this.cgpa=cgpa;

    }

    study(){
        console.log(`${this.name}is studying`);
    }
}

const student1=new Student("meow",30,5.6);
const student2=new Student("Dog",25,3.2);

student1.study();
console.log(student1.name," ",student1.age," ",student1.cgpa);
console.log(student2.name," ",student2.age," ",student2.cgpa);
