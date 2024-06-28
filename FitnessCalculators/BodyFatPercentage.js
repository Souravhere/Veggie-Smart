let exercises = [];

        function calculateBodyFat() {
            const gender = document.getElementById('gender').value;
            const age = parseInt(document.getElementById('age').value);
            const weight = parseFloat(document.getElementById('weight').value);
            const waist = parseFloat(document.getElementById('waist').value);
            const neck = parseFloat(document.getElementById('neck').value);

            if (isNaN(age) || isNaN(weight) || isNaN(waist) || isNaN(neck)) {
                alert('Please fill in all required fields.');
                return;
            }

            let bodyFatPercentage;
            if (gender === 'male') {
                bodyFatPercentage = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(weight) + 36.76;
            } else {
                bodyFatPercentage = 163.205 * Math.log10(waist - neck + hip) - 97.684 * Math.log10(weight) - 78.387;
            }

            bodyFatPercentage = bodyFatPercentage.toFixed(2);

            document.getElementById('bodyFatResult').innerText = `Your body fat percentage is ${bodyFatPercentage}%`;

            exercises.push({
                gender,
                age,
                weight,
                waist,
                neck,
                bodyFatPercentage
            });

            updateBodyFatCategories(bodyFatPercentage);
            updateTable();
            clearFields();
        }

        function updateBodyFatCategories(bodyFatPercentage) {
            const categories = [
                { name: 'Essential fat', women: '10-13%', men: '2-5%' },
                { name: 'Athletes', women: '14-20%', men: '6-13%' },
                { name: 'Fitness', women: '21-24%', men: '14-17%' },
                { name: 'Average', women: '25-31%', men: '18-24%' },
                { name: 'Obese', women: '32+%', men: '25+%' }
            ];

            let category = categories.find(cat => {
                return parseFloat(bodyFatPercentage) >= parseFloat(cat.women.split('-')[0]) &&
                    parseFloat(bodyFatPercentage) <= parseFloat(cat.women.split('-')[1]);
            });

            if (!category) {
                category = categories.find(cat => {
                    return parseFloat(bodyFatPercentage) >= parseFloat(cat.men.split('-')[0]) &&
                        parseFloat(bodyFatPercentage) <= parseFloat(cat.men.split('-')[1]);
                });
            }

            document.getElementById('bodyFatCategories').innerHTML = `<strong>Body Fat Category:</strong> ${
                category ? category.name : 'Unknown'
                }`;

            updateBodyFatDescription(bodyFatPercentage);
        }

        function updateBodyFatDescription(bodyFatPercentage) {
            const descriptions = {
                'Essential fat': `Essential fat is necessary for physiological functions and maintenance of life.`,
                'Athletes': `Athletes have optimal body fat for peak performance and endurance.`,
                'Fitness': `Fitness range indicates good overall health and fitness.`,
                'Average': `Average body fat percentage for general population.`,
                'Obese': `Obese individuals have an excess of body fat which may pose health risks.`
            };

            const category = document.getElementById('bodyFatCategories').innerText.split(':')[1].trim();

            document.getElementById('bodyFatDescription').innerHTML = `
                <h2 class="text-xl font-semibold mb-2">Body Fat Category: ${category}</h2>
                <p>${descriptions[category]}</p>
            `;
        }

        function updateTable() {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = '';

            exercises.forEach((ex, index) => {
                const row = document.createElement('tr');
                row.classList.add(index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700');
                row.classList.add('text-gray-300');

                row.innerHTML = `
                    <td class="px-4 py-2">${ex.gender === 'male' ? 'Male' : 'Female'}</td>
                    <td class="px-4 py-2">${ex.age}</td>
                    <td class="px-4 py-2">${ex.weight}</td>
                    <td class="px-4 py-2">${ex.waist}</td>
                    <td class="px-4 py-2">${ex.neck}</td>
                    <td class="px-4 py-2">${ex.bodyFatPercentage}%</td>
                `;

                tableBody.appendChild(row);
            });
        }

        function clearFields() {
            document.getElementById('age').value = '';
            document.getElementById('weight').value = '';
            document.getElementById('waist').value = '';
            document.getElementById('neck').value = '';
        }

        function downloadPDF() {
            const docDefinition = {
                content: [
                    { text: 'Body Fat Percentage Report', style: 'header' },
                    { text: 'Generated on: ' + new Date().toLocaleString(), alignment: 'right', style: 'subheader' },
                    { text: 'Body Fat Percentage Table', style: 'subheader', margin: [0, 20, 0, 10] },
                    {
                        table: {
                            widths: ['*', 'auto', 'auto'],
                            headerRows: 1,
                            body: [
                                ['Description', 'Women', 'Men'],
                                ['Essential fat', '10-13%', '2-5%'],
                                ['Athletes', '14-20%', '6-13%'],
                                ['Fitness', '21-24%', '14-17%'],
                                ['Average', '25-31%', '18-24%'],
                                ['Obese', '32+%', '25+%']
                            ]
                        },
                        style: 'tableHeader'
                    },
                    { text: 'Body Fat Percentage Details', style: 'subheader', margin: [0, 20, 0, 10] },
                    {
                        ul: [
                            'Body fat percentage is a measure of the amount of fat in your body relative to your total body mass.',
                            'It is important for overall health and fitness assessment.',
                            'Different categories indicate varying levels of body fat, impacting health and performance.'
                        ]
                    },
                    { text: 'Body Fat Percentage Data', style: 'subheader', margin: [0, 20, 0, 10] },
                    {
                        table: {
                            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                            headerRows: 1,
                            body: [
                                ['Gender', 'Age', 'Weight (kg)', 'Waist (cm)', 'Neck (cm)', 'Body Fat Percentage'],
                                ...exercises.map(ex => [ex.gender === 'male' ? 'Male' : 'Female', ex.age, ex.weight, ex.waist, ex.neck, ex.bodyFatPercentage + '%'])
                            ]
                        },
                        style: 'tableHeader'
                    },
                    { text: 'Body Fat Category Recommendation', style: 'subheader', margin: [0, 20, 0, 10] },
                    {
                        text: `Based on the calculated data, the average body fat percentage falls under the category of ${getAverageCategory()}.`,
                        margin: [0, 0, 0, 20]
                    },
                    { text: 'Additional Information', style: 'subheader', margin: [0, 20, 0, 10] },
                    {
                        text: `
                            Body fat percentage categories provide a framework for assessing health and fitness levels.
                            Monitoring body fat percentage is essential for managing overall well-being and performance.
                        `
                    },
                    { text: '© 2024 Body Fat Percentage Calculator By Veggie Smart', style: 'footer' }
                ],
                styles: {
                    header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
                    subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
                    tableHeader: { bold: true, fontSize: 13, color: 'black' },
                    footer: { fontSize: 10, italics: true, alignment: 'center', margin: [0, 20, 0, 0] }
                }
            };

            pdfMake.createPdf(docDefinition).download('Body_Fat_Percentage_Report.pdf');
        }

        function getAverageCategory() {
            const avgPercentage = exercises.reduce((acc, ex) => acc + parseFloat(ex.bodyFatPercentage), 0) / exercises.length;

            if (avgPercentage < 14) {
                return 'Athletes';
            } else if (avgPercentage >= 14 && avgPercentage < 21) {
                return 'Fitness';
            } else if (avgPercentage >= 21 && avgPercentage < 25) {
                return 'Average';
            } else {
                return 'Obese';
            }
        }