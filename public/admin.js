// await fetch('http://127.0.0.1:3001/listBooks',{
// method: "PATCH",
// headers: {'Content-Type: application/json'},
// body: JSON.stringify(
// {
//     id: 3,
//     title: "The Legends of Arathrae",
//     year: 2016,
//     description: "This anthology tells the intertwined narratives of six fairy tales.",
//     quantity: 8,
//     imageURL: "/assets/arathrae.jpeg"
// })

// })

// ***Retrieve a list of books from the server.
async function main(){
//let response = await fetch('http://127.0.0.1:3001/listBooks')
let response = await fetch('http://localhost:3001/listBooks')
let bookList = await response.json()
bookList.forEach(displayList)
}


function displayList(book){
    let root = document.querySelector('#root')
// ***Display a list of book titles to the admin.
    let li = document.createElement('li')
    li.textContent = book.title
// ***Place a text input next to each book title.
    let quantityInput = document.createElement('input')
// ***Give each text input a value: the quantity of the associated book.
    quantityInput.value = book.quantity
// ***Place a submit button next to each text input.
    let saveButton = document.createElement('button')
    saveButton.textContent = 'Submit'
// ***When the submit button is clicked, retrieve the quantity from 
// ***the associated text input and save the updated quantity to the server.
    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })

    li.append(quantityInput, saveButton)

    root.append(li)

}
main()





