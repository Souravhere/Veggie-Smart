let attendanceChart;

        function calculateAttendance() {
            const present = parseFloat(document.getElementById('presentlecturer').value);
            const total = parseFloat(document.getElementById('totallecturer').value);
            const requiredAttendance = parseFloat(document.getElementById('requiredAttendance').value);

            if (!present || !total || present > total || present < 0 || total <= 0) {
                document.getElementById('result').classList.add('hidden');
                alert("Please enter valid values. ⚠️");
                return;
            }

            const currentAttendance = (present / total) * 100;
            const attendanceNeeded = requiredAttendance / 100;
            const totalWithBunks = present / attendanceNeeded;

            let resultMessage = '';
            let funMessage = '';
            let chartData = [present, total - present]; // Data for the pie chart (present vs absent)

            if (currentAttendance >= requiredAttendance) {
                const canBunk = Math.floor(totalWithBunks - total);
                resultMessage = `
                    You can bunk <span class="highlight">${canBunk}</span> more lecturer! 🎉
                    <p class="mt-2">Current Attendance: <strong>${present}/${total}</strong> -> <strong>${currentAttendance.toFixed(2)}%</strong></p>
                    <p>Attendance After Bunking: <strong>${present}/${Math.ceil(totalWithBunks)}</strong> -> <strong>${requiredAttendance}%</strong></p>
                `;
                funMessage = "Go enjoy your time! 😎";
            } else {
                const extralecturerNeeded = Math.ceil((present / attendanceNeeded) - total);
                resultMessage = `
                    You need to attend <span class="highlight">${extralecturerNeeded}</span> more lecturer! 💪
                    <p class="mt-2">Current Attendance: <strong>${present}/${total}</strong> -> <strong>${currentAttendance.toFixed(2)}%</strong></p>
                    <p>Attendance After Attending: <strong>${present}/${Math.ceil(totalWithBunks)}</strong> -> <strong>${requiredAttendance}%</strong></p>
                `;
                funMessage = "Better hit the books! 📚";
                chartData = [present + extralecturerNeeded, total + extralecturerNeeded - present]; // Adjust chart for required attendance
            }

            document.getElementById('result').innerHTML = `${resultMessage}<p class="fun-result">${funMessage}</p>`;
            document.getElementById('result').classList.remove('hidden');

            // Update the chart
            updateChart(chartData);
        }

        // Function to create or update Chart.js graph
        function updateChart(data) {
            const ctx = document.getElementById('attendanceChart').getContext('2d');

            // If chart exists, destroy it first before creating a new one
            if (attendanceChart) {
                attendanceChart.destroy();
            }

            attendanceChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['lecturer Attended', 'lecturer Remaining'],
                    datasets: [{
                        label: 'Attendance Chart',
                        data: data,
                        backgroundColor: ['#00E676', '#FF7043'],
                        borderColor: '#263238',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                color: '#ffffff'
                            }
                        }
                    }
                }
            });
        }