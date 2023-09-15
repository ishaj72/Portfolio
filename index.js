// let menuIcon = document.querySelector('.menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav [href*="'+id+'"]').classList.add('active');
//             });
//         }
//     });

//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);

//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form input values
        const fullName = document.querySelector('input[name="Full Name"]').value;
        const emailAddress = document.querySelector('input[name="Email Address"]').value;
        const mobileNumber = document.querySelector('input[name="Mobile Number"]').value;
        const emailSubject = document.querySelector('input[name="Email Subject"]').value;
        const message = document.querySelector('textarea[name="Your Message"]').value;

        // Display an alert with form data
        const formData = `Full Name: ${fullName}\nEmail Address: ${emailAddress}\nMobile Number: ${mobileNumber}\nEmail Subject: ${emailSubject}\nYour Message: ${message}`;
        alert("Form submitted with the following data:\n" + formData);

        // Reset form inputs
        contactForm.reset();
    });
});
