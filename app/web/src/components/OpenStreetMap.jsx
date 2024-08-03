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

  useEffect(() => {
    if (location) {
      // Remplacez cette URL par l'URL de l'API Nominatim pour obtenir les pharmacies à Goma
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=pharmacy in Goma&limit=10`)
        .then((response) => response.json())
        .then((data) => {
          setPharmacies(data);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des pharmacies : ", error);
        });
    }
  }, [location]);

  return (
    <div className="pharmacy-locator-container">
      <h1 className="text-3xl font-bold text-center my-4">Localisateur de Pharmacie à Goma</h1>
      {location ? (
        <MapContainer center={[location.latitude, location.longitude]} zoom={13} style={{ height: "600px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {pharmacies.map((pharmacy, index) => (
            <Marker key={index} position={[pharmacy.lat, pharmacy.lon]}>
              <Popup>
                <h2 className="text-xl font-semibold">{pharmacy.display_name}</h2>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : (
        <p className="text-center">Obtention de votre localisation...</p>
      )}
    </div>
  );
};

export default OpenStreetMap;