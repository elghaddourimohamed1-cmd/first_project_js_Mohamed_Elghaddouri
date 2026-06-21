let users = [];

// fullName
function fullName(fullNameInput) {
    let formatedName = fullNameInput.trim().replace(/\s+/g, " ").toLowerCase().split(" ").map(firstWord => firstWord[0].toUpperCase() + firstWord.slice(1)).join(" ");
    if (formatedName.replace(/\s/g, "").length >= 5 && /^[A-Za-z\s]+$/.test(formatedName)) {
            let checkForNameLength = formatedName
            return checkForNameLength;   
    }else{
        alert("Invalid Name Minimum 5 letters");
        return null;
    }
}
// email
function email(email) {
let checkForEmailSpaces = email.replace(/\s/g, "").toLowerCase();
if (checkForEmailSpaces.length > 10 && checkForEmailSpaces.includes('@')) {
    return checkForEmailSpaces;
}else{
    alert("Your email address must contain at least 10 characters and an @ symbol."); 
}
}
// age 
function age(ageInput) {
if (typeof (ageInput === Number) && ageInput != 0 && ageInput.toString().length <= 2) {
    let removeAgeSpaces = ageInput.toString().replace(/\s/, "");
    // console.log(removeAgeSpaces);
    return removeAgeSpaces; 
}else{
    alert("Invalid age: Please enter a valid age");
}
}
// Password
function password(password) {
if (!password.includes(" ") && password.length >= 7 && /[@#\-+*/]/.test(password)) {
    return password;
}
else{
    alert("Invalid password: Minimum 7 characters, no spaces, and at least one special character (@, #, -, +, *, /) required.");
}
}
let finalValidPassword = null;


function confirmedPass(confirmedPass) {
if (tritedpassword === confirmedPass) {
    // confirmed = confirmedPass
    return true;
}else{
    // console.log("you are blocked");
    alert("Password do not match!");
    return false;
}
}



while (true) {
    let askUser = prompt(`
1 - SignUp
2 - Changing Password
3 - LogIn
`);

    if (askUser === "1" || askUser === "SignUp" || askUser === "signup" || askUser === "sign up") {
// FullName
let userNameValue = null;
while (true) {
let userInputFullName = fullName(prompt("Enter Your Full Name:"));
if (userInputFullName) {
    userNameValue  = userInputFullName; 
    alert("Your Name: " + userNameValue + " Was Saved");
    break;
}
}

// Email
let finalValidEmail = null;
let userEmailValue;
while (true) {
    let userEmail = email(prompt("Enter your email:"));
    if (userEmail) {
        userEmailValue = userEmail;
        finalValidEmail = userEmailValue; 
        alert("Your Email: " + userEmailValue + " Was Saved");
        break;
    }
}


// age
let userAge = null;
while (true) {
let userInputAge = age(prompt("Enter Your Age:"));
if (userInputAge) {
    userAgeValue  = userInputAge; 
    alert("Your Age: " + userAgeValue + " Was Saved");
    break;
}
}

// password
let userPasswordValue;
while (true) {
    let userPassword = password(prompt("Enter your password:"));
    if (userPassword) {
        userPasswordValue = userPassword;
        tritedpassword = userPasswordValue;
        if (confirmedPass(prompt("Confirm Your Password:"))) {
            finalValidPassword = userPasswordValue;
            alert("Your Password: " + userPasswordValue + " Was Saved");
            break;
    }
}
}



users.push({
    FullName: userNameValue,
    loginEmail: finalValidEmail,
    Age: userAgeValue,
    loginPassword: finalValidPassword,
    balance: 10000,
    history: [],
    loanToBePaid: 0,
    investedAmount: 0
});
console.log(users);

    }

    if (askUser === "2" || askUser === "Password" || askUser === "password" || askUser === "Changing Password") {
        let changePass =true;
        while (changePass) {
        let associatedEmailPass = prompt("Entering The Email Address Associated With Your Account (or type 'exit' to quit): ");
        if (associatedEmailPass === "Exit" || associatedEmailPass === "exit" || associatedEmailPass === "Quit"|| associatedEmailPass === "quit" || associatedEmailPass === "q"){
        alert("Password update cancelled.");
        break; 
    }
        let searchForEmail = users.find(associateEmail => associateEmail.loginEmail === associatedEmailPass)
        if (searchForEmail) {
            let changePass = prompt("Change Your Account Password : ");
            let validatePass = password(changePass);
            if (validatePass) {
                searchForEmail.loginPassword = validatePass;
                alert("Password Updated Successfuly");
                break;
            }
        }else{
            alert("This Email Are Not Registered In Our Database.");
        }
        }
    }
    if (askUser === "3" || askUser === "LogIn" || askUser === "login" || askUser === "log in") {
        while (true) {
        let loginEmail = prompt("Enter LogIn Email : ");
        let findEmail = users.find(em => em.loginEmail === loginEmail);
        if (findEmail) {
            console.log("correct email"); 
        
        let loginPassword = prompt("Enter Login Password : ");
        if (findEmail.loginPassword === loginPassword) {
            alert("Login Successful! Welcome Back.");
        } else {
            alert("Incorrect Password Login Failed");
        }
    }else {
        alert("No account found with that email");
    }
}
}

                
                
/////////////////////////////////////////////////

            // }
        //     break;
        // } else {
        //     alert("Incorrect Password Login Failed");
        // }
    // }else {
    //     alert("No account found with that email");
    // }
// }
// }

////////////////////////////////////////////////////




                if (askUser === "exit" || askUser === "Exit" || askUser === "quit" || askUser === "Quit" || askUser === "q" || askUser === "Q") {
                    continue;
                }
                if (askUser === "break") {
                    break;
                }
                
}



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

// while (true) {
//     let dashboard = prompt(`
// 1 - Logout
// 2 - Withdraw Money
// 3 - Deposit Money
// 4 - Take a Loan
// 5 - Invest
// 6 - History
// `);

//     if (dashboard === "1" || dashboard === "Logout" || dashboard === "logout" || dashboard === "log out") {
//         break;
//     }   
//     if (dashboard === "2" || dashboard === "Withdraw" || dashboard === "withdraw") {
//         continue; // show the menu again
//     }
//     if (dashboard === "3" || dashboard === "Deposit" || dashboard === "deposit") {

//     }
//     if (dashboard === "4" || dashboard === "Loan" || dashboard === "loan") {

//     }
//     if (dashboard === "5" || dashboard === "Invest" || dashboard === "invest") {

//     }
//     if (dashboard === "6" || dashboard === "History" || dashboard === "history") {

//     }   
// }
//
