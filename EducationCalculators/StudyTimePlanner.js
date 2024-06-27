 // app.js

 document.addEventListener('DOMContentLoaded', () => {
    const timetableForm = document.getElementById('timetable-form');
    const timetableTable = document.getElementById('timetable').getElementsByTagName('tbody')[0];
    const studyChartCanvas = document.getElementById('studyChart');
    const timetableDisplay = document.getElementById('timetable-display');
    const noSessionsMessage = document.getElementById('no-sessions');
  
    // Initialize Flatpickr for start and end time inputs
    const flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      time_24hr: false, // 12-hour time format
      defaultHour: 8, // Default start time hour (e.g., 8 AM)
      onClose: () => {
        validateTimeInputs();
      }
    };
  
    flatpickr('#start-time', flatpickrOptions);
    flatpickr('#end-time', flatpickrOptions);
  
    let studySessions = [];
    const motivationalQuotes = [
      "There is no substitute for hard work. - A.P.J. Abdul Kalam",
      "Dreams are not those which come while we are sleeping, but dreams are those when you don't sleep before fulfilling them. - A.P.J. Abdul Kalam",
      "Failure is a choice, but giving up is not. - Arianna Huffington",
      "The best way to learn is by doing. - Richard Branson",
      "The purpose of education is to replace an empty mind with an open one. - Malcolm Forbes"
    ];
  
    window.addStudySession = function() {
      const day = document.getElementById('day').value;
      const subject = document.getElementById('subject').value;
      const startTime = document.getElementById('start-time').value;
      const endTime = document.getElementById('end-time').value;
  
      if (subject && startTime && endTime) {
        const session = { day, subject, startTime, endTime };
        studySessions.push(session);
        addRowToTimetable(session);
        clearFormInputs();
        updateTimetableDisplay();
      } else {
        alert('Please fill out all fields.');
      }
    };
  
    window.finalizeTimetable = function() {
      updateStudyChart();
    };
  
    window.downloadTimetable = function() {
      if (studySessions.length === 0) {
        alert('No study sessions added yet.');
        return;
      }
  
      const docDefinition = {
        content: [
          { text: getRandomQuote(), style: 'quote' },
          { text: 'Study Timetable', style: 'header', alignment: 'center' },
          {
            table: {
              widths: ['*', '*', '*', '*', '*'],
              body: [
                [{ text: 'Day', style: 'tableHeader' }, { text: 'Subject', style: 'tableHeader' }, { text: 'Start Time', style: 'tableHeader' }, { text: 'End Time', style: 'tableHeader' }, { text: 'Hours', style: 'tableHeader' }],
                ...studySessions.map(session => [session.day, session.subject, formatTime(session.startTime), formatTime(session.endTime), calculateHours(session.startTime, session.endTime)])
              ]
            },
            alignment: 'center'
          },
          { text: `Total Study Hours: ${calculateTotalHours()}`, style: 'totalHours', alignment: 'center' },
          { text: '© 2024 Study Time Planner By Veggie Smart', style: 'footer', alignment: 'center' }
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 10, 0, 10]
          },
          quote: {
            fontSize: 14,
            italics: true,
            margin: [0, 0, 0, 20]
          },
          tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
          },
          totalHours: {
            margin: [0, 20, 0, 20],
            bold: true
          },
          footer: {
            margin: [0, 20, 0, 0],
            fontSize: 12,
            italics: true
          }
        }
      };
  
      pdfMake.createPdf(docDefinition).download('study_timetable.pdf');
    };
  
    function addRowToTimetable(session) {
      const row = timetableTable.insertRow();
      row.insertCell(0).innerText = session.day;
      row.insertCell(1).innerText = session.subject;
      row.insertCell(2).innerText = formatTime(session.startTime);
      row.insertCell(3).innerText = formatTime(session.endTime);
      row.insertCell(4).innerText = calculateHours(session.startTime, session.endTime);
    }
  
    function formatTime(time) {
      const [hour, minute] = time.split(':');
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const formattedHour = hour % 12 || 12;
      return `${formattedHour}:${minute} ${ampm}`;
    }
  
    function calculateHours(startTime, endTime) {
      const start = new Date(`1970-01-01T${startTime}Z`);
      const end = new Date(`1970-01-01T${endTime}Z`);
      return ((end - start) / (1000 * 60 * 60)).toFixed(2); // convert to hours and format to 2 decimal places
    }
  
    function calculateTotalHours() {
      return studySessions.reduce((total, session) => total + parseFloat(calculateHours(session.startTime, session.endTime)), 0).toFixed(2);
    }
  
    function getRandomQuote() {
      return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    }
  
    function updateStudyChart() {
      const subjects = studySessions.map(session => session.subject);
      const studyDurations = studySessions.map(session => {
        const start = new Date(`1970-01-01T${session.startTime}Z`);
        const end = new Date(`1970-01-01T${session.endTime}Z`);
        return (end - start) / (1000 * 60); // convert to minutes
      });
  
      const chartData = {
        labels: subjects,
        datasets: [{
          data: studyDurations,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      };
  
      new Chart(studyChartCanvas, {
        type: 'pie',
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                color: '#4a5568' // Set legend text color
              }
            }
          }
        }
      });
    }
  
    function validateTimeInputs() {
      const startTime = document.getElementById('start-time').value;
      const endTime = document.getElementById('end-time').value;
  
      if (startTime && endTime) {
        if (startTime >= endTime) {
          alert('End time must be after start time.');
          document.getElementById('end-time').value = '';
        }
      }
    }
  
    function clearFormInputs() {
      document.getElementById('subject').value = '';
      document.getElementById('start-time').value = '';
      document.getElementById('end-time').value = '';
    }
  
    function updateTimetableDisplay() {
      timetableDisplay.style.display = 'block';
      noSessionsMessage.style.display = 'none';
    }
  });
  