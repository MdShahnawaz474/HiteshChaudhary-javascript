const nums = [1,2,3,4,5,6,7,8,9,10];

// Arrow function without using {} syntax automatic return value
const myNums = nums.filter((num )=>num>5)
// console.log(myNums);

const mynums2= nums.filter((num)=>{
    return num>4
})

// console.log(mynums2)

// practice

const num1 = [123,1234,1681,1705,2345,1913];

const num2 =num1.filter((num)=>(num>=1681))

//   onsole.log(num2)

const return1 = num1.filter((num)=>{
    return num>=122
})

// console.log(return1);

// Book Values in database:-

 const books= [{
    "book_name": "The Great Gatsby",
    "book_subject": "Classic Literature",
    "book_writer": "F. Scott Fitzgerald",
    "publish_year": 1925
  },
  {
    "book_name": "To Kill a Mockingbird",
    "book_subject": "Classic Literature",
    "book_writer": "Harper Lee",
    "publish_year": 1960
  },
  {
    "book_name": "1984",
    "book_subject": "Dystopian Fiction",
    "book_writer": "George Orwell",
    "publish_year": 1949
  },
  {
    "book_name": "Pride and Prejudice",
    "book_subject": "Classic Literature",
    "book_writer": "Jane Austen",
    "publish_year": 1813
  },
  {
    "book_name": "The Catcher in the Rye",
    "book_subject": "Coming-of-age Fiction",
    "book_writer": "J.D. Salinger",
    "publish_year": 1951
  },
  {
    "book_name": "To the Lighthouse",
    "book_subject": "Modernist Literature",
    "book_writer": "Virginia Woolf",
    "publish_year": 1927
  },
  {
    "book_name": "Brave New World",
    "book_subject": "Dystopian Fiction",
    "book_writer": "Aldous Huxley",
    "publish_year": 1932
  },
  {
    "book_name": "The Hobbit",
    "book_subject": "Fantasy Fiction",
    "book_writer": "J.R.R. Tolkien",
    "publish_year": 1937
  },
  {
    "book_name": "The Lord of the Rings",
    "book_subject": "Fantasy Fiction",
    "book_writer": "J.R.R. Tolkien",
    "publish_year": 1954
  },
  {
    "book_name": "Jane Eyre",
    "book_subject": "Gothic Fiction",
    "book_writer": "Charlotte Brontë",
    "publish_year": 1847
  },
  {
    "book_name": "A People's History of the United States",
    "book_subject": "History",
    "book_writer": "Howard Zinn",
    "publish_year": 1980
  },
  {
    "book_name": "Sapiens: A Brief History of Humankind",
    "book_subject": "History",
    "book_writer": "Yuval Noah Harari",
    "publish_year": 2011
  },
  {
    "book_name": "The Elements of Chemistry",
    "book_subject": "Chemistry",
    "book_writer": "Antoine Lavoisier",
    "publish_year": 1789
  },
  {
    "book_name": "Organic Chemistry",
    "book_subject": "Chemistry",
    "book_writer": "Jonathan Clayden",
    "publish_year": 2000
  },
  {
    "book_name": "JavaScript: The Good Parts",
    "book_subject": "JavaScript",
    "book_writer": "Douglas Crockford",
    "publish_year": 2008
  },
  {
    "book_name": "Eloquent JavaScript",
    "book_subject": "JavaScript",
    "book_writer": "Marijn Haverbeke",
    "publish_year": 2011
  }]

  const Allbooks = books.filter((boo)=>(boo.publish_year===2011))

//   console.log(Allbooks);

  const JavaScriptsubject =  books.filter((jsbook)=>{
    return jsbook === "javascript"
  })

//   console.log(JavaScriptsubject);

  const fiction1= books.filter((book)=>{return book.publish_year>=2011 && book.book_subject==="JavaScript"})

  console.log(fiction1)