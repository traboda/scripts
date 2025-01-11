// Set the target date (December 31, 2024)
const targetDate = new Date('2025-01-12T11:00:00+0530').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    // Add leading zeros
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById('countdown').innerHTML = '<h2>Registration Closed</h2>';
    }
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
