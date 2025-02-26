document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
    document.querySelectorAll('button[data-scroll]').forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            let targetId = this.getAttribute("data-scroll");
            let targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                let navbarHeight = document.querySelector(".navbar").offsetHeight; // Get navbar height
                let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 50; // Adjust offset

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth" // Smooth scrolling
                });
            }
        });
    });
    document.querySelectorAll('.scroll-link').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            let targetId = this.getAttribute("href").substring(1); // Get target ID without #
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                let navbarHeight = document.querySelector(".navbar").offsetHeight; // Get navbar height
                let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 20; // Adjust offset

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth" // Slow smooth scrolling
                });
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const slider = document.querySelector(".loan-slider");
        const loanAmount = document.getElementById("loan-amount");
        const weeklyPayment = document.getElementById("weekly-payment");
        const decreaseBtn = document.querySelector(".decrease-btn");
        const increaseBtn = document.querySelector(".increase-btn");
    
        function updateValues() {
            const amount = parseInt(slider.value);
            loanAmount.textContent = amount;
            weeklyPayment.textContent = "$" + Math.round(amount / 52);
        }
    
        // Update slider on input change
        slider.addEventListener("input", updateValues);
    
        // Increase button
        increaseBtn.addEventListener("click", function () {
            let value = parseInt(slider.value);
            if (value < 10000) {
                slider.value = value + 500;
                updateValues();
            }
        });
    
        // Decrease button
        decreaseBtn.addEventListener("click", function () {
            let value = parseInt(slider.value);
            if (value > 1000) {
                slider.value = value - 500;
                updateValues();
            }
        });
    
        // Initialize values on load
        updateValues();
    });
    document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
    
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    });
    
    