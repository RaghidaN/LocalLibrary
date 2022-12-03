function findAuthorById(authors, id) {
  //returns the author object that has the matching ID
  //find author with matching id
  let specAuthor = authors.find(author => author.id === id)
  return specAuthor
}

function findBookById(books, id) {
  //return book object that corresponds to given id
  let specBook = books.find(book => book.id === id)
  return specBook
}

function partitionBooksByBorrowedStatus(books) {
  //check for the return status by looking at the first transaction object in the `borrows` array
  //return two arrays: booksOut and booksReturned, within 1 array
  let booksOut = books.filter(book => book.borrows[0].returned === false)
  let booksReturned = books.filter(book => book.borrows[0].returned === true)


  return [booksOut, booksReturned]

}

function getBorrowersForBook(book, accounts) {
  //return 10 or fewer account objects
  let borrowersForBook = []
  book.borrows.forEach(borrower => {
    accounts.forEach(account =>{
      if (account.id === borrower.id){
        let acctWithReturn = {...account}
        acctWithReturn.returned = borrower.returned
        borrowersForBook.push(acctWithReturn)
      }
    })
  })

  //return 10 or fewer
  let limitedBorrowers = []
  for (let i=0; i<10 ; i++){
    limitedBorrowers.push(borrowersForBook[i])
  }

  return limitedBorrowers
    
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
