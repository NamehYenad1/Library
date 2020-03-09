// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);



});

// LogInScreen = document.querySelector('#login-div');
// MainContent = document.querySelector('#mainContent');
// body = document.querySelector('#body');
// email_input = document.querySelector('#email_input');
// password_input = document.querySelector('#password_input');
// //set up dom
// const tbody = document.querySelector('tbody');

//create book object
function Book(Title, Author, Pages, Read, Owner, UniqueId) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.UniqueId = UniqueId
    if (Read == true) {
        this.Read = 'Yes';

    } else if (Read == false) {
        this.Read = 'No';
    }

    this.Owner = Owner;
}



//create method to use in auth.js
const dataBaseItems = function(data) {
    //if theres data means there user in auth so it means user is logged in
    if (data.length) {


        let ArrayOfBooks = [];
        let html = '';

        //iterate thorugh the snapshot.docs(firebase)
        data.forEach(doc => {
            const book = doc.data();

            //check if the owner is same as current user and if it is create a new book object with the current snapshot data and push it into a array
            if (book.Owner == auth.currentUser.uid) {
                newBook = new Book(book.Title, book.Author, book.Pages, book.Read, book.Owner, doc.id);

                ArrayOfBooks.push(newBook);

            }
        });

        //itereate through the array  and create the html
        ArrayOfBooks.forEach(book => {
            console.log(book);

            const tr = `
        <tr class='grey lighten-4 Trbody' >
            <td> 
                ${book.Title}
            </td>
    
            <td> 
            ${book.Author}
            </td>
    
            <td> 
            ${book.Pages}
            </td>
    
            <td> 
            ${book.Read}
            </td>
    
            <td> 
            
            <button id ="Edit" data-value="${book.UniqueId}" class="edit btn teal lighten-2 z-depth-0 modal-trigger " style ="min-width:80px"data-target="modal-edit">Edit</button>
            
            <button id ="Delete" data-value="${book.UniqueId}" class="delete btn teal lighten-2 z-depth-0 ">Delete</button>
          </td>
    
        </tr>
        `;

            //set the html to the tbody
            html += tr;
            tbody.innerHTML = html;

        });
    }

    //if no data set the classlist to show the login page instead
    else {


    }


}