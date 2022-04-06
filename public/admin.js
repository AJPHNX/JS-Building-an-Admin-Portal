// await fetch('http://127.0.0.1:3001/listBooks',{
// method: "PATCH",
// headers: 'Content-Type: application/json',
// body: JSON.stringify(
// {
//     "id": 3,
//     "title": "The Legends of Arathrae",
//     "year": 2016,
//     "description": "This anthology tells the intertwined narratives of six fairy tales.",
//     "quantity": 8,
//     "imageURL": "/assets/arathrae.jpeg"
// })

// })

// ***Retrieve a list of books from the server.
async function main(){
let response = await fetch('http://127.0.0.1:3001/listBooks')
let bookList = await response.json()
console.log(bookList)
}

// ***Display a list of book titles to the admin.
async function displayList(){


}
main()

// ***Place a text input next to each book title.

// ***Give each text input a value: the quantity of the associated book.
// ***Place a submit button next to each text input.
// ***When the submit button is clicked, retrieve the quantity from the associated text input and save the updated quantity to the server.