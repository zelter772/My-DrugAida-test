let slideIndex = 1;
let timer;

// Show the initial slide
showSlide(slideIndex);

// Function to show a specific slide
function showSlide(n) {
    let slides = document.getElementsByClassName("slides");
    let circles = document.getElementsByClassName("circle");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" class from all circles
    for (let i = 0; i < circles.length; i++) {
        circles[i].classList.remove("active");
    }

    // Show the selected slide and highlight the corresponding circle
    slides[n - 1].style.display = "block";
    circles[n - 1].classList.add("active");

    // Clear the existing timer and reset it for the next slide
    clearTimeout(timer);
    timer = setTimeout(nextSlide, 5000); // Move to the next slide every 3 seconds
}

// Function to go to the next slide automatically
function nextSlide() {
    slideIndex++;
    if (slideIndex > 3) { // Reset index if it exceeds the number of slides
        slideIndex = 1;
    }
    showSlide(slideIndex);
}

// Function to manually change slides
function manualSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

// Start the automatic slideshow
timer = setTimeout(nextSlide, 3000);

// smooth loading
window.onload = function () {
    // Fade out the loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.classList.add('hidden');

    // Smoothly show the content
    const content = document.querySelector('#main');
    setTimeout(() => {
        content.classList.add('show');
    }, 0.5); // Wait 0.5 seconds before showing the content for a smoother transition
};

// multi-step form navigation
// function nextStep(step) {
//     document.querySelectorAll('.form-step').forEach(stepElement => {
//         stepElement.style.display = 'none';
//     });

//     document.getElementById('step' + step).style.display = 'block';
// }
// function prevStep(step) {
//     nextStep(step);
// }

// file upload box
const dropContainer = document.getElementById("dropcontainer");
const fileInput = document.getElementById("fileUpload");

dropContainer.addEventListener("dragover", (e) => {
    // prevent to allow drop
    e.preventDefault();
}, false)

dropContainer.addEventListener("dragenter", () => {
    dropContainer.classList.add("drag-active");
})

dropContainer.addEventListener("dragleave", () => {
    dropContainer.classList.remove("drag-active")
})

dropContainer.addEventListener("drop", (e) => {
    e.preventDefault()
    dropContainer.classList.remove("drag-active")
    fileInput.files = e.dataTransfer.files
})




// Function to handle navigation between pages
function navigatePage(pageNumber) {
    // Hide all pages
    const pages = document.getElementsByClassName('form-step');
    
    // Ensure all pages are hidden
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active1'); // Remove 'active' from all pages
    }

    // Show the page corresponding to the pageNumber
    const page = document.getElementById(`page${pageNumber}`);
    if (page) {
        page.classList.add('active1'); // Add 'active' to the current page
    }
}


// btn action on click for next page from page 1

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('number');
const occupationInput = document.getElementById('occupation');
const dobInput = document.getElementById('dob');
const genderInput = document.getElementById('gender');
const passwordInput = document.getElementById('password');
const nextbtn1 = document.getElementById('nextbtn-1');


function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
function validatePassword(password) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
    return passwordPattern.test(password);
}


function checkInputs() {
    if (nameInput.value.trim() === '' || phoneNumberInput.value.trim() === '' || occupationInput.value.trim() === '' || dobInput.value.trim() === '' || genderInput.value.trim() === '' || !validateEmail(emailInput.value) || !validatePassword(passwordInput.value)) {
        nextbtn1.disabled = true;
    } else {
        nextbtn1.disabled = false;
    }
}

// function checkInputs() {
//     if (genderInput.value.trim() === '') {
//         nextbtn1.disabled = true;
//     }else {
//         nextbtn1.disabled = false;
//     }
// }

nameInput.addEventListener('input', checkInputs);
emailInput.addEventListener('input', checkInputs);
phoneNumberInput.addEventListener('input', checkInputs);
occupationInput.addEventListener('change', checkInputs);
dobInput.addEventListener('change', checkInputs);
genderInput.addEventListener('change', checkInputs);
passwordInput.addEventListener('input', checkInputs);


// btn action on click for next page from page 2

const licenseInput = document.getElementById('license');
const healthcareInput = document.getElementById('healthcare');
const specialityInput = document.getElementById('speciality');
const ninInput = document.getElementById('nin');
const termsInput = document.getElementById('terms');
const nextbtn2 = document.getElementById('nextbtn-2');

function reviewInputs() {
    if (licenseInput.value.trim() === '' || healthcareInput.value.trim() === '' || specialityInput.value.trim() === '' || ninInput.value.trim() === '' || !termsInput.checked) {
        nextbtn2.disabled = true;
    } else {
        nextbtn2.disabled = false;
    }
}

licenseInput.addEventListener('input', reviewInputs);
healthcareInput.addEventListener('change', reviewInputs);
specialityInput.addEventListener('change', reviewInputs);
ninInput.addEventListener('input', reviewInputs);
termsInput.addEventListener('change', reviewInputs)


// otp
function moveToNext(currentInput, nextInputId) {
    if (currentInput.value.length === 1) {
        document.getElementById(nextInputId).focus();
    }
}

function verifyOTP() {
    // Gather OTP input
    const otp = [
        document.getElementById('otp1').value,
        document.getElementById('otp2').value,
        document.getElementById('otp3').value,
        document.getElementById('otp4').value,
    ].join('');

    if (otp.length === 4) {
        alert('OTP Verified: ' + otp);
        // Proceed with verification
    } else {
        alert('Please enter a valid OTP.');
    }
}


const signInButton = document.getElementById("signInButton");

signInButton.addEventListener("click", function() {
    // Get the button's dimensions and position
    const buttonRect = signInButton.getBoundingClientRect();

    // Create an overlay element at the button's position
    const overlay = document.createElement("div");
    overlay.id = "overlay";

    // Set the initial size and position of the overlay to match the button
    overlay.style.width = buttonRect.width + 'px';
    overlay.style.height = buttonRect.height + 'px';
    overlay.style.left = buttonRect.left + 'px';
    overlay.style.top = buttonRect.top + 'px';
    
    // Disable body scroll
    document.body.style.overflow = "hidden";

    // Append overlay to the body
    document.body.appendChild(overlay);

    // Trigger the expand animation
    setTimeout(() => {
        overlay.classList.add("expand");
    }, 10);

    // After the animation completes, remove overflow restriction and redirect
    setTimeout(() => {
        document.body.style.overflow = "auto"; // Restore scrollability
        window.location.href = '../sign-in';  // Change the URL here
    }, 300); // Match the time to your animation duration
});


