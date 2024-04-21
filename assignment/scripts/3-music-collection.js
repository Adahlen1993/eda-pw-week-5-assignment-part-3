console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

const myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  this.collection = collection;
  this.title = title;
  this.artist = artist;
  this.yearPublished = yearPublished;
  let record = {
    collection: this.collection,
    title: this.title,
    artist: this.artist,
    yearPublished: this.yearPublished
  };
  myCollection.push(record);
  return myCollection[myCollection.length-1];

  
}
console.log(addToCollection('rap', 'because the internet', 'childish gambino', 2013));
addToCollection('rap', 'At.Long.Last.ASAP', 'A$AP Rocky', 2015);
console.log(myCollection);
addToCollection()





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
