
let DataTable = [
["ID", "BookTitle", "Author", "Price", "Quantity"],
[1, 'Start with why', 'Simon Sinek', 80.0, 13],
[2, 'But how do it know', 'J. Clark Scott', 59.9, 22],
[3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5],
[4, 'Zero to One', 'Peter Thiel', 45.0, 12],
[5, "You don't know JS", 'Kyle Simpson', 39.9, 9]];


function AddBook(BookID,BookTitle, Author, Price, Quantity, DataTable) {
  
  let i = 0;
  let n = DataTable.length;
  DataTable.push(new Array());
  while (i < DataTable[0].length) {
    if (i == 0) {
      DataTable[n].push(BookID);
    } else if (i == 1) {
      DataTable[n].push(BookTitle);
    } else if (i == 2) {
      DataTable[n].push(Author);
    } else if (i == 3) {
      DataTable[n].push(Price);
    } else if (i == 4) {
      DataTable[n].push(Quantity);
    } else {
      console.log('Out of boundry');
    }
    i++;
  }
}

function searchBookByID(BookID, DataTable) {
  for (let i = 1; i < DataTable.length; i++) {
    if (BookID== DataTable[i][0]) {
      let j=0;
       console.log(
`-------------------------------
 (Searching By Book ID Found)
BookID: ${DataTable[i][j++]}
BookName: ${DataTable[i][j++]}
Author: ${DataTable[i][j++]} 
Price: ${DataTable[i][j++]}$
Quantity: ${DataTable[i][j++]}
-------------------------------`);
break;
} 
    }
    
  }


  function  searchBookByTitle(BookTitle, DataTable) {
    for (let i = 1; i < DataTable.length; i++) {
      let j=0;
      if (BookTitle.toLowerCase() ===(DataTable[i][1].toLowerCase() ) ) {
      console.log(`
 -------------------------------
  (Searching By Book Title Found) 
BookID: ${DataTable[i][j++]}
BookName: ${DataTable[i][j++]}
Author: ${DataTable[i][j++]} 
Price: ${DataTable[i][j++]}$
Quantity: ${DataTable[i][j++]}
--------------------------------`);
} 
  }
  }


  function searchBookByAuthor(BookAuthor,DataTable){
    for (let i = 1; i < DataTable.length; i++) {
      let j=0;
      if (BookAuthor.toLowerCase() ===(DataTable[i][2].toLowerCase() ) ) {
        
        console.log(
 `---------------------------------
 (Searching By Book Author Found) 
BookID: ${DataTable[i][j++]}
BookName: ${DataTable[i][j++]}
Author: ${DataTable[i][j++]} 
Price: ${DataTable[i][j++]}$
Quantity: ${DataTable[i][j++]}
--------------------------------`);
break;
} 
}
  }
function buyBook(BookTitle,Quantity,Balance,DataTable){
  
  for (let i=1; i < DataTable.length; i++) {
if(i>=DataTable.length){
  console.log(`Sorry we don't have this book`);
  break
}
     if (BookTitle.toLowerCase() === (DataTable[i][1].toLowerCase()))  {
     if((DataTable[i][4]-Quantity)<0){
        console.log(`Sorry we don't have this Quantity for this book we have only ${DataTable[i][4]}.`);
       } 
      if (Balance < DataTable[i][3] * Quantity){
        console.log(`Sorry your balance is lower than total price.`);
       break;
      }
      
        
  
  console.log(`
  Thank you for Order.
  You have Order: (${BookTitle}) 
  Quantity: ${Quantity}
  Price for one book: ${DataTable[i][3]}$
  Your Balance: ${Balance}$
  --------------------------
  Totall price: ${DataTable[i][3]*Quantity}$
  Balance after Purches: ${Balance-DataTable[i][3]*Quantity}
   `); 
   //DataTable[i][4]-=Quantity;   Decrease Quantity.
         break;
      }
  
      }
      
    } 
    
  
function PrintArray(DataTable) {
  for (let i = 1; i < DataTable.length; i++) {
       let j=0;
        console.log( `
-----------------------------------
BookID: ${DataTable[i][j++]}
BookName: ${DataTable[i][j++]}
Author: ${DataTable[i][j++]} 
Price: ${DataTable[i][j++]}$
Quantity: ${DataTable[i][j++]}
----------------------------------`)
}
  }
  
// AddBook(6,'THINK AND GROW RICH', 'NAPOLEON HILL', 1.0, 100,DataTable);
//   AddBook(7,'Why We Sleep','Matthew Walker',15,6,DataTable);


// searchBookByTitle('Why We Sleep',DataTable);
// searchBookByTitle('Zero to One',DataTable);

// searchBookByAuthor('Matthew Walker',DataTable);
// searchBookByAuthor('Kyle Simpson',DataTable);

// searchBookByID(2,DataTable);
// searchBookByID(6,DataTable);
// searchBookByID(7,DataTable);
// buyBook('THINK AND GROW RICH',95,100,DataTable);
// console.log('--------');
// buyBook('THINK AND GROW RICH',100,10,DataTable);
// console.log('--------');
// buyBook('THINK AND GROW RICH',105,100,DataTable);

// PrintArray(DataTable);
