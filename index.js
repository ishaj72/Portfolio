let sections = 
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
