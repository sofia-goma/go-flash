import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet icon issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icon for user's current location
const userLocationIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png', // Replace with your custom icon URL
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
});

const OpenStreetMap = () => {
  const [location, setLocation] = useState(null);
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    // Obtenir la localisation de l'utilisateur
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Erreur lors de l'obtention de la localisation : ", error);
      }
    );
  }, []);

  return (
    <div className="pharmacy-locator-container">
      {location ? (
        <MapContainer center={[location.latitude, location.longitude]} zoom={13} style={{ height: "600px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[location.latitude, location.longitude]} icon={userLocationIcon}>
            <Popup>
              <h2 className="text-xl font-semibold">You are here</h2>
            </Popup>
          </Marker>
          {pharmacies.map((pharmacy, index) => (
            <Marker key={index} position={[pharmacy.lat, pharmacy.lon]}>
              <Popup>
                <h2 className="text-xl font-semibold">{pharmacy.display_name}</h2>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : (
        (
          <>
            <div class="flex justify-center items-center h-screen">
              <div class="rounded-full h-20 w-20 bg-black animate-ping"></div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default OpenStreetMap;