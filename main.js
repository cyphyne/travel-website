// Toggle menu on mobile view
document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("active");
    document.getElementById("navBar").classList.toggle("active");
    document.querySelector(".nav-title").classList.toggle("active");
    document.getElementById("menuBtn").classList.toggle("active");
});

// Animate FAQ accordion items
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const icon = question.querySelector('.icon');

    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.icon').textContent = '+';
        });

        // Toggle current one
        if (!isOpen) {
        item.classList.add('active');
        icon.textContent = '-';
        }
    });
});