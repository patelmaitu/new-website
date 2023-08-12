/*
    Project 4
    Name: Maitri Patel
    Date: 23-08-11
    Description: Project 4 validation.js  
	
 */
// Javascript for hamburger menu 
function toggleMenu() {
    var menu = document.getElementById("menu");
    var hamburger = document.querySelector(".hamburger");
  
    if (menu.style.display === "block") {
      menu.style.display = "none";
      hamburger.classList.remove("active");
    } else {
      menu.style.display = "block";
      hamburger.classList.add("active");
    }
  }


//Validation javascript
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("name-error");
    const phoneError = document.getElementById("phone-error");
    const emailError = document.getElementById("email-error");

    form.addEventListener("submit", function(event) {
        let valid = true;
        let errors = [];

        if (nameInput.value.trim() === "") {
            errors.push("Please enter your name");
            valid = false;
        }

        if (!/^\d{10}$/.test(phoneInput.value)) {
            errors.push("Please enter a valid 10-digit phone number");
            valid = false;
        }

        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
            errors.push("Please enter a valid email address");
            valid = false;
        }

        if (errors.length > 0) {
            event.preventDefault();
            displayErrors(errors);
        }
    });

    function displayErrors(errors) {
        const errorContainer = document.getElementById("error-container");
        errorContainer.innerHTML = "";

        for (let error of errors) {
            const errorDiv = document.createElement("div");
            errorDiv.classList.add("error-message");
            errorDiv.textContent = error;
            errorContainer.appendChild(errorDiv);
        }
    }

    nameInput.addEventListener("focus", function() {
        nameInput.classList.add("input-focus");
    });

    nameInput.addEventListener("blur", function() {
        nameInput.classList.remove("input-focus");
    });

    phoneInput.addEventListener("focus", function() {
        phoneInput.classList.add("input-focus");
    });

    phoneInput.addEventListener("blur", function() {
        phoneInput.classList.remove("input-focus");
    });

    emailInput.addEventListener("focus", function() {
        emailInput.classList.add("input-focus");
    });

    emailInput.addEventListener("blur", function() {
        emailInput.classList.remove("input-focus");
    });
});
