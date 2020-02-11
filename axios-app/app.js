

document.querySelector('#theButton').onclick = () => {
    const countryName = document.querySelector('#theInput').value
    resetApplication()

    const axiosApp = axios.create({ baseURL: 'https://restcountries.eu/rest/' })

    axiosApp.get(`v2/name/${countryName}`)
        .then(response => printCountry(response.data[0]))
        .catch(err => printError("Error: el país no existe"))
}

function resetApplication() {
    document.querySelector('#errorMessage').textContent = ""
    document.querySelector('#theInput').value = ""
    document.querySelector('#countryName').textContent = "Esperando país..."
    document.querySelector('#countryCapital').textContent = ""
}

function printCountry(country) {
    document.querySelector('#countryName').textContent = `Nombre: ${country.name}`
    document.querySelector('#countryCapital').textContent = `Capital: ${country.capital}`
}

function printError(errorText) {
    document.querySelector('#errorMessage').textContent = errorText
}