const fooddata = [
    {
        link: "https://example.com/item1",
        imageSrc: "https://img.icons8.com/color/800/calculate.png",
        imageAlt: "Calculator 1",
        tagName: "Free",
        buttonName: "Calculate Total Price 1"
    },
    {
        link: "https://example.com/item2",
        imageSrc: "https://img.icons8.com/color/800/calculate.png",
        imageAlt: "Calculator 2",
        tagName: "Pro",
        buttonName: "Calculate Total Price 2"
    },
    {
        link: "https://example.com/item3",
        imageSrc: "https://img.icons8.com/color/800/calculate.png",
        imageAlt: "Calculator 3",
        tagName: "Premium",
        buttonName: "Calculate Total Price 3"
    }
];

const foodcontainer = document.getElementById("FoodCalculators");
foodcontainer.innerHTML = ''; // Clear any existing content

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
