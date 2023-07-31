import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';

const MapComponent = () => {
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Initialize the map on component mount
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    // Set the olMap property on the ref to the created map instance
    mapRef.current.olMap = map;

    // Get the user's location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userPosition = fromLonLat([longitude, latitude]);
          setUserLocation(userPosition);

          // Center the map on the user's location
          map.getView().animate({
            center: userPosition,
            zoom: 12,
            duration: 1000,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }

    return () => {
      // Cleanup resources on unmount
      map.setTarget(null);
    };
  }, []);

  useEffect(() => {
    // Render the user location as a point on the map
    if (userLocation) {
      const userFeature = new Feature({
        geometry: new Point(userLocation),
      });

      const userSource = new VectorSource({
        features: [userFeature],
      });

      const userStyle = new Style({
        image: new CircleStyle({
          radius: 6,
          fill: new Fill({ color: 'blue' }),
          stroke: new Stroke({ color: 'white', width: 2 }),
        }),
      });

      const userLayer = new VectorLayer({
        source: userSource,
        style: userStyle,
      });

      // Access the map from the ref and add the userLayer
      mapRef.current.olMap.addLayer(userLayer);
    }
  }, [userLocation]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default MapComponent;
