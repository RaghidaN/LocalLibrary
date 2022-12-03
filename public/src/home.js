function getTotalBooksCount(books) {
  //return number of book objects inside books array
  const numOfBooks = books.length
  return numOfBooks
}

function getTotalAccountsCount(accounts) {
  //return number of account objects inside array
  const numOfAccounts = accounts.length
  return numOfAccounts
}

function getBooksBorrowedCount(books) {
  //returns number of books currently out
  let booksOut = books.filter(book => book.borrows[0].returned === false)
  const numBooksOut = booksOut.length

  
  return numBooksOut
}

function getMostCommonGenres(books) {
  //return object with length<5, ordered most common to least
  //each object in area has 2 keys, name and count
  //name of genre and number of times the genre occurs



  //pull out list of genres
  let genres = books.map(book => book.genre)

  //count occurrences of genre, for each genre
  
  const count = {};

  for (const element of genres) {
    if (count[element]) {
      count[element] += 1
    } else {
      count[element] = 1
    }
  } 

  //returns one big object, need to split into individual objects
  
  let genreCount =[]
  let counts = Object.values(count)
  let keys = Object.keys(count)

  for (let i =0; i<counts.length; i++){
    let keyWord = keys[i]
    genreCount.push({"name":keyWord, "count": counts[i]})

  }


  //sort genres, most common to least, using helper function
  let result = sortedLargestFirst(genreCount)

  //return top 5 count objects
  let top5genres = []
  for (let i=0; i<5 ; i++){
    top5genres.push(result[i])
  }

  return top5genres

}

function getMostPopularBooks(books) {
//create array of book names
  let bookNames = books.map(book => book.title)

//find number of book borrows for each book
  let bookBorrows =[]
  books.forEach(book =>{
    bookBorrows.push(book.borrows.length)
  })

//create objects with titles and number of times borrowed
  let bookObjs = []
  for (let i =0; i<bookBorrows.length; i++){
    bookObjs.push({"name":bookNames[i], "count": bookBorrows[i]})

  }

//sort books using helper function
let result = sortedLargestFirst(bookObjs)
//return top 5 count objects
  let top5genres = []
  for (let i=0; i<5 ; i++){
    top5genres.push(result[i])
  }

  return top5genres 


}

function getMostPopularAuthors(books, authors) {

  //find number of book borrows for each book, according to author
  let bookBorrows = {}
  books.forEach(book =>{
    bookBorrows[book.authorId] = book.borrows.length
  })

let authWithBook = []
authors.forEach(author => {
  for (let authID in bookBorrows){
    if (parseInt(authID) === author.id){
      let authname = author.name.first + " " + author.name.last
      authWithBook.push({"name":authname, "count": bookBorrows[authID]})
    }
  }
  })
  

  let result = sortedLargestFirst(authWithBook)
  //return top 5 count objects
  let top5auth = []
  for (let i=0; i<5 ; i++){
    top5auth.push(result[i])
  }

  return top5auth
  
}

function sortedLargestFirst(result) {
  result.sort((a,b) => b.count - a.count)
  return result

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
  sortedLargestFirst
};
