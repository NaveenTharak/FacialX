document.addEventListener('DOMContentLoaded', function() {
    var studentDetailsBody = document.getElementById('studentDetailsBody');
    
    function populateStudentDetails() {
        // This function would ideally fetch data from a server
        // Here we are adding static content for demonstration purposes
        var studentDetails = [
            { name: 'Person 1', section: 'A', semester: 2, attendanceCount: 1, avg: '0%' },
            { name: 'Person 1', section: 'A', semester: 2, attendanceCount: 1, avg: '0%' },
            { name: 'Person 1', section: 'A', semester: 2, attendanceCount: 1, avg: '0%' }
        ];
        
        studentDetailsBody.innerHTML = ''; // Clear current details
        studentDetails.forEach(function(detail) {
            var tr = document.createElement('tr');
            tr.innerHTML = `<td>${detail.name}</td>
                            <td>${detail.section}</td>
                            <td>${detail.semester}</td>
                            <td>${detail.attendanceCount}</td>
                            <td>${detail.avg}</td>`;
            studentDetailsBody.appendChild(tr);
        });
    }
    
    populateStudentDetails(); // Populate on load
});
