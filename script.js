document.addEventListener("DOMContentLoaded", () => {
    // Contact form submission
    const contactForm = document.getElementById("contact-form")

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {

            // Basic form validation
            const name = document.getElementById("name").value.trim()
            const email = document.getElementById("email").value.trim()
            const message = document.getElementById("message").value.trim()

            if (!name || !email || !message) {
            alert("Please fill in all fields.")
            return
            }

            if (!isValidEmail(email)) {
            alert("Please enter a valid email address.")
            return
            }
            
            // Alert after user submits form
            alert("Thank you for your message. I'll get back to you soon!");
        })
    }
})

// Email validation helper function
function isValidEmail(email) {
    const re =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
}

// Fun bio shuffler. Shuffles bio when user clicks on button
document.addEventListener("DOMContentLoaded", () => {
    const bioText = document.getElementById("bio-text");
    const shuffleBtn = document.getElementById("shuffle-btn");

    const bios = [
        "Hi, I'm Anaya Tention! A data science student who spends way too much time fixing code just to realize the problem was a missing comma.",
        "Hi, I'm Anaya Tention! And I turn numbers into stories, trends, and the occasional existential crisis.",
        "Hi, I'm Anaya Tention! A data science student who believes every dataset has a secret—it just takes enough coffee to find it.",
        "Hi, I'm Anaya Tention! And I turn raw data into something actually useful—because spreadsheets deserve better.",
        "Hi, I'm Anaya Tention! A data science student who enjoys making messy data behave and proving theories with way too many charts.",
        "Hi, I'm Anaya Tention! And if there's a weird pattern in the data, I'll find it—even if it means running one too many models.",
        "Hi, I'm Anaya Tention! And I turn data confusion into data conclusions (with some trial and error in between).",
        "Hi, I'm Anaya Tention! A data science student who thinks cleaning data should count as an extreme sport.",
        "Hi, I'm Anaya Tention! And I like numbers, problem-solving, and proving my gut feeling with actual data.",
        "Hi, I'm Anaya Tention! A data nerd who enjoys making sense of numbers and pretending my computer isn't lagging.",
        "Hi, I'm Anaya Tention! A data science student with a passion for uncovering insights and solving problems with data."
    ];

    shuffleBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * bios.length);
        bioText.textContent = bios[randomIndex];
    });
});
