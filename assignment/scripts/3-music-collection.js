console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

const myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  const record = {
    collection: collection,
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  myCollection.push(record);
  return record;
};

console.log(addToCollection(myCollection, 'Because the Internet', 'Childish Gambino', 2013));
console.log(addToCollection(myCollection, 'AT.LONG.LAST.ASAP', 'Childish Gambino', 2015));
console.log(addToCollection(myCollection, 'Is a Real Boy', 'Say Anything', 2005));
console.log(addToCollection(myCollection, 'EGGY POCKET', 'Bilmuri', 2020));
console.log(addToCollection(myCollection,"you'll be fine", 'Hot Mulligan', 2020));
console.log(addToCollection(myCollection, 'Welcome Home', 'Aries', 2019));
console.log(myCollection);

function showCollection(collection) {
  for (let index in collection) {
    console.log(collection[index]['title'], ' by ', collection[index]['artist'], ' published in ', collection[index]['yearPublished'])
  };
};

console.log(showCollection(myCollection));

function findByArtist(collection, artist) {
  let foundArtist = [];
  for (let art in collection) {
    if (collection[art]['artist'] === artist) {
      foundArtist.push(collection);
    } 

  } return foundArtist;
}
console.log(findByArtist(myCollection, 'Childish Gambino'));
console.log(findByArtist(myCollection, 'Prince'));



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
