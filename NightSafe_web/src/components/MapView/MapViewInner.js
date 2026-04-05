'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { safetyAnchors, anchorTypeConfig } from '@/data/safetyAnchors';
import styles from './MapView.module.css';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

function createIcon(color) {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      width: 24px; height: 24px;
      background: ${color};
      border-radius: 50%;
      border: 3px solid rgba(255,255,255,0.9);
      box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    "></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
}

const routePaths = {
  fastest: [
    [25.0479, 121.5172],
    [25.0448, 121.5230],
    [25.0430, 121.5350],
    [25.0420, 121.5500],
    [25.0410, 121.5600],
    [25.0401, 121.5754],
  ],
  'night-friendly': [
    [25.0479, 121.5172],
    [25.0448, 121.5230],
    [25.0430, 121.5350],
    [25.0420, 121.5500],
    [25.0410, 121.5600],
    [25.0408, 121.5673],
    [25.0405, 121.5720],
    [25.0401, 121.5754],
  ],
  budget: [
    [25.0479, 121.5172],
    [25.0460, 121.5250],
    [25.0440, 121.5400],
    [25.0420, 121.5550],
    [25.0401, 121.5754],
  ],
};

const routeColors = {
  fastest: '#06B6D4',
  'night-friendly': '#22C55E',
  budget: '#F59E0B',
};

export default function MapViewInner({ showLayers = true, activeRoute = null }) {
  const [layers, setLayers] = useState({
    police: true,
    cctv: true,
    youbike: true,
    streetlight: false,
  });

  const toggleLayer = (key) => {
    setLayers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const visibleAnchors = safetyAnchors.filter((a) => layers[a.type]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={[25.0400, 121.5500]}
        zoom={13}
        style={{ width: '100%', height: '100%', minHeight: '500px' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />

        {/* Route polylines */}
        {activeRoute && routePaths[activeRoute] && (
          <Polyline
            positions={routePaths[activeRoute]}
            pathOptions={{
              color: routeColors[activeRoute],
              weight: 4,
              opacity: 0.8,
              dashArray: activeRoute === 'budget' ? '8, 8' : undefined,
            }}
          />
        )}

        {!activeRoute && Object.entries(routePaths).map(([key, path]) => (
          <Polyline
            key={key}
            positions={path}
            pathOptions={{
              color: routeColors[key],
              weight: 3,
              opacity: 0.6,
            }}
          />
        ))}

        {/* Safety anchors */}
        {visibleAnchors.map((anchor) => (
          <Marker
            key={anchor.id}
            position={[anchor.lat, anchor.lng]}
            icon={createIcon(anchorTypeConfig[anchor.type].color)}
          >
            <Popup>
              <div style={{ color: '#0F172A', minWidth: 150 }}>
                <strong>{anchor.name}</strong>
                {anchor.address && <p style={{ margin: '4px 0 0', fontSize: 12 }}>{anchor.address}</p>}
                {anchor.bikes !== undefined && (
                  <div style={{ marginTop: 4, fontSize: 12 }}>
                    <span>可借: {anchor.bikes}</span> · <span>空位: {anchor.spaces}</span>
                    <br />
                    <span style={{ color: '#64748B' }}>更新: {anchor.updateTime}</span>
                  </div>
                )}
                {anchor.density && (
                  <p style={{ margin: '4px 0 0', fontSize: 12 }}>
                    密度: {anchor.density === 'high' ? '高' : '中'}
                  </p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Layer Control */}
      {showLayers && (
        <div className={styles.layerPanel}>
          <div className={styles.layerTitle}>圖層控制</div>
          {Object.entries(anchorTypeConfig).map(([key, config]) => (
            <div key={key} className={styles.layerItem} onClick={() => toggleLayer(key)}>
              <div
                className={`${styles.layerCheckbox} ${layers[key] ? styles.active : ''}`}
                style={{ backgroundColor: layers[key] ? config.color : 'transparent' }}
              >
                {layers[key] && (
                  <svg width="10" height="10" viewBox="0 0 10 10">
                    <path d="M2 5 L4 7 L8 3" stroke="white" strokeWidth="2" fill="none" />
                  </svg>
                )}
              </div>
              <span className={styles.layerLabel}>{config.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Legend */}
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={styles.legendDot} style={{ background: routeColors.fastest }} />
          <span>最快</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendDot} style={{ background: routeColors['night-friendly'] }} />
          <span>夜間友善</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendDot} style={{ background: routeColors.budget }} />
          <span>低成本</span>
        </div>
      </div>
    </div>
  );
}
