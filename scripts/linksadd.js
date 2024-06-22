function foodcal() {
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
}
foodcal()
// this data for the  Health Calculators 
function healthcalc(){
    const Healthcontainer = [
        {
            link: "./calhealth/bmi.html",
            imageSrc: "https://img.icons8.com/fluency/800/bmi.png",
            imageAlt: "BMI",
            tagName: "Free",
            buttonName: "Body Mass Index"
        },
        {
            link: "./calhealth/CalorieBurnCalculator.html",
            imageSrc: "https://img.icons8.com/color/800/treadmill-skin-type-3.png",
            imageAlt: "Calorie Burn Cal",
            tagName: "Beta",
            buttonName: "Calorie Burn Cal"
        },
        {
            link: "./calhealth/HydrationCalculator.html",
            imageSrc: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/800/external-hydration-anatomy-flaticons-lineal-color-flat-icons-3.png",
            imageAlt: "Hydration Calculator",
            tagName: "Beta",
            buttonName: "Hydration Calculator"
        },
        {
            link: "./calhealth/MacroNutrientcal.html",
            imageSrc: "https://img.icons8.com/external-flaticons-flat-flat-icons/800/external-meal-fitness-and-healthy-living-flaticons-flat-flat-icons.png",
            imageAlt: "Macro Nutrient Calculator",
            tagName: "Beta",
            buttonName: "Macro Nutrient Cal"
        },
    ]
    const healthcont = document.getElementById("HealthCal");
    healthcont.innerHTML = ''; 
    
    Healthcontainer.forEach(item => {
        healthcont.innerHTML += `
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
}
healthcalc()