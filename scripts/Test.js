document.addEventListener('DOMContentLoaded', function () {
const toolsData = {
    NewFeatured : [
        {
            link: "./AddtionalFeatures/ReceiptGenerator.html",
            imageSrc: "https://img.icons8.com/color/500/receipt.png",
            imageAlt: "Receipt Generator",
            tagName: "Beta",
            buttonName: "Receipt Generator",
            description: "Generate professional-level receipts with customizable fields, including logo upload and PDF export options. Ideal for small businesses and freelancers looking for a polished solution to manage their billing needs.",
            lastUpdated: "11 Aug",
            category: "Finance",
            author: "Veggie Smart Team",
            usageTips: "Fill in the necessary fields and customize the receipt layout before exporting.",
            features: ["Customizable Fields", "Logo Upload", "PDF Export"],
            version: "1.2.0",
            privacyPolicy: "User data is only used for generating receipts and is not stored."
        },
        {
            link: "./AddtionalFeatures/qrcodegen.html",
            imageSrc: "https://img.icons8.com/fluency/500/qr-code.png",
            imageAlt: "QR Code Generator",
            tagName: "Free",
            buttonName: "QR Code Generator",
            description: "Create versatile QR codes for various purposes, including URLs, contact information, and Wi-Fi passwords. Enhance your marketing and communication efforts with this easy-to-use tool that supports logo integration and multiple output formats.",
            lastUpdated: "10 Aug",
            category: "Utilities",
            author: "Veggie Smart Team",
            usageTips: "Select the QR code type, input your data, and customize the design before generating.",
            features: ["Multiple QR Code Types", "Logo Integration", "Various Output Formats"],
            version: "2.0.1",
            privacyPolicy: "Generated QR codes are not stored; your data is used solely for the QR code creation process."
        }
    ],
    MarketProCalculators: [
        {
            link: "./MarketCal/Calculate-Total-Price.html",
            imageSrc: "https://img.icons8.com/color/800/calculate.png",
            imageAlt: "Calculate Total Price",
            tagName: "Free",
            buttonName: "Calculate Total Price",
            description: "Quickly determine the total price of goods or services, including tax and discounts. Ideal for businesses and consumers looking to calculate the final cost of purchases.",
            lastUpdated: "09 Aug",
            category: "Business",
            author: "Veggie Smart Team",
            usageTips: "Input the base price, select tax and discount options, and get the total price.",
            features: ["Tax Calculation", "Discount Integration", "Final Cost Output"],
            version: "1.3.2",
            privacyPolicy: "Calculations are performed locally and no data is stored."
        },
        {
            link: "./MarketCal/Calculate-Price-Kg.html",
            imageSrc: "https://img.icons8.com/color/800/weight-kg.png",
            imageAlt: "Calculate Price Kg",
            tagName: "Free",
            buttonName: "Calculate Price Kg",
            description: "Calculate the price per kilogram of any product. This tool is perfect for buyers and sellers to determine unit pricing for bulk goods.",
            lastUpdated: "08 Aug",
            category: "Business",
            author: "Veggie Smart Team",
            usageTips: "Enter the total cost and weight to get the price per kilogram.",
            features: ["Unit Pricing", "Bulk Cost Analysis", "Simple Input"],
            version: "1.2.4",
            privacyPolicy: "Your input data is only used for calculation and not stored."
        },
        {
            link: "./MarketCal/Calculate-Quantity.html",
            imageSrc: "https://img.icons8.com/color/800/scale.png",
            imageAlt: "Calculate Quantity",
            tagName: "Free",
            buttonName: "Calculate Quantity",
            description: "Determine the quantity of goods needed based on total price and unit cost. Essential for budgeting and inventory planning.",
            lastUpdated: "07 Aug",
            category: "Business",
            author: "Veggie Smart Team",
            usageTips: "Provide the total budget and price per unit to find the required quantity.",
            features: ["Budget Planning", "Inventory Management", "Cost Efficiency"],
            version: "1.3.0",
            privacyPolicy: "All calculations are done on your device, and no data is stored."
        },
        {
            link: "./Offers Cal/OffersCal.html",
            imageSrc: "https://img.icons8.com/fluency/800/discount--v1.png",
            imageAlt: "Discount Calculator",
            tagName: "Free",
            buttonName: "Discount Calculator",
            description: "Easily calculate the discount on items, factoring in percentage-based discounts and final price. Perfect for shoppers looking to save or businesses offering sales.",
            lastUpdated: "06 Aug",
            category: "Retail",
            author: "Veggie Smart Team",
            usageTips: "Input the original price and discount percentage to calculate the savings.",
            features: ["Discount Calculation", "Final Price Output", "Savings Analysis"],
            version: "1.1.5",
            privacyPolicy: "Discount details are processed locally and not stored."
        },
        {
            link: "./MarketCal/Profit-Margin-Calculator.html",
            imageSrc: "https://img.icons8.com/arcade/800/point-spread.png",
            imageAlt: "Profit Margin Cal",
            tagName: "Free",
            buttonName: "Profit Margin Cal",
            description: "Analyze your profit margins based on cost and revenue. A vital tool for businesses looking to optimize their profitability.",
            lastUpdated: "05 Aug",
            category: "Finance",
            author: "Veggie Smart Team",
            usageTips: "Enter the cost and selling price to calculate the profit margin.",
            features: ["Profit Analysis", "Cost Efficiency", "Revenue Tracking"],
            version: "2.0.2",
            privacyPolicy: "Profit calculations are done locally and no data is stored."
        },
        {
            link: "./MarketCal/MarketShareCalculator.html",
            imageSrc: "https://img.icons8.com/isometric/800/share.png",
            imageAlt: "Market Share Cal",
            tagName: "Free",
            buttonName: "Market Share Cal",
            description: "Assess your market position with this market share calculator. Analyze your business's share in the market based on revenue or unit sales, providing insights into your competitive landscape.",
            lastUpdated: "05 Aug",
            category: "Business",
            author: "Veggie Smart Team",
            usageTips: "Enter revenue or sales data to calculate market share percentage.",
            features: ["Market Share Analysis", "Revenue Tracking", "Competitive Insights"],
            version: "2.1.0",
            privacyPolicy: "Market data is analyzed securely and is not stored."
        }
    ],
    foodcal: [
        {
            link: "./Recipe Cost Calculator/RecipeCostCalculator.html",
            imageSrc: "https://img.icons8.com/fluency/800/cost.png",
            imageAlt: "Recipe Cost Calculator",
            tagName: "Free",
            buttonName: "Recipe Cost",
            description: "Calculate the total cost of your recipes with this easy-to-use tool. Perfect for chefs, home cooks, and food businesses looking to manage food expenses.",
            lastUpdated: "10 Aug",
            category: "Food",
            author: "Veggie Smart Team",
            usageTips: "Enter the ingredients and their quantities to calculate the overall cost of your recipe.",
            features: ["Ingredient Costing", "Total Expense Calculation", "Customizable Ingredient List"],
            version: "1.4.0",
            privacyPolicy: "Ingredient details are processed locally and are not stored."
        },
        {
            link: "./NutritionCal/NutritionCal.html",
            imageSrc: "https://img.icons8.com/color/800/healthy-food-calories-calculator.png",
            imageAlt: "Nutrition Calculator",
            tagName: "Beta",
            buttonName: "Nutrition Calculator",
            description: "Track and analyze the nutritional content of your meals. Ideal for those managing their diet, whether for health reasons or fitness goals.",
            lastUpdated: "08 Aug",
            category: "Health",
            author: "Veggie Smart Team",
            usageTips: "Input your food items to get detailed nutritional information, including calories, macros, and vitamins.",
            features: ["Nutritional Breakdown", "Calorie Counting", "Diet Planning"],
            version: "1.2.6",
            privacyPolicy: "Nutritional data is analyzed securely and is not stored."
        },
        {
            link: "./Recipe Cost Calculator/Serving-Size-Converter.html",
            imageSrc: "https://img.icons8.com/color/800/tableware.png",
            imageAlt: "Serving Size Converter",
            tagName: "Beta",
            buttonName: "Serving Size Cal",
            description: "Easily convert serving sizes in recipes to meet your needs. Perfect for scaling recipes up or down, whether cooking for one or a crowd.",
            lastUpdated: "09 Aug",
            category: "Food",
            author: "Veggie Smart Team",
            usageTips: "Enter the original serving size and the desired size to get adjusted ingredient quantities.",
            features: ["Serving Size Adjustment", "Recipe Scaling", "Ingredient Conversion"],
            version: "1.3.1",
            privacyPolicy: "Conversion details are processed locally and no data is stored."
        }
    ],
    healthcalc: [
        {
            link: "./calhealth/bmi.html",
            imageSrc: "https://img.icons8.com/fluency/800/bmi.png",
            imageAlt: "Body Mass Index",
            tagName: "Free",
            buttonName: "Body Mass Index",
            description: "Calculate your Body Mass Index (BMI) to assess whether you're underweight, normal weight, overweight, or obese. A vital tool for tracking your health.",
            lastUpdated: "08 Aug",
            category: "Health",
            author: "Veggie Smart Team",
            usageTips: "Input your height and weight to determine your BMI and understand your health status.",
            features: ["BMI Calculation", "Health Assessment", "Weight Category Identification"],
            version: "1.3.0",
            privacyPolicy: "All data is processed locally and is not stored."
        },
        {
            link: "./calhealth/CalorieBurnCalculator.html",
            imageSrc: "https://img.icons8.com/color/800/treadmill-skin-type-3.png",
            imageAlt: "Calorie Burn Calculator",
            tagName: "Beta",
            buttonName: "Calorie Burn Cal",
            description: "Estimate the number of calories burned during various physical activities. Ideal for fitness enthusiasts and those monitoring their calorie expenditure.",
            lastUpdated: "07 Aug",
            category: "Health",
            author: "Veggie Smart Team",
            usageTips: "Select your activity and input the duration to calculate the calories burned.",
            features: ["Calorie Estimation", "Activity Tracking", "Fitness Monitoring"],
            version: "1.2.4",
            privacyPolicy: "Activity data is securely processed and not stored."
        },
        {
            link: "./calhealth/HydrationCalculator.html",
            imageSrc: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/800/external-hydration-anatomy-flaticons-lineal-color-flat-icons-3.png",
            imageAlt: "Hydration Calculator",
            tagName: "Beta",
            buttonName: "Hydration Calculator",
            description: "Calculate your daily water intake needs based on your body weight, activity level, and environment. Essential for maintaining proper hydration.",
            lastUpdated: "11 Aug",
            category: "Health",
            author: "Veggie Smart Team",
            usageTips: "Enter your weight and activity level to get personalized hydration recommendations.",
            features: ["Water Intake Calculation", "Hydration Tips", "Health Insights"],
            version: "1.3.2",
            privacyPolicy: "Hydration data is processed locally without storage."
        },
        {
            link: "./calhealth/MacroNutrientcal.html",
            imageSrc: "https://img.icons8.com/external-flaticons-flat-flat-icons/800/external-meal-fitness-and-healthy-living-flaticons-flat-flat-icons.png",
            imageAlt: "Macro Nutrient Calculator",
            tagName: "Beta",
            buttonName: "Macro Nutrient Cal",
            description: "Determine the optimal intake of macronutrients—carbs, proteins, and fats—based on your dietary needs and fitness goals.",
            lastUpdated: "09 Aug",
            category: "Health",
            author: "Veggie Smart Team",
            usageTips: "Input your daily calorie intake to calculate your ideal macronutrient distribution.",
            features: ["Macronutrient Calculation", "Diet Planning", "Fitness Optimization"],
            version: "1.2.8",
            privacyPolicy: "Macronutrient data is processed securely and not stored."
        },
        {
            link: "./calhealth/Ideal-Weight-Calculator.html",
            imageSrc: "https://img.icons8.com/external-wanicon-flat-wanicon/800/external-weight-health-checkup-wanicon-flat-wanicon.png",
            imageAlt: "Ideal Weight Calculator",
            tagName: "Free",
            buttonName: "Ideal Weight Cal",
            description: "Find out your ideal weight range based on your height, gender, and age. An essential tool for setting healthy weight goals.",
            lastUpdated: "10 Aug",
            category: "Health",
            author: "Veggie Smart Team",
            usageTips: "Enter your height, gender, and age to calculate your ideal weight.",
            features: ["Ideal Weight Calculation", "Health Goal Setting", "Weight Management"],
            version: "1.4.1",
            privacyPolicy: "Weight data is processed locally and not stored."
        },
        {
            link: "./calhealth/Menstrual-Cycle-Tracker.html",
            imageSrc: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/800/external-menstrual-cycle-anatomy-flaticons-lineal-color-flat-icons-2.png",
            imageAlt: "Menstrual Cycle Tracker",
            tagName: "Beta",
            buttonName: "Menstrual Cycle",
            description: "Track and predict your menstrual cycle with this intuitive tool. Ideal for women looking to monitor their periods, ovulation, and fertility, helping in family planning and health management.",
            lastUpdated: "11 Aug",
            category: "Health",
            author: "Veggie Smart Team",
            usageTips: "Enter your cycle data to get accurate predictions and insights.",
            features: ["Cycle Tracking", "Fertility Prediction", "Period Log", "Custom Alerts"],
            version: "1.2.3",
            privacyPolicy: "Your data is securely stored and used only for improving your experience."
        }
    ],            
    
};

    // Function to create tool cards
    function createToolCard(tool) {
        return `
        <div class="tool-card">
                <div class="tool-card-content relative">
                    <img src="${tool.imageSrc}" alt="${tool.imageAlt}" class="mx-auto mt-4 w-16 h-16 object-cover">
                    <h2 class="tool-card-title mt-4">${tool.buttonName}</h2>
                    <span class="tool-card-tag absolute top-2 left-3">${tool.tagName}</span>
                    <a href="${tool.link}" class="tool-card-button mt-4">Go to Tool</a>
                    <p class="text-sm"><strong></strong> ${tool.lastUpdated}</p>
                    <p class="tool-card-tag text-sm absolute top-2 right-3"><strong>V </strong> ${tool.version}</p>
                    <div class="more-info hidden">
                        <p class="my-2 text-gray-300 text-sm">${tool.description}</p>
                        <p class="text-sm"><strong>Author:</strong> ${tool.author}</p>
                        <p class="text-sm"><strong>Usage Tips:</strong> ${tool.usageTips}</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Function to load all tools
    function loadTools(tools) {
        const toolsContainer = document.getElementById('toolsContainer');
        toolsContainer.innerHTML = ''; // Clear previous content

        for (const category in tools) {
            tools[category].forEach(tool => {
                toolsContainer.innerHTML += createToolCard(tool);
            });
        }

    }

    // Search functionality
    document.getElementById('search').addEventListener('input', function () {
        const searchQuery = this.value.toLowerCase();
        const filteredTools = {};

        for (const category in toolsData) {
            filteredTools[category] = toolsData[category].filter(tool =>
                tool.buttonName.toLowerCase().includes(searchQuery) ||
                tool.description.toLowerCase().includes(searchQuery)
            );
        }

        loadTools(filteredTools);
    });

    // Load tools on page load
    loadTools(toolsData);
});
