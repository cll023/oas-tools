'use strict';

var pets = [{
    name: "Wrong", /* This object doesn't match the requirements of the specification file, the warning should be printed! */
    tag: "Wrong object as it doesn't have id"
  },
  {
    id: "1",
    name: "Wolf",
    tag: "Barks at the moon"
  },
  {
    id: "2",
    name: "Cat",
    tag: "Boring animal"
  },
  {
    id: "3",
    name: "Rabbit",
    tag: "Eats carrots"
  },
  {
    id: "4",
    name: "Bat",
    tag: "Ozzy's breakfast"
  }
]

exports.createPets = function(args, res, next) {
  var newPet = {
    id: "5",
    name: "newPet",
    tag: "just for testing..."
  };
  pets.push(newPet);
  res.status(201).send();
}

exports.listPets = function(args, res, next) { // the following two work the same way:
  //res.status(200).end(JSON.stringify(pets));
  res.status(200).send(pets);
}

exports.pets = pets;