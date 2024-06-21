const fooddata = [
    {
        link: "./Recipe Cost Calculator/RecipeCostCalculator.html",
        imageSrc: "https://img.icons8.com/fluency/800/cost.png",
        imageAlt: "Calculator 1",
        tagName: "Free",
        buttonName: "Recipe Cost"
    },
    {
        link: "./NutritionCal/NutritionCal.html",
        imageSrc: "https://img.icons8.com/color/800/healthy-food-calories-calculator.png",
        imageAlt: "Nutrition",
        tagName: "Beta",
        buttonName: "Nutrition Calculator"
    },
];

const foodcontainer = document.getElementById("FoodCalculators");
foodcontainer.innerHTML = ''; 

fooddata.forEach(item => {
    foodcontainer.innerHTML += `
        <a href="${item.link}">
            <div class="calbtn">
                <div>
                    <img src="${item.imageSrc}" alt="${item.imageAlt}" loading="lazy">
                </div>
                <div class="btnsecondsection">
                    <span class="btn-tagname">${item.tagName}</span>
                    <h4 class="btn-name">${item.buttonName}</h4>
                </div>
            </div>
        </a>
    `;
});
