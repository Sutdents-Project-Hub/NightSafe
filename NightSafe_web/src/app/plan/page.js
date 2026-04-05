'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  MapPin, Clock, Sparkles, ArrowRight, Navigation,
  Lightbulb, Footprints, Route, Zap, Wallet, ArrowRightLeft,
  Users, Bus
} from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from '../pages.module.css';

const iconMap = {
  Lightbulb, Footprints, Route, Zap, Wallet, ArrowRightLeft, Users, Bus,
};

const preferenceOptions = [
  { id: 'bright-route', label: '路燈多', icon: 'Lightbulb' },
  { id: 'less-walking', label: '少走路', icon: 'Footprints' },
  { id: 'main-road', label: '走大路', icon: 'Route' },
  { id: 'fastest', label: '最快到達', icon: 'Zap' },
  { id: 'cheapest', label: '最省錢', icon: 'Wallet' },
  { id: 'less-transfer', label: '少轉乘', icon: 'ArrowRightLeft' },
  { id: 'crowded-route', label: '人多的路', icon: 'Users' },
  { id: 'public-transit', label: '大眾運輸', icon: 'Bus' },
];

function PlanContent() {
  const searchParams = useSearchParams();
  const scenario = searchParams.get('scenario');
  const initialQuery = searchParams.get('q') || '';

  const [from, setFrom] = useState(scenario === 'study' ? '南陽街補習班' : '');
  const [to, setTo] = useState(scenario === 'study' ? '景美站' : '');
  const [time, setTime] = useState('21:30');
  const [prefs, setPrefs] = useState(scenario === 'study' ? ['bright-route', 'less-walking'] : []);
  const [nlQuery, setNlQuery] = useState(initialQuery);

  const togglePref = (id) => {
    setPrefs((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <div className={`container ${styles.pageContainer}`}>
      <div className={styles.pageHeader}>
        <div className={styles.pageTag} style={{ background: 'var(--color-cyan-soft)', color: 'var(--color-cyan)' }}>
          <Navigation size={14} />
          路線規劃
        </div>
        <h1 className={styles.pageTitle}>規劃你的夜間路線</h1>
        <p className={styles.pageDesc}>輸入起終點與偏好，AI 將為你推薦最適合的夜間移動方案</p>
      </div>

      <div className={styles.planGrid}>
        <div className={styles.planForm}>
          {/* From */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              <MapPin size={16} style={{ color: 'var(--color-cta)' }} />
              起點
            </label>
            <div className={styles.inputWithIcon}>
              <span className={styles.inputIcon}><Navigation size={16} /></span>
              <input
                className="input"
                placeholder="輸入起點或使用目前位置"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                style={{ paddingLeft: 42 }}
              />
            </div>
          </div>

          {/* To */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              <MapPin size={16} style={{ color: 'var(--color-rose)' }} />
              終點
            </label>
            <div className={styles.inputWithIcon}>
              <span className={styles.inputIcon}><MapPin size={16} /></span>
              <input
                className="input"
                placeholder="輸入目的地"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                style={{ paddingLeft: 42 }}
              />
            </div>
          </div>

          {/* Time */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              <Clock size={16} style={{ color: 'var(--color-amber)' }} />
              出發時間
            </label>
            <input
              type="time"
              className="input"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          {/* Preferences */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              <Sparkles size={16} style={{ color: 'var(--color-purple)' }} />
              偏好條件
            </label>
            <div className={styles.prefTags}>
              {preferenceOptions.map((opt) => {
                const Icon = iconMap[opt.icon];
                return (
                  <button
                    key={opt.id}
                    className={`${styles.prefTag} ${prefs.includes(opt.id) ? styles.active : ''}`}
                    onClick={() => togglePref(opt.id)}
                    type="button"
                  >
                    <Icon size={14} />
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Natural Language */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              <Sparkles size={16} style={{ color: 'var(--color-cta)' }} />
              或用自然語言描述
            </label>
            <textarea
              className={styles.nlInput}
              placeholder="例如：演唱會結束要回景美，不想走太暗的地方，希望少轉乘..."
              value={nlQuery}
              onChange={(e) => setNlQuery(e.target.value)}
            />
          </div>

          <Link
            href={`/results?from=${encodeURIComponent(from || '台北車站')}&to=${encodeURIComponent(to || '永春站')}&time=${time}`}
            className={`btn btn-primary btn-lg ${styles.submitBtn}`}
          >
            <Sparkles size={18} />
            取得 AI 建議
          </Link>
        </div>

        {/* Preview Sidebar */}
        <div className={styles.planPreview}>
          <div className={styles.previewTitle}>
            <Sparkles size={18} style={{ color: 'var(--color-cta)' }} />
            規劃摘要
          </div>

          <div className={styles.previewItem}>
            <span className={styles.previewItemLabel}>起點</span>
            <span className={styles.previewItemValue}>{from || '未設定'}</span>
          </div>
          <div className={styles.previewItem}>
            <span className={styles.previewItemLabel}>終點</span>
            <span className={styles.previewItemValue}>{to || '未設定'}</span>
          </div>
          <div className={styles.previewItem}>
            <span className={styles.previewItemLabel}>出發時間</span>
            <span className={styles.previewItemValue}>{time}</span>
          </div>
          <div className={styles.previewItem}>
            <span className={styles.previewItemLabel}>偏好</span>
            <span className={styles.previewItemValue}>
              {prefs.length > 0
                ? prefs.map((p) => preferenceOptions.find((o) => o.id === p)?.label).join('、')
                : '未設定'
              }
            </span>
          </div>

          {nlQuery && (
            <div style={{ padding: 'var(--space-md)', background: 'var(--color-surface-raised)', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-dim)', marginBottom: 4 }}>自然語言描述</p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{nlQuery}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PlanPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className={`container ${styles.pageContainer}`}><p>載入中...</p></div>}>
        <PlanContent />
      </Suspense>
      <Footer />
    </>
  );
}
