// Maps challenge

//Below is a list of Oscar-winning Best Pictures from the last several years.
// 2013 - "Argo"
// 2014 - "12 Years a Slave"
// 2015 - "Birdman"
// 2016 - "Spotlight"
// 2017 - "Moonlight"
// 2018 - "The Shape of Water"
// 2019 - "Green Book"
// 2020 - "Parasite"


//1. Create a new Map object with the Best Pictures list from above.
//Make sure your keys are the year, BUT they can be any format.
const bestPictures = new Map();
bestPictures.set(2013, 'Argo');
bestPictures.set(2014, '12 Years a Slave');
bestPictures.set(2015, 'Birdman');
bestPictures.set(2016, 'Spotlight');
bestPictures.set(2017, 'Moonlight');
bestPictures.set(2018, 'The Shape of Water')
bestPictures.set(2019, 'Green Book');
bestPictures.set(2020, 'Parasite');


//2. What film won best picture in 2015?
const bp2015 = bestPictures.get(2015);
console.log(`best film in 2015 was ${bp2015}`)


//3. Does this list contain Best Picture from 2010? 2018?
const threeA = bestPictures.has(2010)
const threeB = bestPictures.has(2018)
console.log(`does this list contain picture from 2010 ${threeA}`);
console.log(`is 2018 on this list? ${threeB}`);


//4. How many films are included in this list?
const four = bestPictures.size
console.log(four);


//5. What is the second key in this movies Map object?
const bpKeys = bestPictures.keys();
bpKeys.next();
const secondKey = bpKeys.next().value;
console.log(`the second key from the list is ${secondKey}`)


//6. What is the third value in this movies Map object?
const bpValues = bestPictures.values();
bpValues.next();
bpValues.next();
const thirdValue = bpValues.next().value;
console.log(`the third value is ${thirdValue}`);


//7. What is the first set of entries in this movies Map object?
const movieEntries = bestPictures.entries();
movieEntries.next();
movieEntries.next();
const thirdEntry = movieEntries.next().value;
console.log(`the third movie entry is ${thirdEntry}`);


//8. Loop over the map, and if the movie won Best Picture before 2017, 
//log it in the console. Include the year and the movie.
bestPictures.forEach((value, key) => {
    if (key < 2017) {
        console.log(`the movie that won before 2017 was ${key}: ${value}`);
    }
});


//9. Delete the Best Picture from 2013 from your movies Map object.
//console.log(`did the function work?`, bestPictures.delete(2013));


//10. Clear your movies Map object. 
//bestPictures.clear();
//console.log(bestPictures.size);

