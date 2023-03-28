function catsInfo(catArray){

    let cats = [];

    class Cats {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
    };
    for(let i = 0; i<catArray.length; i++){
        let catData = catArray[i].split(' ');
        let [name, age]= catData;
        cats.push(new Cats(name, age));
    };

    meow(cats);
};
function meow(cats){
    for(let i = 0; i < cats.length; i++){
        console.log(`${cats[i].name}, age ${cats[i].age} says Meow`);
    }
    
};
catsInfo(['Mellow 2', 'Tom 5'])