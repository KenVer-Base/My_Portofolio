// Script ini untuk menangani navigasi smooth-scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Memberi ruang untuk navigasi yang fixed
            const offsetTop = 60; 
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offsetTop;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-bar');
    let hasAnimated = false; // Flag untuk memastikan animasi hanya berjalan sekali

    const animateSkills = () => {
        if (!hasAnimated && skillsSection) {
            const sectionTop = skillsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Jika bagian skill sudah terlihat di layar
            if (sectionTop < windowHeight * 0.75) { // Animasi saat 75% bagian skill terlihat
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%'; // Reset sebelum animasi
                    setTimeout(() => {
                        bar.style.width = width; // Set ulang untuk memicu transisi
                    }, 100); // Sedikit delay
                });
                hasAnimated = true; // Set flag agar tidak berulang
            }
        }
    };

    // Panggil saat scroll dan saat load pertama kali
    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Panggil saat DOMContentLoaded untuk kasus sudah di-scroll
});
/* --- Kode untuk Navigasi Mobile --- */

// Ambil elemen yang dibutuhkan
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');

// Tambahkan event 'click' pada tombol hamburger
menuToggle.addEventListener('click', () => {
    // Toggle class 'nav-active' pada menu
    navLinks.classList.toggle('nav-active');
    
    // Toggle class 'is-active' pada tombol (untuk animasi "X")
    menuToggle.classList.toggle('is-active');
});

// Tambahan: Tutup menu saat salah satu link diklik
document.querySelectorAll('#nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        // Cek apakah menu sedang terbuka
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            menuToggle.classList.remove('is-active');
        }
    });
});
// Anda bisa menambahkan script lain di sini
// Misalnya untuk animasi mengetik (typing animation)
