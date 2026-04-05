'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Map as MapIcon, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import MapView from '@/components/MapView/MapView';
import styles from '../pages.module.css';

const routeOptions = [
  { id: null, label: '全部', color: 'var(--color-text)' },
  { id: 'fastest', label: '最快', color: 'var(--color-cyan)' },
  { id: 'night-friendly', label: '夜間友善', color: 'var(--color-cta)' },
  { id: 'budget', label: '低成本', color: 'var(--color-amber)' },
];

export default function MapPage() {
  const [activeRoute, setActiveRoute] = useState(null);

  return (
    <div className={styles.mapPageContainer}>
      <Navbar />

      <div className={styles.mapToolbar}>
        <div className={styles.mapToolbarLeft}>
          <Link href="/results" className="btn btn-ghost btn-sm">
            <ArrowLeft size={16} />
            返回結果
          </Link>
          <div className={styles.routeFilter}>
            {routeOptions.map((opt) => (
              <button
                key={opt.id || 'all'}
                className={`${styles.routeFilterBtn} ${activeRoute === opt.id ? styles.active : ''}`}
                style={activeRoute === opt.id ? { background: `${opt.color}20`, color: opt.color, borderColor: 'transparent' } : {}}
                onClick={() => setActiveRoute(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.mapContent}>
        <MapView showLayers={true} activeRoute={activeRoute} />
      </div>
    </div>
  );
}
