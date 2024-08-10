const courseList = [];
const courseChartCanvas = document.getElementById('courseChart');

function addCourse() {
    const courseName = document.getElementById('courseName').value;
    const courseCredits = parseInt(document.getElementById('courseCredits').value);
    const courseDifficulty = parseInt(document.getElementById('courseDifficulty').value);

    if (courseName && courseCredits && courseDifficulty) {
        courseList.push({ courseName, courseCredits, courseDifficulty });

        const courseListDiv = document.getElementById('courseList');
        courseListDiv.innerHTML += `<p>${courseName}: ${courseCredits} credits, Difficulty: ${courseDifficulty}</p>`;

        document.getElementById('courseForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
}

function calculateLoad() {
    if (courseList.length === 0) {
        alert('Please add at least one course.');
        return;
    }

    let totalCredits = 0;
    courseList.forEach(course => {
        totalCredits += course.courseCredits;
    });

    let chartData = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
        }]
    };

    courseList.forEach(course => {
        const percentage = (course.courseCredits / totalCredits) * 100;
        chartData.labels.push(course.courseName);
        chartData.datasets[0].data.push(percentage);
    });

    const ctx = courseChartCanvas.getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });

    document.getElementById('loadResult').innerHTML = `<p>Total Credits: ${totalCredits}</p>`;
}
