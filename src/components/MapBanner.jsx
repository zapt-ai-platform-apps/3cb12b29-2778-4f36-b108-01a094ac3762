import React, { useState, useCallback } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import * as Sentry from '@sentry/browser';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 48.8566,
  lng: 2.3522
};

const dummyStores = [
  { id: 1, name: 'Store A', position: { lat: 48.8566, lng: 2.3522 }, address: '123 Example St', hours: '9am - 9pm', promotions: '10% off' },
  { id: 2, name: 'Store B', position: { lat: 48.8666, lng: 2.3622 }, address: '456 Another Rd', hours: '10am - 8pm', promotions: 'Buy 1 Get 1' }
];

export default function MapBanner() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY
  });
  const [selectedStore, setSelectedStore] = useState(null);

  const onMapClick = useCallback(() => {
    setSelectedStore(null);
  }, []);

  if (loadError) {
    console.error('Google Maps API load error:', loadError);
    Sentry.captureException(loadError);
    return <div>Error loading map</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onClick={onMapClick}
    >
      {dummyStores.map(store => (
        <Marker
          key={store.id}
          position={store.position}
          onClick={() => {
            console.log('Marker clicked:', store);
            setSelectedStore(store);
          }}
          animation={window.google.maps.Animation.DROP}
        />
      ))}
      {selectedStore && (
        <InfoWindow
          position={selectedStore.position}
          onCloseClick={() => setSelectedStore(null)}
        >
          <div className="p-2">
            <h3 className="font-bold">{selectedStore.name}</h3>
            <p>{selectedStore.address}</p>
            <p>{selectedStore.hours}</p>
            <p>{selectedStore.promotions}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <div>Loading Map...</div>
  );
}