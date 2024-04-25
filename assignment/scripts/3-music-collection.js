console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line

const myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  const record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(record);
  return record;
}

console.log(
  addToCollection(
    myCollection,
    "Because the Internet",
    "Childish Gambino",
    2013
  )
);
console.log(
  addToCollection(myCollection, "AT.LONG.LAST.ASAP", "Childish Gambino", 2015)
);
console.log(
  addToCollection(myCollection, "Is a Real Boy", "Say Anything", 2005)
);
console.log(addToCollection(myCollection, "EGGY POCKET", "Bilmuri", 2020));
console.log(
  addToCollection(myCollection, "you'll be fine", "Hot Mulligan", 2020)
);
console.log(addToCollection(myCollection, "Welcome Home", "Aries", 2019));
console.log(myCollection);

function showCollection(collection) {
  //just for kicks
  // for...in looping over objects. returns an array of the object keys.
  // const objectKeysArray = Object.keys(myObj);
  for (let album of collection) {
    // console.log(
    //   
    //   " by ",
    //   collection[index]["artist"],
    //   " published in ",
    //   collection[index]["yearPublished"]
    // );
    // console.log('My Album', album);
    console.log(`${album.title} by ${album.artist} published ${album.yearPublished}`)
  }
}

showCollection(myCollection);

function findByArtist(collection, artist) {
  let foundArtist = [];
  for (let art of collection) {
    // 'art' represents {title: '', yearPublished: '', artist: ''}
    if (art.artist === artist) {
      foundArtist.push(art);
    }
  }
  return foundArtist;
}
console.log(findByArtist(myCollection, "Childish Gambino"));
console.log(findByArtist(myCollection, "Prince"));

let searchCriteria = {
  artist: 'Ray Charles',
  year: 1957,
};

function search(collection, searchCriteria) {
  let matchedAlbums = [];
  // 1. loop collection
  // 2. check seachCriteria
  if (!searchCriteria || Object.keys(searchCriteria).length === 0 || !searchCriteria.artist || !searchCriteria.year) {
    //bail out of the function before entering the for..of loop. more efficient
    return collection;
  }
  for (let i = 0; i < collection.length; i++) {
  if(collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.year) {
    matchedAlbums.push(collection[i]);
  }
  }
  return matchedAlbums;
};

console.log(search(myCollection, {
  artist: 'Ray Charles',
  year: 1957,
}));
console.log(search(myCollection, {artist: 'Hot Mulligan', year: 2020}));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== "undefined" ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== "undefined" ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== "undefined" ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== "undefined" ? findByArtist : undefined,
    search: typeof search !== "undefined" ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
