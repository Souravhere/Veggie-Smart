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
        {
            link: "./Recipe Cost Calculator/Serving-Size-Converter.html",
            imageSrc: "https://img.icons8.com/color/800/tableware.png",
            imageAlt: "Serving Size Converter",
            tagName: "Beta",
            buttonName: "Serving Size Cal"
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
        {
            link: "./calhealth/Ideal-Weight-Calculator.html",
            imageSrc: "https://img.icons8.com/external-wanicon-flat-wanicon/800/external-weight-health-checkup-wanicon-flat-wanicon.png",
            imageAlt: "Ideal Weight Calculator",
            tagName: "Free",
            buttonName: "Ideal Weight Cal"
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
// this data for the  FinanceCal Calculators 
function FinanceCal(){
    const Financecontainer = [
        {
            link: "./FinanceCal/LoanCal.html",
            imageSrc: "https://img.icons8.com/external-nawicon-outline-color-nawicon/800/external-Loan-economy-nawicon-outline-color-nawicon.png",
            imageAlt: "Loan Calculator",
            tagName: "Free",
            buttonName: "Loan Calculator"
        },
        {
            link: "./FinanceCal/InvestmentReturn.html",
            imageSrc: "https://img.icons8.com/isometric/800/economic-improvement--v1.png",
            imageAlt: "Investment Return Cal",
            tagName: "Free",
            buttonName: "Investment Return"
        },
        {
            link: "./FinanceCal/CalSavingsGoal.html",
            imageSrc: "https://img.icons8.com/3d-fluency/800/money-box.png",
            imageAlt: "Savings Goal",
            tagName: "Free",
            buttonName: "Savings Goal"
        },
        {
            link: "./FinanceCal/BudgetPlanner.html",
            imageSrc: "https://img.icons8.com/3d-fluency/800/accounting.png",
            imageAlt: "Budget Planner",
            tagName: "Free",
            buttonName: "Budget Planner"
        },
        {
            link: "./FinanceCal/InterestCal.html",
            imageSrc: "https://img.icons8.com/external-filled-color-icons-papa-vector/800/external-Interest-corporate-insurance-filled-color-icons-papa-vector.png",
            imageAlt: "Simple Interest",
            tagName: "Free",
            buttonName: "Simple Interest"
        },
        {
            link: "./FinanceCal/CompoundInterest.html",
            imageSrc: "https://img.icons8.com/fluency/800/credit-card-interest.png",
            imageAlt: "Compound Interest",
            tagName: "Free",
            buttonName: "Compound Interest"
        },
    ]
    const FinanceCal = document.getElementById("FinanceCal");
    FinanceCal.innerHTML = ''; 
    
    Financecontainer.forEach(item => {
        FinanceCal.innerHTML += `
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
FinanceCal()
// this data for the Home Measurements Calculators 
function HomeMeasureCal(){
    const HomeMeasurecontainer = [
        {
            link: "./HomeImprovementCals/PaintCal.html",
            imageSrc: "https://img.icons8.com/glassmorphism/800/fill-color.png",
            imageAlt: "Paint Calculator",
            tagName: "Beta",
            buttonName: "Paint Calculator"
        },
        {
            link: "./HomeImprovementCals/GardenArea.html",
            imageSrc: "https://img.icons8.com/color/800/measurement-ui.png",
            imageAlt: "Garden Area Cal",
            tagName: "Beta",
            buttonName: "Garden Area Cal"
        },
        {
            link: "./HomeImprovementCals/FlooringCalculator.html",
            imageSrc: "https://img.icons8.com/stickers/800/wooden-floor.png",
            imageAlt: "Advanced Flooring",
            tagName: "Beta",
            buttonName: "Advanced Flooring"
        },
        {
            link: "./HomeImprovementCals/RenovationCostEstimator.html",
            imageSrc: "https://img.icons8.com/color/800/drill.png",
            imageAlt: "Renovation Cost Estimator",
            tagName: "Beta",
            buttonName: "Renovation Cost"
        },
    ]
    const HomeimpCal = document.getElementById("HomeimpCal");
    HomeimpCal.innerHTML = ''; 
    
    HomeMeasurecontainer.forEach(item => {
        HomeimpCal.innerHTML += `
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
HomeMeasureCal()
// this data for the Education Calculators
function EducationCal(){
    const Educationdatacontainer = [
        {
            link: "./EducationCalculators/PercentageCalculator.html",
            imageSrc: "https://img.icons8.com/color/800/report-card.png",
            imageAlt: "Percentage Calculator",
            tagName: "Free",
            buttonName: "Percentage Cal"
        },
        {
            link: "./EducationCalculators/GradeCalculator.html",
            imageSrc: "https://img.icons8.com/fluency/800/grades.png",
            imageAlt: "Advanced Grade Calculator",
            tagName: "Free",
            buttonName: "Advanced Grade"
        },
        {
            link: "./EducationCalculators/StudyTimePlanner.html",
            imageSrc: "https://img.icons8.com/external-smashingstocks-isometric-smashing-stocks/800/external-Study-Time-business-smashingstocks-isometric-smashing-stocks.png",
            imageAlt: "Study Time Planner",
            tagName: "Free",
            buttonName: "Study Time Planner"
        },
        {
            link: "./EducationCalculators/TuitionFeeCal.html",
            imageSrc: "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/800/external-Tuition-Fee-school-smashingstocks-flat-smashing-stocks.png",
            imageAlt: "Tuition Fee Calculator",
            tagName: "Free",
            buttonName: "Tuition Fee Cal"
        },
    ]
    const educationCalContainer = document.getElementById("EducationCal");
    educationCalContainer.innerHTML = ''; 
    
    Educationdatacontainer.forEach(item => {
        educationCalContainer.innerHTML += `
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
EducationCal()

// this data for the Fitness Calculators
function FitnessCal(){
    const Fintnesscontainer = [
        {
            link: "./FitnessCalculators/WorkoutPlanGenerator.html",
            imageSrc: "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/800/external-Workout-Plan-sports-smashingstocks-flat-smashing-stocks.png",
            imageAlt: "Workout Plan Generator",
            tagName: "Free",
            buttonName: "Workout Plan Gen"
        },
        {
            link: "./FitnessCalculators/BodyFatPercentage.html",
            imageSrc: "https://img.icons8.com/external-flaticons-flat-flat-icons/800/external-body-fat-fitness-at-home-flaticons-flat-flat-icons-2.png",
            imageAlt: "Body Fat Percentage",
            tagName: "Free",
            buttonName: "Body Fat Percentage"
        },
        {
            link: "./FitnessCalculators/One-RepMaxCal.html",
            imageSrc: "https://img.icons8.com/color/800/weightlift.png",
            imageAlt: "One-Rep Max Calculator",
            tagName: "Free",
            buttonName: "One-Rep Max Cal"
        },
        {
            link: "./FitnessCalculators/PaceCalculator.html",
            imageSrc: "https://img.icons8.com/emoji/800/man-mountain-biking.png",
            imageAlt: "Advanced Pace Cal",
            tagName: "Free",
            buttonName: "Advanced Pace Cal"
        },
    ]
    const FitnessCalContainer = document.getElementById("FitnessCal");
    FitnessCalContainer.innerHTML = ''; 
    
    Fintnesscontainer.forEach(item => {
        FitnessCalContainer.innerHTML += `
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
FitnessCal()
// this data for the Automotive Calculators
function AutomotiveCal(){
    const Automotivecontainer = [
        {
            link: "./AutomotiveCalculators/Automotive-Calculators.html",
            imageSrc: "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/800/external-Fuel-Cost-commodities-smashingstocks-flat-smashing-stocks.png",
            imageAlt: "Fuel Cost Calculator",
            tagName: "Free",
            buttonName: "Fuel Cost Cal"
        },
        {
            link: "./AutomotiveCalculators/MaintenanceCostCalculator.html",
            imageSrc: "https://img.icons8.com/stickers/800/online-maintenance-portal.png",
            imageAlt: "Maintenance Cost Calculator",
            tagName: "Free",
            buttonName: "Maintenance Cost"
        },
        {
            link: "AutomotiveCalculators/VehicleLoanCalculator.html",
            imageSrc: "https://img.icons8.com/parakeet/800/car-loan.png",
            imageAlt: "Vehicle Loan Calculator",
            tagName: "Free",
            buttonName: "Vehicle Loan Cal"
        },
        {
            link: "AutomotiveCalculators/DepreciationCalculator.html",
            imageSrc: "https://img.icons8.com/fluency/800/administrative-tools.png",
            imageAlt: "Advanced Depreciation Cal",
            tagName: "Free",
            buttonName: "Depreciation Cost"
        },
    ]
    const AutomotiveCalContainer = document.getElementById("AutomotiveCal");
    AutomotiveCalContainer.innerHTML = ''; 
    
   Automotivecontainer.forEach(item => {
       AutomotiveCalContainer.innerHTML += `
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
AutomotiveCal()
// this data for the Event Plannning Calculators
function EventPlanCal(){
    const Eventcontainer = [
        {
            link: "./EventPlanningCalculators/Guest-list-Cal.html   ",
            imageSrc: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/800/external-guest-list-night-club-flaticons-lineal-color-flat-icons-3.png",
            imageAlt: "Guest List Calculator",
            tagName: "Beta",
            buttonName: "Guest List Cal"
        },
        {
            link: "./EventPlanningCalculators/Budget-Planner.html",
            imageSrc: "https://img.icons8.com/color/800/budget.png",
            imageAlt: "Budget Planner",
            tagName: "Beta",
            buttonName: "Budget Planner"
        },
        {
            link: "./EventPlanningCalculators/Catering-Cal.html",
            imageSrc: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/800/external-catering-bowling-alley-and-arcade-flaticons-lineal-color-flat-icons.png",
            imageAlt: "Catering Calculator",
            tagName: "Beta",
            buttonName: "Catering Calculator"
        },
        {
            link: "./EventPlanningCalculators/VenueCapacityCalculator.html",
            imageSrc: "https://img.icons8.com/fluency/800/street-food.png",
            imageAlt: "Venue Capacity Cal",
            tagName: "Beta",
            buttonName: "Venue Capacity Cal"
        },
    ]
    const EventPlanCalContainer = document.getElementById("EventPlanneCal");
   EventPlanCalContainer.innerHTML = ''; 
    
   Eventcontainer.forEach(item => {
       EventPlanCalContainer.innerHTML += `
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
EventPlanCal()