let users = [];





//* If the user chooses to sign up

// // Email
// function email(email) {
// let checkForEmailSpaces = email.replace(/\s/g, "").toLowerCase();
// if (checkForEmailSpaces.length > 10 && checkForEmailSpaces.includes('@')) {
//     return checkForEmailSpaces;
// }else{
//     alert("Your email address must contain at least 10 characters and an @ symbol."); 
// }
// }
// let finalValidEmail = null;

// Password
// function password(password) {
// if (!password.includes(" ") && password.length >= 7 && /[@#\-+*/]/.test(password)) {
//     return password;
// }
// else{
//     alert("Invalid password: Minimum 7 characters, no spaces, and at least one special character (@, #, -, +, *, /) required.");
// }
// }
// let finalValidPassword = null;


// function confirmedPass(confirmedPass) {
// if (tritedpassword === confirmedPass) {
//     // confirmed = confirmedPass
//     return true;
// }else{
//     // console.log("you are blocked");
//     alert("Password do not match!");
//     return false;
// }
// }

// let userEmailValue;
// let userPasswordValue;

// while (true) {
//     let userEmail = email(prompt("Enter your email:"));
//     if (userEmail) {
//         userEmailValue = userEmail;
//         finalValidEmail = userEmailValue; 
//         alert("Your Email: " + userEmailValue + " Was Saved");
//         break;
//     }
// }
// while (true) {
//     let userPassword = password(prompt("Enter your password:"));
//     if (userPassword) {
//         userPasswordValue = userPassword;
//         tritedpassword = userPasswordValue;
//         if (confirmedPass(prompt("Confirm Your Password:"))) {
//             finalValidPassword = userPasswordValue;
//             alert("Your Password: " + userPasswordValue + " Was Saved");
//             break;
//     }
// }
// }

// users.push({
//     FullName: userNameValue,
//     loginEmail: finalValidEmail,
//     loginPassword: finalValidPassword
// });
// console.log(users);

// // age 
// function age(age) {
// if (typeof (age === Number) && age != 0 && age.toString().length <= 2) {
//     let removeAgeSpaces = age.toString().replace(/\s/, "");
//     // console.log(removeAgeSpaces);
// }
// }
// age(22)
// console.log(users);



// //* If the user chooses to log in

// // let usersDb = []
// // let users = []
// let loginEmail = prompt("Enter LogIn Email : ");

// let findEmail = users.find(em => em.loginEmail === loginEmail);
// if (findEmail) {
//     console.log("correct email"); 
// }
// let loginPassword = prompt("Enter Login Password : ");

// let findPassword = users.find(em => em.loginPassword === loginPassword);
// if (findPassword) {
//     console.log("correct password"); 
// }

//* change the password
// let users = [{loginEmail: 'elgaddouri@gmail.com', loginPassword: '1111@1111'},{loginEmail: 'med@icloud.com', loginPassword: '9999@9999'}];

// let associatedEmailPass = prompt("Entering The Email Address Associated With Your Account : ");
// let searchForEmail = users.find(associateEmail => associateEmail.loginEmail === associatedEmailPass)
// let changePass = prompt("Change Your Account Password : ");
// searchForEmail.loginPassword = changePass
// // console.log(searchForEmail);
// console.log(users);


//* login dashboard

while (true) {
    let dashboard = prompt(`
1 - Logout
2 - Withdraw Money
3 - Deposit Money
4 - Take a Loan
5 - Invest
6 - History
`);

    if (dashboard === "1" || dashboard === "Logout" || dashboard === "logout" || dashboard === "log out") {
        break;
    }   
    if (dashboard === "2" || dashboard === "Withdraw" || dashboard === "withdraw") {
        continue; // show the menu again
    }
    if (dashboard === "3" || dashboard === "Deposit" || dashboard === "deposit") {

    }
    if (dashboard === "4" || dashboard === "Loan" || dashboard === "loan") {

    }
    if (dashboard === "5" || dashboard === "Invest" || dashboard === "invest") {

    }
    if (dashboard === "6" || dashboard === "History" || dashboard === "history") {

    }   
}

