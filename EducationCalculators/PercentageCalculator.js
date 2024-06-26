 // Initialize variables
 let subjects = [];
 let chart;
 
 // Function to add a new subject input
 function addSubjectInput() {
     const subjectList = document.getElementById('subject-list');
 
     const div = document.createElement('div');
     div.classList.add('mb-4', 'block', 'items-center');
 
     const nameInput = document.createElement('input');
     nameInput.type = 'text';
     nameInput.placeholder = 'Subject Name';
     nameInput.classList.add('px-3','block', 'w-full','rounded-lg','mt-2', 'py-2', 'border', 'border-gray-300', 'rounded-l', 'focus:outline-none',
         'focus:border-blue-500', 'text-gray-900', 'bg-gray-200');
 
     const totalMarksInput = document.createElement('input');
     totalMarksInput.type = 'number';
     totalMarksInput.placeholder = 'Total Marks';
     totalMarksInput.classList.add('px-3' , 'w-1/2','-ml-1','rounded-lg','mt-2', 'py-2', 'border', 'border-gray-300', 'text-gray-900', 'bg-gray-200');
 
     const gainMarksInput = document.createElement('input');
     gainMarksInput.type = 'number';
     gainMarksInput.placeholder = 'Gain Marks';
     gainMarksInput.classList.add('px-3' ,'w-1/2','ml-1','-mr-1','rounded-lg','mt-2', 'py-2', 'border', 'border-gray-300', 'rounded-r', 'focus:outline-none',
         'focus:border-blue-500', 'text-gray-900', 'bg-gray-200');
 
     const deleteBtn = document.createElement('button');
     deleteBtn.innerHTML = '<p>Delete</p>';
     deleteBtn.classList.add('px-3', 'py-2','mt-2','block','w-full', 'border', 'border-red-600', 'rounded', 'focus:outline-none',
         'focus:border-red-500', 'bg-red-500', 'hover:bg-red-300');
     deleteBtn.addEventListener('click', () => {
         div.remove();
     });
 
     div.appendChild(nameInput);
     div.appendChild(totalMarksInput);
     div.appendChild(gainMarksInput);
     div.appendChild(deleteBtn);
 
     subjectList.appendChild(div);
 }
 
 // Function to calculate grades
 function calculateGrades() {
     const subjectInputs = document.querySelectorAll('#subject-list div');
     let totalMaxMarks = 0;
     let totalGainMarks = 0;
     const percentages = [];
 
     subjectInputs.forEach(subject => {
         const totalMarks = parseInt(subject.querySelector('input[type="number"]:nth-child(2)').value) || 0;
         const gainMarks = parseInt(subject.querySelector('input[type="number"]:nth-child(3)').value) || 0;
 
         totalMaxMarks += totalMarks;
         totalGainMarks += gainMarks;
 
         const percentage = (gainMarks / totalMarks) * 100 || 0;
         percentages.push({
             name: subject.querySelector('input[type="text"]').value,
             percentage
         });
     });
 
     const totalPercentage = (totalGainMarks / totalMaxMarks) * 100 || 0;
 
     displayResults(percentages, totalPercentage);
     renderChart(percentages);
 }
 
 // Function to display results
 function displayResults(percentages, totalPercentage) {
     const resultsList = document.getElementById('results-list');
     resultsList.innerHTML = '';
 
     percentages.forEach(subject => {
         const listItem = document.createElement('div');
         listItem.classList.add('flex', 'justify-between', 'items-center','px-4', 'py-2', 'border-b', 'border-gray-600');
         listItem.innerHTML = `<span>${subject.name}</span><span>${subject.percentage.toFixed(2)}%</span>`;
         resultsList.appendChild(listItem);
     });
 
     const totalItem = document.createElement('div');
     totalItem.classList.add('flex', 'justify-between', 'items-center', 'py-2','px-4');
     totalItem.innerHTML = `<span class="font-bold">Total Percentage:</span><span class="font-bold">${totalPercentage.toFixed(2)}%</span>`;
     resultsList.appendChild(totalItem);
 
     document.getElementById('results').classList.remove('hidden');
 }
 
 // Function to render chart using Chart.js
 function renderChart(percentages) {
     if (chart) {
         chart.destroy();
     }
 
     const ctx = document.getElementById('chart').getContext('2d');
     chart = new Chart(ctx, {
         type: 'bar',
         data: {
             labels: percentages.map(subject => subject.name),
             datasets: [{
                 label: 'Percentage (%)',
                 data: percentages.map(subject => subject.percentage.toFixed(2)),
                 backgroundColor: [
                     '#4299e1',
                     '#38b2ac',
                     '#48bb78',
                     '#f6e05e',
                     '#f56565',
                     '#ed64a6',
                     '#9f7aea',
                 ],
                 borderColor: [
                     '#2b6cb0',
                     '#2c7a7b',
                     '#2f855a',
                     '#b7791f',
                     '#c53030',
                     '#b83280',
                     '#6b46c1',
                 ],
                 borderWidth: 1
             }]
         },
         options: {
             scales: {
                 y: {
                     beginAtZero: true,
                     ticks: {
                         callback: function (value) {
                             return value + '%';
                         }
                     }
                 }
             }
         }
     });
 }
 
 // Event listener for Add Subject button
 document.getElementById('add-subject-btn').addEventListener('click', () => {
     addSubjectInput();
 });
 
 // Event listener for Calculate button
 document.getElementById('calculate-btn').addEventListener('click', () => {
     calculateGrades();
 });