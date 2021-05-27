const person = () => {
  var saveName = "Name";
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};

let newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Hello");
console.log(newPerson.getName());

// usando propiedades

const person = () => {
  let name = "Name";

  return {
    get name() {
      return name;
    },

    set name(value) {
      name = value;
    },
  };
};

const newPerson = person();
console.log(newPerson.name);
newPerson.name = "Jousmo";
console.log(newPerson.name);
