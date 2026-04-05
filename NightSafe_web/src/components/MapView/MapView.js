'use client';

import dynamic from 'next/dynamic';
import { Map as MapIcon } from 'lucide-react';
import styles from './MapView.module.css';

const MapViewInner = dynamic(() => import('./MapViewInner'), {
  ssr: false,
  loading: () => (
    <div className={styles.placeholder}>
      <div className={styles.placeholderIcon}>
        <MapIcon size={28} />
      </div>
      <p>正在載入地圖...</p>
    </div>
  ),
});

export default function MapView(props) {
  return <MapViewInner {...props} />;
}
