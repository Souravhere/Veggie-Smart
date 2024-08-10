const cryptoSelect = document.getElementById('crypto');
const currencySelect = document.getElementById('currency');
const resultDiv = document.getElementById('resultDiv');
const cryptoDetails = document.getElementById('cryptoDetails');
const profitResult = document.getElementById('profitResult');
const profitChart = document.getElementById('profitChart');

const apiKey = 'YOUR_FREE_API_KEY';
const apiURL = 'https://api.coingecko.com/api/v3/coins/markets';
const currencies = ['USD', 'EUR', 'INR', 'JPY', 'GBP'];

const loadCryptocurrencies = async () => {
    try {
        const response = await axios.get(`${apiURL}?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`);
        response.data.forEach(crypto => {
            const option = document.createElement('option');
            option.value = crypto.id;
            option.innerHTML = `<img src="${crypto.image}" alt="${crypto.name}" class="w-6 h-6 inline-block mr-2">${crypto.name} (${crypto.symbol.toUpperCase()})`;
            cryptoSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error loading cryptocurrencies:', error);
    }
};

const loadCurrencies = () => {
    currencies.forEach(currency => {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        currencySelect.appendChild(option);
    });
};

const calculateProfit = async () => {
    const selectedCrypto = cryptoSelect.value;
    const selectedCurrency = currencySelect.value;
    const investment = parseFloat(document.getElementById('investment').value);
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);

    try {
        const response = await axios.get(`${apiURL}?vs_currency=${selectedCurrency.toLowerCase()}&ids=${selectedCrypto}`);
        const currentPrice = response.data[0].current_price;
        const currentValue = (investment / purchasePrice) * currentPrice;
        const profit = currentValue - investment;
        const profitPercentage = (profit / investment) * 100;

        cryptoDetails.innerHTML = `
            <h3 class="text-lg font-bold">${response.data[0].name} (${response.data[0].symbol.toUpperCase()})</h3>
            <p>Current Price: ${currentPrice.toFixed(2)} ${selectedCurrency}</p>
        `;

        profitResult.innerHTML = `
            <h3 class="text-lg font-bold">Profit:</h3>
            <p>${profit.toFixed(2)} ${selectedCurrency} (${profitPercentage.toFixed(2)}%)</p>
        `;

        resultDiv.classList.remove('hidden');

        new Chart(profitChart, {
            type: 'doughnut',
            data: {
                labels: ['Profit', 'Investment'],
                datasets: [{
                    label: 'Profit Analysis',
                    data: [profit, investment],
                    backgroundColor: ['#4CAF50', '#FFC107']
                }]
            },
            options: {
                responsive: true
            }
        });

    } catch (error) {
        console.error('Error calculating profit:', error);
    }
};

loadCryptocurrencies();
loadCurrencies();
