var menu = document.querySelector("#menu-icon")
var navbar = document.querySelector(".navbar")
var aboutUs = document.getElementById("aboutUs")

var searchInput = document.getElementById("search");
        var searchBar = document.querySelector(".search-courses");
       var coursesSection = document.getElementById("courses").closest('section');


menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navbar.classList.toggle("active")
    searchBar.style.display ="none";
}

window.onscroll = () => {
    menu.classList.remove("bx-x")
    navbar.classList.remove("active")
}

//Search


document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const searchBar = document.querySelector(".search-courses");
    const coursesSection = document.getElementById("courses").closest('section');
    
    searchInput.addEventListener("keyup", function() {
        const searchTerm = searchInput.value.toLowerCase();
        const courseDetails = document.getElementById("course-details").children;

        Array.from(courseDetails).forEach(course => {
            const courseName = course.querySelector("h3").textContent.toLowerCase();
            const courseSubjects = course.querySelectorAll(".subject"); // Selecting elements with class "subject"

            let found = false;
            
            // Check if course name includes search term
            if (courseName.includes(searchTerm)) {
                found = true;
            }

            // Check if any subject includes search term
            courseSubjects.forEach(subject => {
                if (subject.textContent.toLowerCase().includes(searchTerm)) {
                    found = true;
                }
            });

            // Set display property based on search result
            if (found) {
                course.style.display = "block";
            } else {
                course.style.display = "none";
            }
        });

        searchBar.style.position ="fixed";
        searchBar.style.top = "12%";
        searchBar.style.width = "80%";
        searchBar.style.background = "white";
        searchBar.style.zIndex = "100011";

        coursesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const registerBtn = document.getElementById("register");
    const signBtn = document.getElementById("sign-in");
    const registerContainer = document.querySelector(".register-container");
    const signContainer = document.querySelector(".sign-container");
    const cancelPopupReg = document.getElementById("cancel-popup-1");
    const cancelPopupSign = document.getElementById("cancel-popup-2");
    const tutorBtn = document.getElementById("tutor-btn");
    const stdBtn = document.getElementById("std-btn");
    const tutorSign = document.getElementById("tutor-sign");
    const stdSign = document.getElementById("std-sign");

    registerBtn.addEventListener("click", function(event) {
        event.preventDefault(); 
        registerContainer.style.display = "block";
    });

    signBtn.addEventListener("click", function(event) {
        event.preventDefault(); 
        signContainer.style.display = "block";
    });

    cancelPopupReg.addEventListener("click", function(event) {
        registerContainer.style.display = "none";
    });
    cancelPopupSign.addEventListener("click", function(event) {
        signContainer.style.display = "none";
    });

    tutorBtn.addEventListener("click", function(event) {
        window.location.href = "registrationTutor.html"; 
    });

    stdBtn.addEventListener("click", function(event) {
        window.location.href = "register.html"; 
    });

    tutorSign.addEventListener("click", function(event) {
        window.location.href = "signInTut.html"; 
    });

    stdSign.addEventListener("click", function(event) {
        window.location.href = "signInStd.html"; 
    });
});

const sr = ScrollReveal({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true

})

sr.reveal('.headerM',{delay:200,origin:'top'})

sr.reveal('.text-image',{delay:200,origin:'top'})
sr.reveal('.heading',{delay:200,origin:'top'})
sr.reveal('.about',{delay:200,origin:'top'})
sr.reveal('.course-details',{delay:200,origin:'top'})
sr.reveal('.reviews-container',{delay:200,origin:'top'})
sr.reveal('.contact-container',{delay:200,origin:'top'})


    

