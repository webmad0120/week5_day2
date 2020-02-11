
const axiosApp = axios.create({ baseURL: `https://www.alphavantage.co/` })

axiosApp.get(`query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo`)
    .then(responseFromAPI => printTheChart(responseFromAPI.data))
    .catch(err => console.log("Error while getting the data: ", err))


function printTheChart(stockData) {

    console.log(stockData)

    const dailyData = stockData["Time Series (Daily)"]

    const stockDates = Object.keys(dailyData)
    const stockPrices = stockDates.map(date => dailyData[date]["4. close"])

    const ctx = document.getElementById("myChart").getContext("2d")

    new Chart(ctx, {
        type: "line",
        data: {
            labels: stockDates,
            datasets: [
                {
                    label: "Stock Chart",
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor: "rgb(255, 99, 132)",
                    data: stockPrices
                }
            ]
        }
    })
}