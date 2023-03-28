function convertToJSON(name, lastName, hairColor){

    let person = {
        name,
        lastName,
        hairColor
    };

    let personAsJSON = JSON.stringify(person);
    console.log(personAsJSON);

};
convertToJSON('George', 'Jones', 'Brown')