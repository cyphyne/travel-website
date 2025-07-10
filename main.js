// Toggle menu on mobile view
document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("active");
    document.getElementById("navBar").classList.toggle("active");
    document.querySelector(".nav-title").classList.toggle("active");
    document.getElementById("menuBtn").classList.toggle("active");
});