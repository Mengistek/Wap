   let libraryBooks = [
     { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
     { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
     { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
     {
       title: "Mockingjay: The Final Book of The Hunger Games",
       author: "Suzanne Collins",
       libraryID: 3257,
     },
   ];

   // addBook, which will take title, author, and libraryID as inputs. It will create a new book object and add it to the
// library. addBook should return the newly created book.
  

//  ********** 1, A  ******


function addBooks(title, author, libraryID) {
  const newBook = { title, author, libraryID };
  libraryBooks.push(newBook);
  return newBook;
}
console.log(
  "newly created : ",
  addBooks("A Wake To Remeber", "Robert.D", 5678)
);



// ******** 1 B *********
let filterTitile = libraryBooks  
  .map((m) => m.title);
console.log("title book",filterTitile);

// ********* 1 C **********



function filterBooks(input) {
  let books = libraryBooks.filter((f) =>
    f.title.toLowerCase().includes(input.toLowerCase())
  );
  books.sort((x, y) => x.author.localeCompare(y.author));
  return books;
}

let maching = "The";
console.log("filter Books and sort by author :", filterBooks("The"));

//  *********   2 **********

function myMap(arr, fun) {
  const mappedArray = [];

  arr.forEach((element, index, array) => {
    mappedArray.push(fun(element, index, array));
  });

  return mappedArray;
}

const words = ["Mengs", "Silbana", "Adam"];

const getWordLength = function (word) {
  return word.length;
};

const wordLengths = myMap(words, getWordLength);

console.log("Original Words:", words);
console.log("Word Lengths:", wordLengths);
