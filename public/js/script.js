const socket = io();


let wakeLock = null;
async function requestWakeLock() {
    try {
        wakeLock = await navigator.wakeLock.request('screen');
    } catch (err) {
        console.error(`${err.name}, ${err.message}`);
    }
}
requestWakeLock();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        socket.emit('sendLocation', { latitude, longitude });
    }, (error) => {
        console.error('Error getting location:', error);
    }, 
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    });
}

const map =L.map('map').setView([0, 0], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: "TRACKER"
}).addTo(map);

const markers = {};

socket.on('receiveLocation', (data) => {
    const { id, latitude, longitude } = data;
    map.setView([latitude, longitude]);
    if (markers[id]) { 
        markers[id].setLatLng([latitude, longitude]);
    }
    else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }

    console.log("Active markers:", Object.keys(markers));
    
})

socket.on('userDisconnected', (data) => {
    const { userId } = data;
    if (markers[userId]) {
        map.removeLayer(markers[userId]);
        delete markers[userId];
    }
});