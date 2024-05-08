function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add leading zero if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Format the time
    var formattedTime = hours + ':' + minutes + ':' + seconds;

    // Update the content of the placeholder element
    document.getElementById('realTime').textContent = formattedTime;
}

// Update time every second
setInterval(updateTime, 1000);

