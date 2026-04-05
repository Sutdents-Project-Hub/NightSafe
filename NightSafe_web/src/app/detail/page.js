'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  ArrowLeft, Share2, Bookmark, Train, Bike, Footprints,
  Bus, Sparkles, AlertTriangle, CheckCircle, Shield, Info
} from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import NightScore from '@/components/NightScore/NightScore';
import { mockRoutes } from '@/data/mockRoutes';
import styles from '../pages.module.css';

const modeIcons = {
  metro: Train,
  youbike: Bike,
  walk: Footprints,
  bus: Bus,
};

const modeColors = {
  metro: 'var(--color-cyan)',
  youbike: 'var(--color-cta)',
  walk: 'var(--color-amber)',
  bus: 'var(--color-purple)',
};

const modeLabels = {
  metro: '捷運',
  youbike: 'YouBike',
  walk: '步行',
  bus: '公車',
};

function DetailContent() {
  const searchParams = useSearchParams();
  const routeId = searchParams.get('route') || 'route-b';
  const route = mockRoutes.find((r) => r.id === routeId) || mockRoutes[1];

  return (
    <div className={`container ${styles.pageContainer}`}>
      <div style={{ marginBottom: 'var(--space-xl)' }}>
        <Link href="/results" className="btn btn-ghost btn-sm" style={{ marginBottom: 'var(--space-md)' }}>
          <ArrowLeft size={16} />
          返回結果
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <div>
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, marginBottom: 4 }}>
              {route.label} — 方案 {route.id === 'route-a' ? 'A' : route.id === 'route-b' ? 'B' : 'C'}
            </h1>
            <p style={{ color: 'var(--color-text-muted)' }}>{route.from} → {route.to}</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
            <button className="btn btn-secondary btn-sm">
              <Bookmark size={16} />
              收藏
            </button>
            <button className="btn btn-primary btn-sm">
              <Share2 size={16} />
              分享
            </button>
          </div>
        </div>
      </div>

      <div className={styles.detailGrid}>
        {/* Timeline */}
        <div>
          <h3 style={{ marginBottom: 'var(--space-lg)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <Sparkles size={20} style={{ color: 'var(--color-cta)' }} />
            路線步驟
          </h3>

          <div className={styles.timeline}>
            {route.steps.map((step, i) => {
              const Icon = modeIcons[step.mode];
              const color = modeColors[step.mode];
              return (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineLine}>
                    <div className={styles.timelineDot} style={{ borderColor: color }} />
                    {i < route.steps.length - 1 && <div className={styles.timelineConnector} />}
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.stepCard}>
                      <div className={styles.stepHeader}>
                        <div className={styles.stepMode} style={{ color }}>
                          <Icon size={18} />
                          <span>{modeLabels[step.mode]}</span>
                          {step.line && <span className="badge badge-cyan" style={{ marginLeft: 4 }}>{step.line}</span>}
                        </div>
                        <span className={styles.stepDuration}>{step.duration} 分鐘{step.cost ? ` · NT$${step.cost}` : ''}</span>
                      </div>
                      <p className={styles.stepDetail}>
                        <strong>{step.from}</strong> → <strong>{step.to}</strong>
                      </p>
                      <p className={styles.stepDetail} style={{ marginTop: 4 }}>{step.detail}</p>
                      {step.distance && (
                        <p className={styles.stepDetail} style={{ marginTop: 4 }}>距離: {step.distance} 公尺</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Explanation Full */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-xl)',
            marginTop: 'var(--space-xl)',
          }}>
            <h3 style={{ marginBottom: 'var(--space-md)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <Sparkles size={20} style={{ color: 'var(--color-cta)' }} />
              AI 移動建議
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 'var(--space-md)' }}>
              {route.aiExplanation}
            </p>
            {route.alternatives && (
              <div style={{
                padding: 'var(--space-md)',
                background: 'var(--color-surface-raised)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                gap: 'var(--space-sm)',
              }}>
                <Info size={18} style={{ color: 'var(--color-cyan)', minWidth: 18 }} />
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                  <strong style={{ color: 'var(--color-cyan)' }}>替代方案：</strong>{route.alternatives}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className={styles.detailSidebar}>
          {/* Night Score */}
          <div className={styles.sidebarCard}>
            <h4 className={styles.sidebarTitle}>
              <Shield size={18} style={{ color: 'var(--color-cta)' }} />
              夜間友善分數
            </h4>
            <NightScore
              score={route.nightScore}
              lightingScore={route.lightingScore}
              safetyAnchorScore={route.safetyAnchorScore}
              transitScore={route.transitScore}
              mainRoadScore={route.mainRoadScore}
              walkingPenalty={route.walkingPenalty}
            />
          </div>

          {/* Reminders */}
          <div className={styles.sidebarCard}>
            <h4 className={styles.sidebarTitle}>
              <CheckCircle size={18} style={{ color: 'var(--color-cta)' }} />
              行前提醒
            </h4>
            <div className={styles.reminderList}>
              <div className={styles.reminder}>
                <span className={styles.reminderIcon} style={{ color: 'var(--color-cta)' }}><CheckCircle size={16} /></span>
                <span>建議提前確認手機電量與行動電源</span>
              </div>
              <div className={styles.reminder}>
                <span className={styles.reminderIcon} style={{ color: 'var(--color-cyan)' }}><CheckCircle size={16} /></span>
                <span>抵達站點後建議沿主要道路前進</span>
              </div>
              <div className={styles.reminder}>
                <span className={styles.reminderIcon} style={{ color: 'var(--color-amber)' }}><CheckCircle size={16} /></span>
                <span>終點附近有可借 YouBike 站點與派出所</span>
              </div>
              {route.warnings.map((w, i) => (
                <div key={i} className={styles.reminder}>
                  <span className={styles.reminderIcon} style={{ color: 'var(--color-rose)' }}><AlertTriangle size={16} /></span>
                  <span>{w}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Preview */}
          <Link href="/map" className="btn btn-secondary" style={{ width: '100%' }}>
            在地圖上查看
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DetailPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className={`container ${styles.pageContainer}`}><p>載入中...</p></div>}>
        <DetailContent />
      </Suspense>
      <Footer />
    </>
  );
}
