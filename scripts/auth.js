LogInScreen = document.querySelector('#login-div');
MainContent = document.querySelector('#mainContent');
body = document.querySelector('#body');
email_input = document.querySelector('#email_input');
password_input = document.querySelector('#password_input');
//set up dom
const tbody = document.querySelector('tbody');



//listen for auth status change 
auth.onAuthStateChanged(user => {

    if (user) {
        console.log('User logged in auth :', user.uid);
        //get data

        //set the classes to change the ui from login page to content page


        db.collection('BookInfo').onSnapshot(snapshot => {
            console.log(snapshot.docs);
            dataBaseItems(snapshot.docs);
            MainContent.classList.remove('hidden');
            LogInScreen.classList.add('hidden');
            body.classList.remove('loginActive');
        });


    } else {
        dataBaseItems([]);
        email_input.value = '';
        password_input.value = '';
        MainContent.classList.add('hidden');
        LogInScreen.classList.remove('hidden');
        body.classList.add('loginActive');


        console.log('User logged out');



    }


})

//create new book
const CreateForm = document.querySelector('#create-form');
const checkBox = document.querySelector('#Read');
CreateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var TF;
    if (checkBox.checked == true) {
        TF = true;

    } else {
        TF = false;
    }

    db.collection('BookInfo').add({

        Author: CreateForm.Author.value,
        Owner: auth.currentUser.uid,
        Pages: CreateForm.Pages.value,
        Read: TF,
        Title: CreateForm.title.value
    }).then(() => {
        //close modal and reset form
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        CreateForm.reset();
    })

});




// //sign up 
// const signupForm = document.querySelector('#signup-form');
// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     //get user info 

//     const email = signupForm['signup-email'].value;
//     const password = signupForm['signup-password'].value;

//     //sign up user
//     //able to use auth as i created auth before add this script in the html

//     auth.createUserWithEmailAndPassword(email, password).then(cred => {
//         //console.log(cred);
//         const signUpmodal = document.querySelector('#modal-signup');
//         M.Modal.getInstance(signUpmodal).close();
//         signupForm.reset();
//     })

// })

//log out user
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        // window.location = '/index.html';
        //console.log('user signed out');
    });
})


// //log in user 
// const signinForm = document.querySelector('#login-form');
// signinForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     //get User inputs
//     const email = signinForm['login-email'].value;
//     const password = signinForm['login-password'].value;


//     auth.signInWithEmailAndPassword(email, password).then(cred => {
//         // console.log(cred);
//         const modal = document.querySelector('#modal-login');
//         M.Modal.getInstance(modal).close();
//         signinForm.reset();
//     });

// })




//log in user from index 
const signInButtonIndex = document.querySelector('#LoginButton');

signInButtonIndex.addEventListener('click', (e) => {
    console.log('hi');
    e.preventDefault();
    const email = document.querySelector('#email_input').value;
    const password = document.querySelector("#password_input").value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {


    })

})


//sign up user from index 
const signUpButton = document.querySelector('#SignUpButton');
signUpButton.addEventListener('click', (e) => {
    console.log('hi');
    e.preventDefault();
    const email = document.querySelector('#email_input').value;
    const password = document.querySelector("#password_input").value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {

    })

})