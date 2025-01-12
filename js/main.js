// navbar burger
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah submit default
    const responseMessage = document.getElementById('response-message');

    // Buat objek FormData
    const formData = new FormData(this);

    // Inisialisasi EmailJS
    emailjs.init("iPyiAi22O9xxS2yzx"); // Ganti dengan Public Key Anda

    // Kirim data melalui EmailJS
    emailjs.send("service_y49eunx", "template_hy39mwm", {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    })
        .then(
            function () {
                responseMessage.textContent = "Pesan berhasil dikirim!";
                responseMessage.classList.remove("text-red-500");
                responseMessage.classList.add("text-green-500");
            },
            function (error) {
                console.error("EmailJS Error:", error); // Log error untuk debugging
                responseMessage.textContent = "Terjadi kesalahan. Silakan coba lagi.";
                responseMessage.classList.remove("text-green-500");
                responseMessage.classList.add("text-red-500");
            }
        );

    // Reset form setelah submit
    this.reset();
});
