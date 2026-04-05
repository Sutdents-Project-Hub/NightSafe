'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, Map, Sparkles, Navigation } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import RouteCard from '@/components/RouteCard/RouteCard';
import { mockRoutes } from '@/data/mockRoutes';
import styles from '../pages.module.css';

function ResultsContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '台北車站';
  const to = searchParams.get('to') || '永春站';
  const time = searchParams.get('time') || '21:30';

  return (
    <div className={`container ${styles.pageContainer}`}>
      <div className={styles.pageHeader}>
        <div className={styles.pageTag} style={{ background: 'var(--color-green-soft)', color: 'var(--color-cta)' }}>
          <Sparkles size={14} />
          AI 推薦結果
        </div>
        <h1 className={styles.pageTitle}>夜間移動方案</h1>
      </div>

      <div className={styles.resultsHeader}>
        <div className={styles.routeInfo}>
          <span className={styles.routeInfoFrom}>{from}</span>
          <ArrowRight size={20} className={styles.routeInfoArrow} style={{ color: 'var(--color-cta)' }} />
          <span className={styles.routeInfoTo}>{to}</span>
          <span className={styles.routeInfoTime}>· {time}</span>
        </div>
        <Link href="/map" className="btn btn-secondary btn-sm">
          <Map size={16} />
          地圖檢視
        </Link>
      </div>

      <div className={styles.resultsGrid}>
        {mockRoutes.map((route, index) => (
          <RouteCard
            key={route.id}
            route={route}
            index={index}
            recommended={route.tag === 'night-friendly'}
          />
        ))}
      </div>

      <div className={styles.mapToggle}>
        <Link href="/map" className="btn btn-primary">
          <Map size={18} />
          在地圖上查看
        </Link>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className={`container ${styles.pageContainer}`}><p>載入中...</p></div>}>
        <ResultsContent />
      </Suspense>
      <Footer />
    </>
  );
}
