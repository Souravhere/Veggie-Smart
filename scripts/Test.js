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
    FinanceCal: [
        {
            link: "./FinanceCal/LoanCal.html",
            imageSrc: "https://img.icons8.com/external-nawicon-outline-color-nawicon/800/external-Loan-economy-nawicon-outline-color-nawicon.png",
            imageAlt: "Loan Calculator",
            tagName: "Free",
            buttonName: "Loan Calculator",
            description: "Calculate your loan payments, interest rates, and total repayment amounts with ease. Perfect for managing personal and business loans.",
            lastUpdated: "11 Aug",
            category: "Finance",
            author: "Veggie Smart Team",
            usageTips: "Enter the loan amount, interest rate, and term to calculate monthly payments and total interest.",
            features: ["Loan Calculation", "Interest Rate Analysis", "Repayment Schedule"],
            version: "1.4.2",
            privacyPolicy: "Loan data is processed locally and not stored."
        },
        {
            link: "./FinanceCal/InvestmentReturn.html",
            imageSrc: "https://img.icons8.com/isometric/800/economic-improvement--v1.png",
            imageAlt: "Investment Return Calculator",
            tagName: "Free",
            buttonName: "Investment Return",
            description: "Estimate the return on your investments over time. Ideal for planning future financial growth and analyzing investment performance.",
            lastUpdated: "10 Aug",
            category: "Finance",
            author: "Veggie Smart Team",
            usageTips: "Input your initial investment, expected return rate, and time period to calculate your potential earnings.",
            features: ["Investment Analysis", "Return Estimation", "Financial Planning"],
            version: "1.3.5",
            privacyPolicy: "Investment data is processed securely and not stored."
        },
        {
            link: "./FinanceCal/CalSavingsGoal.html",
            imageSrc: "https://img.icons8.com/3d-fluency/800/money-box.png",
            imageAlt: "Savings Goal Calculator",
            tagName: "Free",
            buttonName: "Savings Goal",
            description: "Set and track your savings goals with this calculator. Perfect for achieving financial milestones and ensuring you stay on track with your savings plan.",
            lastUpdated: "09 Aug",
            category: "Finance",
            author: "Veggie Smart Team",
            usageTips: "Define your savings target and time frame to receive a savings plan with monthly contributions.",
            features: ["Goal Setting", "Savings Tracking", "Financial Milestone Planning"],
            version: "1.4.0",
            privacyPolicy: "Savings data is processed locally and not stored."
        },
        {
            link: "./FinanceCal/BudgetPlanner.html",
            imageSrc: "https://img.icons8.com/3d-fluency/800/accounting.png",
            imageAlt: "Budget Planner",
            tagName: "Free",
            buttonName: "Budget Planner",
            description: "Create and manage your budget effectively with this planner. Suitable for both personal and business financial management.",
            lastUpdated: "08 Aug",
            category: "Finance",
            author: "Veggie Smart Team",
            usageTips: "Input your income and expenses to create a balanced budget that meets your financial goals.",
            features: ["Budget Planning", "Expense Tracking", "Income Management"],
            version: "1.3.9",
            privacyPolicy: "Budget data is securely processed and not stored."
        },
        {
            link: "./FinanceCal/InterestCal.html",
            imageSrc: "https://img.icons8.com/external-filled-color-icons-papa-vector/800/external-Interest-corporate-insurance-filled-color-icons-papa-vector.png",
            imageAlt: "Simple Interest Calculator",
            tagName: "Free",
            buttonName: "Simple Interest",
            description: "Easily calculate simple interest on loans or investments. A must-have tool for quick financial analysis.",
            lastUpdated: "11 Aug",
            category: "Finance",
            author: "Veggie Smart Team",
            usageTips: "Enter the principal amount, interest rate, and time period to calculate the simple interest.",
            features: ["Simple Interest Calculation", "Quick Financial Analysis", "Interest Estimation"],
            version: "1.2.7",
            privacyPolicy: "Interest data is processed locally and not stored."
        },
        {
            link: "./FinanceCal/CompoundInterest.html",
            imageSrc: "https://img.icons8.com/fluency/800/credit-card-interest.png",
            imageAlt: "Compound Interest Calculator",
            tagName: "Free",
            buttonName: "Compound Interest",
            description: "Calculate compound interest on your investments or loans. Ideal for understanding the growth potential of your savings or the cost of borrowing.",
            lastUpdated: "09 Aug",
            category: "Finance",
            author: "Veggie Smart Team",
            usageTips: "Enter the principal, interest rate, time period, and compounding frequency to calculate compound interest.",
            features: ["Compound Interest Calculation", "Investment Growth Analysis", "Loan Cost Estimation"],
            version: "1.4.3",
            privacyPolicy: "Compound interest data is processed locally and not stored."
        },
        {
            link: "./FinanceCal/Cryptocurrency-Profit.html",
            imageSrc: "https://img.icons8.com/isometric/800/blockchain-technology.png",
            imageAlt: "Cryptocurrency Profit Calculator",
            tagName: "Free",
            buttonName: "Cryptocurrency Profit",
            description: "Track and calculate your cryptocurrency profits in real-time. Essential for crypto traders and investors to monitor their earnings and make informed decisions.",
            lastUpdated: "11 Aug",
            category: "Finance",
            author: "Veggie Smart Team",
            usageTips: "Input your purchase and sale details to calculate your cryptocurrency profits or losses.",
            features: ["Crypto Profit Calculation", "Real-Time Price Tracking", "Investment Analysis"],
            version: "1.5.0",
            privacyPolicy: "Cryptocurrency data is processed securely and not stored."
        }
    ],
    HomeMeasureCal : [
        {
            link: "./HomeImprovementCals/PaintCal.html",
            imageSrc: "https://img.icons8.com/glassmorphism/800/fill-color.png",
            imageAlt: "Paint Calculator",
            tagName: "Beta",
            buttonName: "Paint Calculator",
            description: "Easily calculate the amount of paint required for your home projects. Perfect for planning and budgeting your painting tasks.",
            lastUpdated: "12 Aug",
            category: "Home Improvement",
            author: "Veggie Smart Team",
            usageTips: "Enter the dimensions of the area to be painted and the coverage per gallon to estimate the paint needed.",
            features: ["Paint Coverage Estimation", "Area Calculation", "Budget Planning"],
            version: "1.2.4",
            privacyPolicy: "Data is processed locally and not stored."
        },
        {
            link: "./HomeImprovementCals/GardenArea.html",
            imageSrc: "https://img.icons8.com/color/800/measurement-ui.png",
            imageAlt: "Garden Area Calculator",
            tagName: "Beta",
            buttonName: "Garden Area Cal",
            description: "Calculate the area of your garden to plan landscaping, planting, or lawn care. Ideal for both DIY gardeners and professionals.",
            lastUpdated: "11 Aug",
            category: "Home Improvement",
            author: "Veggie Smart Team",
            usageTips: "Input the dimensions of your garden to determine the total area for various applications.",
            features: ["Area Calculation", "Landscaping Planning", "Garden Management"],
            version: "1.3.1",
            privacyPolicy: "Garden area data is processed securely and not stored."
        },
        {
            link: "./HomeImprovementCals/FlooringCalculator.html",
            imageSrc: "https://img.icons8.com/stickers/800/wooden-floor.png",
            imageAlt: "Advanced Flooring Calculator",
            tagName: "Beta",
            buttonName: "Advanced Flooring",
            description: "Estimate the amount of flooring material needed for your space, considering waste and pattern alignment. Essential for accurate budgeting and material ordering.",
            lastUpdated: "10 Aug",
            category: "Home Improvement",
            author: "Veggie Smart Team",
            usageTips: "Provide the room dimensions and type of flooring to calculate the required materials.",
            features: ["Material Estimation", "Waste Calculation", "Pattern Alignment"],
            version: "1.4.0",
            privacyPolicy: "Flooring data is processed locally and not stored."
        },
        {
            link: "./HomeImprovementCals/RenovationCostEstimator.html",
            imageSrc: "https://img.icons8.com/color/800/drill.png",
            imageAlt: "Renovation Cost Estimator",
            tagName: "Beta",
            buttonName: "Renovation Cost",
            description: "Get an accurate estimate of renovation costs for your home projects. Perfect for budgeting and financial planning before starting any renovation.",
            lastUpdated: "09 Aug",
            category: "Home Improvement",
            author: "Veggie Smart Team",
            usageTips: "Enter the project details to estimate labor, materials, and total renovation costs.",
            features: ["Cost Estimation", "Budget Planning", "Material and Labor Calculation"],
            version: "1.5.2",
            privacyPolicy: "Renovation data is processed locally and not stored."
        }
    ],
    
    EducationCal : [
        {
            link: "./EducationCalculators/PercentageCalculator.html",
            imageSrc: "https://img.icons8.com/color/800/report-card.png",
            imageAlt: "Percentage Calculator",
            tagName: "Free",
            buttonName: "Percentage Cal",
            description: "Calculate your exam percentages quickly and accurately. Ideal for students and educators to assess performance.",
            lastUpdated: "12 Aug",
            category: "Education",
            author: "Veggie Smart Team",
            usageTips: "Input your scores and total marks to calculate the percentage.",
            features: ["Percentage Calculation", "Performance Assessment", "Easy to Use"],
            version: "1.1.3",
            privacyPolicy: "Percentage data is processed locally and not stored."
        },
        {
            link: "./EducationCalculators/GradeCalculator.html",
            imageSrc: "https://img.icons8.com/fluency/800/grades.png",
            imageAlt: "Advanced Grade Calculator",
            tagName: "Free",
            buttonName: "Advanced Grade",
            description: "Calculate your grades across multiple subjects and assess overall performance. A comprehensive tool for students and teachers.",
            lastUpdated: "11 Aug",
            category: "Education",
            author: "Veggie Smart Team",
            usageTips: "Enter your subject grades to calculate overall performance and GPA.",
            features: ["Grade Calculation", "GPA Estimation", "Multiple Subject Support"],
            version: "1.2.6",
            privacyPolicy: "Grade data is processed locally and not stored."
        },
        {
            link: "./EducationCalculators/StudyTimePlanner.html",
            imageSrc: "https://img.icons8.com/external-smashingstocks-isometric-smashing-stocks/800/external-Study-Time-business-smashingstocks-isometric-smashing-stocks.png",
            imageAlt: "Study Time Planner",
            tagName: "Free",
            buttonName: "Study Time Planner",
            description: "Organize your study schedule with this planner. Optimize your time management and improve your academic performance.",
            lastUpdated: "10 Aug",
            category: "Education",
            author: "Veggie Smart Team",
            usageTips: "Plan your study time by entering subjects and available hours to create an effective timetable.",
            features: ["Time Management", "Study Planning", "Academic Improvement"],
            version: "1.3.0",
            privacyPolicy: "Study schedule data is processed securely and not stored."
        },
        {
            link: "./EducationCalculators/TuitionFeeCal.html",
            imageSrc: "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/800/external-Tuition-Fee-school-smashingstocks-flat-smashing-stocks.png",
            imageAlt: "Tuition Fee Calculator",
            tagName: "Free",
            buttonName: "Tuition Fee Cal",
            description: "Calculate your total tuition fees, including additional costs. Essential for students and parents to budget educational expenses.",
            lastUpdated: "09 Aug",
            category: "Education",
            author: "Veggie Smart Team",
            usageTips: "Enter your tuition fees and additional costs to calculate the total educational expenses.",
            features: ["Tuition Fee Calculation", "Budgeting", "Expense Tracking"],
            version: "1.4.1",
            privacyPolicy: "Tuition fee data is processed locally and not stored."
        },
        {
            link: "./EducationCalculators/Course-Load-Planner.html",
            imageSrc: "https://img.icons8.com/color/800/classroom.png",
            imageAlt: "Course Load Planner",
            tagName: "Free",
            buttonName: "Course Load Planner",
            description: "Plan your course load for the semester to balance study time and workload. Ideal for students looking to optimize their academic schedule.",
            lastUpdated: "08 Aug",
            category: "Education",
            author: "Veggie Smart Team",
            usageTips: "Input your courses and credits to plan a balanced academic schedule.",
            features: ["Course Planning", "Credit Management", "Time Optimization"],
            version: "1.3.8",
            privacyPolicy: "Course load data is processed securely and not stored."
        }
    ],
    FitnessCal: [
        {
            link: "./FitnessCalculators/WorkoutPlanGenerator.html",
            imageSrc: "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/800/external-Workout-Plan-sports-smashingstocks-flat-smashing-stocks.png",
            imageAlt: "Workout Plan Generator",
            tagName: "Free",
            buttonName: "Workout Plan Gen",
            description: "Create personalized workout plans based on your fitness goals and preferences. Suitable for beginners and advanced athletes.",
            lastUpdated: "12 Aug",
            category: "Fitness",
            author: "Veggie Smart Team",
            usageTips: "Enter your fitness goals, preferred exercises, and available time to generate a workout plan.",
            features: ["Custom Workout Plans", "Goal Tracking", "Exercise Database"],
            version: "1.4.2",
            privacyPolicy: "Your workout data is kept private and used only to generate your plan."
        },
        {
            link: "./FitnessCalculators/BodyFatPercentage.html",
            imageSrc: "https://img.icons8.com/external-flaticons-flat-flat-icons/800/external-body-fat-fitness-at-home-flaticons-flat-flat-icons-2.png",
            imageAlt: "Body Fat Percentage",
            tagName: "Free",
            buttonName: "Body Fat Percentage",
            description: "Accurately calculate your body fat percentage using various methods, providing insights into your fitness level.",
            lastUpdated: "10 Aug",
            category: "Fitness",
            author: "Veggie Smart Team",
            usageTips: "Input your measurements to get an estimate of your body fat percentage.",
            features: ["Multiple Calculation Methods", "Fitness Insights", "Health Tracking"],
            version: "2.0.1",
            privacyPolicy: "Measurement data is processed locally and not stored."
        },
        {
            link: "./FitnessCalculators/One-RepMaxCal.html",
            imageSrc: "https://img.icons8.com/color/800/weightlift.png",
            imageAlt: "One-Rep Max Calculator",
            tagName: "Free",
            buttonName: "One-Rep Max Cal",
            description: "Determine your one-rep max for various exercises, helping you optimize your strength training.",
            lastUpdated: "08 Aug",
            category: "Fitness",
            author: "Veggie Smart Team",
            usageTips: "Enter the weight lifted and the number of reps to calculate your one-rep max.",
            features: ["Strength Calculation", "Training Optimization", "Multiple Exercises"],
            version: "1.5.0",
            privacyPolicy: "All data entered is used only for the calculation and not stored."
        },
        {
            link: "./FitnessCalculators/PaceCalculator.html",
            imageSrc: "https://img.icons8.com/emoji/800/man-mountain-biking.png",
            imageAlt: "Advanced Pace Cal",
            tagName: "Free",
            buttonName: "Advanced Pace Cal",
            description: "Calculate your running or cycling pace, and analyze your performance over different distances.",
            lastUpdated: "07 Aug",
            category: "Fitness",
            author: "Veggie Smart Team",
            usageTips: "Provide the distance and time to get your pace and performance insights.",
            features: ["Pace Calculation", "Performance Analysis", "Distance Tracking"],
            version: "1.3.1",
            privacyPolicy: "Pace calculations are done locally without storing any data."
        }
    ],
    
    Automotivecontainer: [
        {
            link: "./AutomotiveCalculators/Automotive-Calculators.html",
            imageSrc: "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/800/external-Fuel-Cost-commodities-smashingstocks-flat-smashing-stocks.png",
            imageAlt: "Fuel Cost Calculator",
            tagName: "Free",
            buttonName: "Fuel Cost Cal",
            description: "Estimate your fuel expenses based on distance and fuel efficiency. Ideal for budgeting and trip planning.",
            lastUpdated: "11 Aug",
            category: "Automotive",
            author: "Veggie Smart Team",
            usageTips: "Enter the distance and your vehicle's fuel efficiency to calculate fuel costs.",
            features: ["Fuel Expense Calculation", "Trip Planning", "Cost Estimation"],
            version: "2.2.0",
            privacyPolicy: "Fuel data is processed locally and not saved."
        },
        {
            link: "./AutomotiveCalculators/MaintenanceCostCalculator.html",
            imageSrc: "https://img.icons8.com/stickers/800/online-maintenance-portal.png",
            imageAlt: "Maintenance Cost Calculator",
            tagName: "Free",
            buttonName: "Maintenance Cost",
            description: "Calculate the maintenance costs of your vehicle over time, helping you budget for upkeep.",
            lastUpdated: "09 Aug",
            category: "Automotive",
            author: "Veggie Smart Team",
            usageTips: "Provide details about your vehicle and maintenance schedule to estimate costs.",
            features: ["Cost Estimation", "Maintenance Tracking", "Budget Planning"],
            version: "1.6.3",
            privacyPolicy: "Maintenance data is used only for calculation and not stored."
        },
        {
            link: "AutomotiveCalculators/VehicleLoanCalculator.html",
            imageSrc: "https://img.icons8.com/parakeet/800/car-loan.png",
            imageAlt: "Vehicle Loan Calculator",
            tagName: "Free",
            buttonName: "Vehicle Loan Cal",
            description: "Calculate your monthly payments and total interest for a vehicle loan, helping you manage your finances.",
            lastUpdated: "07 Aug",
            category: "Finance",
            author: "Veggie Smart Team",
            usageTips: "Enter the loan amount, interest rate, and term to calculate your payments.",
            features: ["Loan Calculation", "Interest Analysis", "Payment Breakdown"],
            version: "1.7.1",
            privacyPolicy: "Loan details are processed locally and not stored."
        },
        {
            link: "AutomotiveCalculators/DepreciationCalculator.html",
            imageSrc: "https://img.icons8.com/fluency/800/administrative-tools.png",
            imageAlt: "Advanced Depreciation Cal",
            tagName: "Free",
            buttonName: "Depreciation Cost",
            description: "Estimate the depreciation of your vehicle over time, helping you understand its resale value.",
            lastUpdated: "05 Aug",
            category: "Automotive",
            author: "Veggie Smart Team",
            usageTips: "Input the purchase price and age of your vehicle to estimate depreciation.",
            features: ["Depreciation Estimation", "Resale Value Analysis", "Financial Planning"],
            version: "2.1.4",
            privacyPolicy: "Depreciation calculations are done locally without storing any data."
        }
    ],
    EventPlanCal: [
        {
            link: "./EventPlanningCalculators/Guest-list-Cal.html",
            imageSrc: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/800/external-guest-list-night-club-flaticons-lineal-color-flat-icons-3.png",
            imageAlt: "Guest List Calculator",
            tagName: "Beta",
            buttonName: "Guest List Cal",
            description: "Organize your event by efficiently managing your guest list, ensuring you don't miss anyone.",
            lastUpdated: "12 Aug",
            category: "Event Planning",
            author: "Veggie Smart Team",
            usageTips: "Enter your guest names and contact details to create a comprehensive guest list.",
            features: ["Guest Management", "Contact Tracking", "Invitation Planning"],
            version: "1.2.0",
            privacyPolicy: "Guest information is processed locally and not stored."
        },
        {
            link: "./EventPlanningCalculators/Budget-Planner.html",
            imageSrc: "https://img.icons8.com/color/800/budget.png",
            imageAlt: "Budget Planner",
            tagName: "Beta",
            buttonName: "Budget Planner",
            description: "Plan your event budget efficiently, tracking expenses and ensuring you stay within your financial limits.",
            lastUpdated: "11 Aug",
            category: "Event Planning",
            author: "Veggie Smart Team",
            usageTips: "Input your budget and expected expenses to manage your event's finances.",
            features: ["Expense Tracking", "Budget Allocation", "Financial Planning"],
            version: "1.3.1",
            privacyPolicy: "Budget data is used solely for calculations and not stored."
        },
        {
            link: "./EventPlanningCalculators/Catering-Cal.html",
            imageSrc: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/800/external-catering-bowling-alley-and-arcade-flaticons-lineal-color-flat-icons.png",
            imageAlt: "Catering Calculator",
            tagName: "Beta",
            buttonName: "Catering Calculator",
            description: "Estimate the catering needs for your event, including food and beverage quantities based on the number of guests.",
            lastUpdated: "10 Aug",
            category: "Event Planning",
            author: "Veggie Smart Team",
            usageTips: "Provide the number of guests to calculate the amount of food and drinks needed.",
            features: ["Catering Estimation", "Food Quantity Planning", "Guest-Specific Requirements"],
            version: "1.1.5",
            privacyPolicy: "Catering data is calculated locally and not saved."
        },
        {
            link: "./EventPlanningCalculators/VenueCapacityCalculator.html",
            imageSrc: "https://img.icons8.com/fluency/800/street-food.png",
            imageAlt: "Venue Capacity Cal",
            tagName: "Beta",
            buttonName: "Venue Capacity Cal",
            description: "Determine the ideal venue size for your event by calculating the required space based on the number of attendees.",
            lastUpdated: "09 Aug",
            category: "Event Planning",
            author: "Veggie Smart Team",
            usageTips: "Input the number of guests to find the appropriate venue capacity.",
            features: ["Venue Size Calculation", "Space Optimization", "Event Planning Assistance"],
            version: "1.4.2",
            privacyPolicy: "Venue data is processed only for the calculation and not stored."
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
                    <a href="${tool.link}" class="tool-card-button mt-4 relative">Go to Tool
      <p class="text-sm inline-block px-2 absolute -top-1 left-0 bg-green-500 rounded-full"><strong></strong> ${tool.lastUpdated}</p>
      </a>
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
