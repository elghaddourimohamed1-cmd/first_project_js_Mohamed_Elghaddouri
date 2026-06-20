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

// age 
function age(age) {
if (typeof (age === Number) && age != 0 && age.toString().length <= 2) {
    let removeAgeSpaces = age.toString().replace(/\s/, "");
    // console.log(removeAgeSpaces);
}
}
age(22)
console.log(users);







