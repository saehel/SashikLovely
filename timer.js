const moscowOffsetHours = 3;
    const deadlineUTC = new Date(Date.UTC(2025, 11, 17, 6, 0, 0)); // 09:00 MSK == 06:00 UTC

    const countdownElement = document.getElementById("countdown");

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const remaining = deadlineUTC.getTime() - now;

        if (remaining <= 0) {
            clearInterval(timer);
            countdownElement.textContent = "мы встретились!!!!^_____^";
            return;
        }

        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        countdownElement.textContent =
            `${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
    }, 1000);