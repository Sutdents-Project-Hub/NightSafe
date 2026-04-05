'use client';

import Link from 'next/link';
import { Bookmark, Navigation, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from '../pages.module.css';

export default function SavedPage() {
  return (
    <>
      <Navbar />
      <div className={`container ${styles.pageContainer}`}>
        <div className={styles.pageHeader}>
          <div className={styles.pageTag} style={{ background: 'var(--color-amber-soft)', color: 'var(--color-amber)' }}>
            <Bookmark size={14} />
            我的收藏
          </div>
          <h1 className={styles.pageTitle}>收藏路線</h1>
          <p className={styles.pageDesc}>你收藏的夜間移動方案都在這裡</p>
        </div>

        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <Bookmark size={36} />
          </div>
          <h3 className={styles.emptyTitle}>尚無收藏路線</h3>
          <p className={styles.emptyDesc}>
            在推薦結果頁點擊收藏按鈕，即可將常用路線存到這裡，<br />
            方便下次快速查詢。
          </p>
          <Link href="/plan" className="btn btn-primary btn-lg">
            <Navigation size={18} />
            開始規劃路線
          </Link>
        </div>

        {/* Demo saved routes */}
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <h3 style={{ marginBottom: 'var(--space-lg)', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            最近查詢記錄
          </h3>

          {[
            { from: '台北車站', to: '永春站', time: '21:30', score: 89 },
            { from: '大巨蛋', to: '景美站', time: '23:20', score: 76 },
            { from: '士林夜市', to: '西門町', time: '22:00', score: 82 },
          ].map((record, i) => (
            <div
              key={i}
              className="card card-interactive"
              style={{ marginBottom: 'var(--space-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
                <div style={{
                  width: 48, height: 48,
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-green-soft)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-cta)',
                }}>
                  <Navigation size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 2 }}>
                    {record.from} → {record.to}
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                    出發 {record.time} · 夜間友善: {record.score}
                  </div>
                </div>
              </div>
              <Link href={`/results?from=${encodeURIComponent(record.from)}&to=${encodeURIComponent(record.to)}&time=${record.time}`} className="btn btn-ghost btn-sm">
                重新規劃
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
