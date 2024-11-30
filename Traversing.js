let book = { title: "The Hobbit", 
    author: "J.R.R. Tolkien", 
     year: 1937 };
     let string=""
     for(let key in book){
      string=string+ `${key}:${book[key]}  `
     }
     console.log(string)