function updateCountdown() {
    // Get current date and time
    const now = new Date();

    // Set target date to the 20th of the current month
    let targetDate = new Date(now.getFullYear(), now.getMonth(), 20);

    // If today is past the 20th, set the target date to the 20th of next month
    if (now.getDate() > 20) {
        targetDate.setMonth(targetDate.getMonth() + 1);
    }

    // Calculate the time difference between now and the target date
    const timeDifference = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (timeDifference <= 0) {
        document.getElementById("timer").innerHTML = "It's time...";
    }
}

// Update the countdown every 1 second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown right away
updateCountdown();

