function oldBooks(input) {
 
    let favBook = input[0];
    let index = 1;
    let bookIsFound = false;
    let nextBookName = input[index];
    index++;
    let counter = 0;
  
    while(nextBookName !== "No More Books") {
      if(nextBookName === favBook) {
        bookIsFound = true;
        break;
    }
        
        counter++;
  
        
        nextBookName = input[index];
        index++;
    }
    if(bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    }else {
        console.log(`You checked ${counter} books and found it.`);
    }
  } 
oldBooks(["Bourne",

"True Story",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"])