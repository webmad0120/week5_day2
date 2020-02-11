// function initMap() {
//     // Opciones de mapa
//     const mapOptions = {
//         center: directions.ironhackMadrid.coords,
//         zoom: 15
//     }

//     // Instancia de mapa
//     const myMap = new google.maps.Map(document.querySelector('#myMap'), mapOptions)

//     // Opciones de marcador
//     const markerOptions = {
//         position: directions.ironhackMadrid.coords,
//         map: myMap,
//         title: directions.ironhackMadrid.title
//     }

//     // Instancia de marcador
//     new google.maps.Marker(markerOptions)
// }






// function initMap() {

//     // sistema de trazado de mapa
//     let mapOptions = { center: directions.ironhackBCN.coords, zoom: 15 }
//     const myMap = new google.maps.Map(document.querySelector('#myMap'), mapOptions)

//     let markerOptions = { position: directions.ironhackBCN.coords, map: myMap }
//     const myMarker = new google.maps.Marker(markerOptions)


//     if (navigator.geolocation) {

//         // // argumento 1: función de éxito (cooredendaas como parámetro por defecto)
//         // // argumento 2: función de fracaso (error como parámetro por defecto)
//         // navigator.geolocation.getCurrentPosition(successFn, errorFn)
//         navigator.geolocation.getCurrentPosition(position => {

//             // recibimos posición
//             console.log('el objeto de posición desde los satélites es:', position)
//             const currentPosition = { lat: position.coords.latitude, lng: position.coords.longitude }

//             // recolocación mapa
//             myMap.setCenter(currentPosition)
//             markerOptions = { position: currentPosition, map: myMap }
//             new google.maps.Marker(markerOptions)

//         }, err => console.log('Error in the geolocation service:', err))
//     } else {

//         console.log('Browser does not support geolocation.');
//     }
// }




function initMap() {

    let mapOptions = { center: directions.ironhackBCN.coords, zoom: 15, styles: mapStyles.night }
    const myMap = new google.maps.Map(document.querySelector('#myMap'), mapOptions)

    const directionsService = new google.maps.DirectionsService
    const directionsDisplay = new google.maps.DirectionsRenderer

    const directionRequest = {
        origin: directions.ironhackBCN.coords,
        destination: 'Fabrik, Madrid, ES',
        travelMode: 'DRIVING'
    }

    directionsService.route(
        directionRequest,
        (response, status) => {
            if (status === 'OK') {
                console.log('La respuesta del directonsSevice ha sido:', response)
                directionsDisplay.setDirections(response)
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        }
    );

    directionsDisplay.setMap(myMap)
}