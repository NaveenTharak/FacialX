document.addEventListener('DOMContentLoaded', function() {
    var attendanceGrid = document.querySelector('.attendance-grid');
    var refreshButton = document.getElementById('refreshButton');

    function populateAttendance() {
        // This function would ideally fetch data from a server
        // For now, we'll just simulate with a static list
        var students = ['Sam Smith', 'Sam Smith', 'Sam Smith', 'Sam Smith', 'Sam Smith', 'Sam Smith', 'Sam Smith', 'Sam Smith'];
        attendanceGrid.innerHTML = ''; // Clear current list
        
        students.forEach(function(student, index) {
            var div = document.createElement('div');
            div.className = 'attendance-item';
            div.innerHTML = `<span>${index + 1}. ${student}</span><input type="checkbox" class="checkbox">`;
            attendanceGrid.appendChild(div);
        });
    }

    refreshButton.addEventListener('click', populateAttendance);

    populateAttendance(); // Populate on load
});
