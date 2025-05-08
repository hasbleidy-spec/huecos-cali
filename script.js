const status = document.getElementById('status');

function initMap(lat, lon) {
  const map = L.map('map').setView([lat, lon], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([lat, lon]).addTo(map)
    .bindPopup('Estás aquí.')
    .openPopup();
}

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    status.textContent = 'Ubicación detectada.';
    initMap(latitude, longitude);
  }, (error) => {
    status.textContent = 'No se pudo obtener la ubicación.';
  });
} else {
  status.textContent = 'La geolocalización no está disponible.';
}
