// Set thời gian đích (định dạng: năm, tháng, ngày, giờ, phút, giây)
const countdownDate = new Date("2024-12-31T23:59:59").getTime();



const timerElement = document.getElementById("time");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Tính toán thời gian còn lại theo ngày, giờ, phút và giây
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị thời gian đếm ngược
    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Nếu thời gian đếm ngược đã kết thúc
    if (distance < 0) {
        clearInterval(countdownInterval);
        timerElement.innerHTML = "EXPIRED";
    }
}

// Cập nhật đếm ngược mỗi giây
const countdownInterval = setInterval(updateCountdown, 1000);
