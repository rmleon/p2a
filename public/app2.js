(async () => {
    const glue = await GlueWeb();
    console.log('Glue42 initialized in App2', glue);

    glue.interop.register('PublishTicker', async (args) => {
        const ticker = args.ticker;
        console.log(`Received ticker: ${ticker}`);

        const stockPrice = await fetchStockPrice(ticker);
        displayStockPrice(ticker, stockPrice);
    });

    async function fetchStockPrice(ticker) {
        return (Math.random() * 1000).toFixed(2); // Simulated stock price
    }

    function displayStockPrice(ticker, price) {
        const stockDataDiv = document.getElementById("stockData");
        stockDataDiv.innerHTML = `<p>Stock: ${ticker} - Price: $${price}</p>`;
    }
})();

