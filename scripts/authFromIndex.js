//listen for auth status change 
auth.onAuthStateChanged(user => {

    if (user != null) {
        console.log('User logged in : index  ', user);




    } else {
        console.log('User logged out');
        document.querySelector('#email_input').value = '';
    }


})


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