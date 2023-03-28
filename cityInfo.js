function cityInfo(city){

    const object1 = city;
      
      for (const [key, value] of Object.entries(object1)) {
        console.log(`${key} -> ${value}`);
      }
};
cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})
