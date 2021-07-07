//javaScript Guide-lines

// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
let submit = document.getElementById('submit-button');

// <input type="text" id="fullname">,
let fName = document.getElementById('fullname');

// <input type="text" id="email">
let email = document.getElementById('email');

// <textarea id="message"></textarea>
let message = document.getElementById('message');

// Declare variable that will 
// store regular expression for email
let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


// READY TO START CODING
// Start with your function here

//******
function collectData() {}

submit.addEventListener('click', collectData);

//prevent default clear input submit finction: 
let fm = document.getElementById('submission');

function formValidator(ev) {
   ev.preventDefault();

   // Trim input values
   fName.value = fName.value.trim();
   email.value = email.value.trim();
   message.value = message.value.trim();


   // Declare array that will store the errors
   let errors = [];

   // Declare object that will store the form-data
   let data = {};


   // | FULL NAME |

   // Check if fullname is not empty.

   if (fName.value !== '') {
      // If so:
      // Pass the collected value
      data.fullName = fName.value;

   } else {
      // Otherwise:
      // Create a corresponding error-message
      errors.push('Full name is missing!');


   }



   // | EMAIL | 

   // Check if email is not empty.
   // Check if email is valid.
   if (email.value !== '') {
      if (regex.test(email.value)){
         // If so: ()
         // Pass the collected value
         data.email = email.value;
      } else {
         errors.push('E-mail is invalid!');
      }
   } else {
      // Otherwise:
      // Create a corresponding error-message
      errors.push('E-mail is missing!');

   }



   // | MESSAGE | 

   // Check if message is not empty.
   if (message.value !== '') {
      // If so:
      // Pass the collected value
      data.message = message.value;
   } else {
      // Otherwise:
      // Create a corresponding error-message
      errors.push('Message is missing!');
   }

   // | FEEDBACK/ERRORS |

   // Check if there is anything in array errors
   if (errors.length > 0) {
      // If so: 
      // Print it in JavaScript console.
      console.log(errors);
   } else {
      // Otherwise:
      // Print the data in JavaScript console.
      console.log(data);
      // Clear text-fields

      fm.reset();

      // End your conditional here.


   }

}

// Register your form to "click" event.
fm.addEventListener('submit', formValidator);
