document.getElementById('addIngredient').addEventListener('click', function() {
    const ingredientList = document.getElementById('ingredientList');
    const ingredientDiv = document.createElement('div');
    ingredientDiv.className = 'mb-4 flex space-x-2';

    const ingredientName = document.createElement('input');
    ingredientName.type = 'text';
    ingredientName.placeholder = 'Ingredient Name';
    ingredientName.className = 'sm:flex-grow block  p-2 rounded-md dark-input';
    ingredientName.setAttribute('aria-label', 'Ingredient Name');
    ingredientName.setAttribute('title', 'Enter the name of the ingredient');

    const ingredientQuantity = document.createElement('input');
    ingredientQuantity.type = 'number';
    ingredientQuantity.placeholder = 'Quantity';
    ingredientQuantity.className = 'sm:flex-grow block p-2 rounded-md dark-input';
    ingredientQuantity.setAttribute('aria-label', 'Quantity');
    ingredientQuantity.setAttribute('title', 'Enter the quantity of the ingredient for the original recipe');

    const ingredientUnit = document.createElement('input');
    ingredientUnit.type = 'text';
    ingredientUnit.placeholder = 'Unit (e.g., cups, grams)';
    ingredientUnit.className = 'sm:flex-grow block p-2 rounded-md dark-input';
    ingredientUnit.setAttribute('aria-label', 'Unit');
    ingredientUnit.setAttribute('title', 'Enter the unit of measurement for the ingredient');

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'bg-red-600 text-white px-4 py-2 rounded-md';
    removeButton.addEventListener('click', () => ingredientDiv.remove());

    ingredientDiv.appendChild(ingredientName);
    ingredientDiv.appendChild(ingredientQuantity);
    ingredientDiv.appendChild(ingredientUnit);
    ingredientDiv.appendChild(removeButton);

    ingredientList.appendChild(ingredientDiv);
  });

  document.getElementById('convert').addEventListener('click', function() {
    const originalServings = document.getElementById('originalServings').value;
    const newServings = document.getElementById('newServings').value;
    const ingredientList = document.getElementById('ingredientList').children;
    const convertedList = document.getElementById('convertedList');
    convertedList.innerHTML = '';

    for (let ingredientDiv of ingredientList) {
      const name = ingredientDiv.children[0].value;
      const quantity = ingredientDiv.children[1].value;
      const unit = ingredientDiv.children[2].value;

      const newQuantity = (quantity * newServings / originalServings).toFixed(2);
      const convertedIngredient = document.createElement('div');
      convertedIngredient.textContent = `${name}: ${newQuantity} ${unit}`;
      convertedList.appendChild(convertedIngredient);
    }

    generatePDF();
  });

  document.getElementById('downloadPDF').addEventListener('click', generatePDF);

  function generatePDF() {
    const originalServings = document.getElementById('originalServings').value;
    const newServings = document.getElementById('newServings').value;
    const convertedList = document.getElementById('convertedList').children;

    const docDefinition = {
      content: [
        { text: 'Serving Size Converter', style: 'header' },
        { text: `Original Servings: ${originalServings}`, margin: [0, 10, 0, 5] },
        { text: `New Servings: ${newServings}`, margin: [0, 5, 0, 10] },
        { text: 'Converted Ingredients:', style: 'subheader' },
        ...Array.from(convertedList).map(ingredient => ({ text: ingredient.textContent })),
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 5]
        }
      }
    };

    pdfMake.createPdf(docDefinition).download('Serving_Size_Converter.pdf');
  }