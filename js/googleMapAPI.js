function initMap() {
    const mapOptions = {
        zoom: 12 // Zoom level
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: city }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            const location = results[0].geometry.location;
            const marker = new google.maps.Marker({
                position: location,
                map: map,
                title: location
            });

            map.setCenter(location);
        } else {
            console.error('Geocode was not successful for the following reason: ' + status);
        }
    });
}