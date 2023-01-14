// examples of coding without ES6 classes

const police_officer = {
  name: "Paul",
  age: 35,
  height: 170,
  gender: "male",
  ocupation: "police officer",
  years_of_experience: 10,

  tellStory() {
    console.log(
      `Hello, I am ${this.name}, I am ${this.age} years old. 
        I work as a ${this.ocupation}. I have ${this.years_of_experience} years of experience`
    );
  },
};
police_officer.tellStory();

const ballet_dancer = {
  name: "Josephine",
  age: 22,
  height: 170,
  gender: "female",
  ocupation: "ballet dancer",
  years_of_experience: 5,

  tellStory() {
    console.log(`Hello, I am ${this.name}, I am ${this.age} years old. 
        I work as a ${this.ocupation}. I have ${this.years_of_experience} years of experience`);
  },
};
ballet_dancer.tellStory();

//examples of coding with ES6 Classes

class Person {
  constructor(name, age, height, gender, ocupation, years_of_experience) {
    (this.name = name),
      (this.age = age),
      (this.height = height),
      (this.gender = gender),
      (this.ocupation = ocupation),
      (this.years_of_experience = years_of_experience);
  }
  tellStory() {
    console.log(`Hello, I am ${this.name}, I am ${this.age} years old. 
        I work as a ${this.ocupation}. I have ${this.years_of_experience} years of experience`);
  }
}

const chef = new Person("Gabriela", 27, 180, "female", "chef", 3);
const software_engineer = new Person(
  "Bea",
  28,
  170,
  "female",
  "software engineer",
  6
);
chef.tellStory();
software_engineer.tellStory();

// extending classes
// Software Engineer

class SoftwareEngineer extends Person {
  constructor(
    name,
    age,
    height,
    gender,
    years_of_experience,
    expertiseArea,
    programmingLanguage
  ) {
    super(name, age, height, gender, "software engineer", years_of_experience);
    this.expertiseArea = expertiseArea;
    this.programmingLanguage = programmingLanguage;
  }


  tellStory() {
    console.log('state', this.years_of_experience)
    console.log(
      `Hello, I am ${this.name} and I am ${this.age} years old.
            I work as a ${this.ocupation}. I have ${this.years_of_experience} years of experience.
            My expertise area is ${this.expertiseArea} and my main programming language is ${this.programmingLanguage}. 
            `
    );
  }
}

const murilo = new SoftwareEngineer(
  "Gabriela",
  27,
  180,
  "female",
  3,
  "data engineering",
  "Python"
);

const erika = new SoftwareEngineer(
    "Erika",
    30,
    178,
    "female",
    4,
    "front-end development",
    "Javascript"
)
murilo.tellStory();
erika.tellStory();
