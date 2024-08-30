// //This validation use for Registerpage..


// function registervalidation(event) {
//   event.preventDefault(); // Prevent the default form submission
//   let userName = document.forms["Formfill"]["userName"].value;
//   let email = document.forms["Formfill"]["email"].value;
//   let password = document.forms["Formfill"]["password"].value;
//   //let cPassword = document.forms["Formfill"]["cPassword"].value;
//   let phone = document.forms["Formfill"]["phone"].value;

//   let result = document.getElementById("result");

//   // Validate username
//   if (userName === "") {
//     result.innerHTML = "Enter Username";
//     return false;
//   } else if (userName.length < 6) {
//     result.innerHTML = "At least six letters";
//     return false;
//   }

//   // Validate mobile no
//   var mobileRegex = /^\d{10}$/;
//   if (!mobileRegex.test(phone)) {
//     result.innerHTML = "Please enter a valid mobile no";
//     return false;
//   }

//   // Validate email format
//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     result.innerHTML = "Please enter a valid email address";
//     return false;
//   }

//   // Validate password format
//   var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/;
//   if (!passwordRegex.test(password)) {
//     result.innerHTML = "Password must be at least uppercase , lowercase , number, and one special character";
//     return false;
//   }

//   /*     // Validate password match
//        if (password!== cPassword) {
//          result.innerHTML = "Passwords do not match*";
//          return false;
//        }*/

//   // Show the popup
//   let popup = document.getElementById('popup');
//   popup.classList.add("open-slide");
//   result.innerHTML = ""; // Clear the error message
//   return true; // Allow the form to submit
// }

// function CloseSlide() {
//   let popup = document.getElementById('popup');
//   popup.classList.remove('open-slide');
// }

