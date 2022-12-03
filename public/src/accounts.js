function findAccountById(accounts, id) {
  //filter accounts to find matching id
  //returns the account object that has the matching ID
  // let result = accounts.filter((account) => account.id === id )
  // return result
  //filter returning an array but I need to return an object
  let accountObj ={}
  accounts.forEach(account => {  
    if (account.id === id){
        accountObj= {...account} //use spread operator
      }
      return accountObj
    })
 
return accountObj
}

function sortAccountsByLastName(accounts) {
 //return array sorted alphabetically by last name
 //access last names in accounts

  accounts.sort((stringA, stringB) => stringA.name.last.toLowerCase() < stringB.name.last.toLowerCase() ? -1:1 )
  return accounts
  //sort alphabetically

  
}

function getTotalNumberOfBorrows(account, books) {
  //count number of times the account's ID appears in any book's `borrows` array
  //loop through each book's borrows array and keep count
  //return that number
  let count = 0
  books.forEach(book => {
    book.borrows.forEach(borrow => {
      if (borrow.id === account.id){
        count++
      }
      return count
    })
  })

  return count
}

function getBooksPossessedByAccount(account, books, authors) {
  //return array of book objects with author obj nested inside it
  //represents all books currently checked out by given acct

  //check if given id === borrows.id AND returned is false
  let booksPossessedByAcct = []
  books.forEach(book => {
    if (book.borrows[0].id === account.id && book.borrows[0].returned === false){
        booksPossessedByAcct.push(book)
      }
  })


//add author info to book obj
//match author id from books array to authors array
    let booksWithAuth = []
    booksPossessedByAcct.forEach(book => {
      authors.forEach(author => {
        if (book.authorId === author.id){
          let combined = {...book}
          combined["author"] = author
          booksWithAuth.push(combined)
        }

      })
    })

  return booksWithAuth

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
