(async () => {
    const glue = await GlueWeb();
    console.log('Glue42 initialized in App1', glue);

    window.publishTicker = async () => {
        const tickerInput = document.getElementById("tickerInput").value;
        if (!tickerInput) {
            alert("Please enter a stock ticker symbol.");
            return;
        }

        glue.interop.invoke('PublishTicker', { ticker: tickerInput });
        console.log(`Published ticker: ${tickerInput}`);
    };
})();

