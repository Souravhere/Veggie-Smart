const exercises = [];
    let exerciseChart = null;

    function addExercise() {
      const category = document.getElementById('category').value;
      const exercise = document.getElementById('exercise').value;
      const duration = document.getElementById('duration').value;
      const date = document.getElementById('date').value;

      if (exercise && duration && date) {
        const exerciseEntry = { category, exercise, duration: parseInt(duration), date };
        exercises.push(exerciseEntry);
        renderTable();
        updateChart();
        clearFields();
      } else {
        alert("Please fill all fields");
      }
    }

    function renderTable() {
      const tableBody = document.querySelector('#exerciseTable tbody');
      tableBody.innerHTML = '';

      exercises.forEach((exercise, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td class="py-2 px-4">${exercise.category}</td>
          <td class="py-2 px-4">${exercise.exercise}</td>
          <td class="py-2 px-4">${exercise.duration}</td>
          <td class="py-2 px-4">${exercise.date}</td>
          <td class="py-2 px-4">
            <button onclick="removeExercise(${index})" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"><i class="ri-delete-bin-6-line"></i></button>
          </td>
        `;
        tableBody.appendChild(row);
      });
    }

    function removeExercise(index) {
      exercises.splice(index, 1);
      renderTable();
      updateChart();
    }

    function updateChart() {
      if (exerciseChart) {
        exerciseChart.destroy();
      }

      const ctx = document.getElementById('exerciseChart').getContext('2d');
      const categories = exercises.map(e => e.category);
      const durations = exercises.map(e => e.duration);

      exerciseChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: categories,
          datasets: [{
            data: durations,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40', '#9966FF']
          }]
        }
      });
    }

    function clearFields() {
      document.getElementById('category').value = 'Strength Training';
      document.getElementById('exercise').value = '';
      document.getElementById('duration').value = '';
      document.getElementById('date').value = '';
    }

    function getRandomQuote() {
      const quotes = [
        "There is no substitute for hard work. - A.P.J. Abdul Kalam",
        "Dreams are not what you see in sleep, dreams are things which do not let you sleep. - A.P.J. Abdul Kalam",
        "Failure is an option, but giving up is not. - Arianna Huffington",
        "The best way to learn is by doing. - Richard Branson",
        "The purpose of education is to replace an empty mind with an open one. - Malcolm Forbes"
      ];
      return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function downloadPDF() {
      const docDefinition = {
        content: [
          { text: 'Workout Plan', style: 'header' },
          { text: getRandomQuote(), style: 'subheader' },
          {
            table: {
              headerRows: 1,
              widths: ['*', '*', '*', '*'],
              body: [
                ['Category', 'Exercise', 'Duration (minutes)', 'Date'],
                ...exercises.map(ex => [ex.category, ex.exercise, ex.duration, ex.date])
              ]
            }
          },
          { text: '\n' },
          { text: 'Total Workout Duration: ' + exercises.reduce((acc, ex) => acc + ex.duration, 0) + ' minutes', style: 'subheader' },
          { text: 'Total Exercises: ' + exercises.length, style: 'subheader' },
          { text: '\n\n' },
          { text: '© 2024 Workout Plan Generator', style: 'footer' }
        ],
        styles: {
          header: { fontSize: 18, bold: true, alignment: 'center' },
          subheader: { fontSize: 14, bold: true, alignment: 'center' },
          footer: { fontSize: 12, alignment: 'center' }
        }
      };

      pdfMake.createPdf(docDefinition).download('Workout_Plan.pdf');
    }