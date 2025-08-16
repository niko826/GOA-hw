const people = [
  {
    name: "Nika",
    age: 21,
    talk: function () {
      console.log("Hello im Nika");
    },
    friends: ["dato", "mary", "giorg"],
    address: {
      street: "chavchavze avenu",
      city: "Tbilisi",
      country: "Georigia"
    }
  },
  {
    name: "Giorg",
    age: 17,
    talk: function () {
      console.log("Hello im georg");
    },
    friends: ["luka"],
    address: {
      street: "rustaveli avenu",
      city: "batumi",
      country: "Georgia"
    }
  },
  {
    name: "mary",
    age: 27,
    talk: function () {
      console.log("Hello mary");
    },
    friends: ["nino", "levan"],
    address: {
      street: "Axmachenebeli street",
      city: "kutaisi",
      country: "Georgia"
    }
  },
  {
    name: "dave",
    age: 19,
    talk: function () {
      console.log("Hello im dave");
    },
    friends: ["maxo", "elene", "luka"],
    address: {
      street: "kostava street",
      city: "gori",
      country: "Georgia"
    }
  },
  {
    name: "ana",
    age: 16,
    talk: function () {
      console.log("Hello im ana");
    },
    friends: ["zuka"],
    address: {
      street: "wereteli avenu",
      city: "tbilisi",
      country: "Georgia"
    }
  }
];


const filteredPeople = [];

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  if (person.age > 18 && person.friends.length >= 2) {
    filteredPeople.push(person);
  }
}


console.log("filterd people:");
console.log(filteredPeople);
