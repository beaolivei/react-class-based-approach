// examples of coding without ES6 classes

const police_officer = {
    name: "Paul",
    age: 34,
    years_of_experience: 5,
    ocupation: "police officer",

    tellStory(){
        console.log(
            `Hello, I am ${this.name}. I am ${this.age} years old.
            I have been working as a ${this.ocupation} for ${this.years_of_experience} years`
        )
    }
}
police_officer.tellStory()

const teacher = {
    name: "Rebeca",
    age: 28,
    years_of_experience: 3,
    ocupation: "teacher",

    tellStory(){
        console.log(
            `Hello, I am ${this.name}. I am ${this.age} years old.
            I have been working as a ${this.ocupation} for ${this.years_of_experience} years`
        )
    }
}
teacher.tellStory()

//examples of coding with ES6 Classes

class Person {
    constructor(name, age, years_of_experience, ocupation){
        this.name = name,
        this.age = age,
        this.years_of_experience = years_of_experience,
        this.ocupation = ocupation
    }
    tellStory(){
        console.log(
            `Hello, I am ${this.name}. I am ${this.age} years old.
            I have been working as a ${this.ocupation} for ${this.years_of_experience} years`
        )
    }
}

const designer = new Person("Carmen", 38, 7, "designer")
const qaengineer = new Person("Gabriel", 20, 1, "QA Engineer")

designer.tellStory()
qaengineer.tellStory()

// Our class Software Engineer that will extend the class Person

class SoftwareEngineer extends Person{
    constructor(name, age, years_of_experience, favorite_language, expertise ){
        super(name, age, years_of_experience, "software engineer");
        this.favorite_language = favorite_language,
        this.expertise = expertise
    }

    tellStory(){
        console.log(
            `Hello, I am ${this.name}. I am ${this.age} years old.
            I have been working as a ${this.ocupation} for ${this.years_of_experience} years.
            My favorite language is ${this.favorite_language} and my area of expertise is ${this.expertise}
            `
        )
    }
}

const macky = new SoftwareEngineer("Macky", 32, 1, "React", "full stack")
const bea = new SoftwareEngineer("Bea", 28, 7, "Javascript", "front-end")
macky.tellStory()
bea.tellStory()
