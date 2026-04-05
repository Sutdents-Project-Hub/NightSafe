'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Shield, Search, ArrowRight, Sparkles, Map, Route,
  BookOpen, Music, Briefcase, MapPin, Compass, Wallet,
  Lightbulb, Layers, Brain, Clock, Bike, Camera,
  CheckCircle, Database, Zap, TrendingUp
} from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

const iconMap = {
  BookOpen, Music, Briefcase, MapPin, Compass, Wallet,
};

const scenarios = [
  { id: 'study', icon: 'BookOpen', title: '晚自習返家', description: '補習班、晚自習結束，安心回家', gradient: 'linear-gradient(135deg, #22C55E20, #06B6D420)' },
  { id: 'event', icon: 'Music', title: '活動散場', description: '演唱會、展演、球賽散場後的移動', gradient: 'linear-gradient(135deg, #A855F720, #3B82F620)' },
  { id: 'work', icon: 'Briefcase', title: '夜班下班', description: '加班、打工、夜班後返家', gradient: 'linear-gradient(135deg, #F59E0B20, #F43F5E20)' },
  { id: 'tourist', icon: 'MapPin', title: '旅客夜間返程', description: '不熟悉地區、夜市後回飯店', gradient: 'linear-gradient(135deg, #06B6D420, #22C55E20)' },
  { id: 'unfamiliar', icon: 'Compass', title: '陌生地區移動', description: '在不熟悉的區域夜間移動', gradient: 'linear-gradient(135deg, #3B82F620, #A855F720)' },
  { id: 'budget', icon: 'Wallet', title: '低預算模式', description: '花最少錢、善用公共交通', gradient: 'linear-gradient(135deg, #22C55E20, #F59E0B20)' },
];

const features = [
  {
    icon: <Brain size={28} />,
    title: 'AI 智慧建議',
    description: '理解你的自然語言，把偏好轉換成可計算條件，產生白話比較與行前提醒。',
    color: 'var(--color-cta)',
    bg: 'var(--color-green-soft)',
  },
  {
    icon: <Route size={28} />,
    title: '夜間友善分數',
    description: '綜合路燈密度、安心錨點、交通可用性、主要道路比例，為每條路線評分。',
    color: 'var(--color-cyan)',
    bg: 'var(--color-cyan-soft)',
  },
  {
    icon: <Layers size={28} />,
    title: '多圖層地圖',
    description: '顯示路燈分布、派出所、CCTV、YouBike 站點，讓你看見夜間城市的完整樣貌。',
    color: 'var(--color-purple)',
    bg: 'var(--color-purple-soft)',
  },
  {
    icon: <Zap size={28} />,
    title: '即時替代方案',
    description: 'YouBike 無車？公車沒班？系統自動推薦替代方案，讓你永遠有備援。',
    color: 'var(--color-amber)',
    bg: 'var(--color-amber-soft)',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'AI 解釋卡片',
    description: '不只給數字，還用白話告訴你每條路線為什麼適合或不適合夜間行走。',
    color: 'var(--color-rose)',
    bg: 'var(--color-rose-soft)',
  },
  {
    icon: <TrendingUp size={28} />,
    title: '多方案比較',
    description: '同時提供最快、夜間友善、低成本三種方案，讓你根據需求做選擇。',
    color: 'var(--color-blue)',
    bg: 'var(--color-blue-soft)',
  },
];

const stats = [
  { value: '160,000+', label: '路燈資料點位', color: 'var(--color-amber)' },
  { value: '1,200+', label: 'YouBike 站點', color: 'var(--color-cta)' },
  { value: '90+', label: '派出所據點', color: 'var(--color-blue)' },
  { value: '16,000+', label: 'CCTV 設施', color: 'var(--color-purple)' },
];

const dataSources = [
  { name: '路燈位置分布圖', desc: '台北市路燈位置與分布資料', icon: <Lightbulb size={20} />, color: 'var(--color-amber)', bg: 'var(--color-amber-soft)' },
  { name: 'YouBike 2.0 即時資訊', desc: '站點可借車數、空位數、位置', icon: <Bike size={20} />, color: 'var(--color-cta)', bg: 'var(--color-green-soft)' },
  { name: '警察局名稱及地址', desc: '各分局、派出所地址資料', icon: <Shield size={20} />, color: 'var(--color-blue)', bg: 'var(--color-blue-soft)' },
  { name: 'CCTV 設施資料', desc: '攝影機位置座標', icon: <Camera size={20} />, color: 'var(--color-purple)', bg: 'var(--color-purple-soft)' },
];

export default function HomePage() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/plan?q=${encodeURIComponent(query)}`);
  };

  const handleScenario = (id) => {
    router.push(`/plan?scenario=${id}`);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={`${styles.gradientOrb} ${styles.orb1}`} />
          <div className={`${styles.gradientOrb} ${styles.orb2}`} />
          <div className={`${styles.gradientOrb} ${styles.orb3}`} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroTag}>
            <Shield size={14} />
            <span>YTP 2026 — 用 AI 翻轉城市樣貌</span>
          </div>

          <h1 className={styles.heroTitle}>
            夜間移動，<br />
            <span className={styles.heroHighlight}>更安心的選擇</span>
          </h1>

          <p className={styles.heroDesc}>
            NightSafe 整合台北市開放資料與即時交通資訊，透過 AI 分析你的夜間移動需求，
            提供更適合的路線、交通方式與替代方案。
          </p>

          <form className={styles.searchBox} onSubmit={handleSearch}>
            <Search size={20} style={{ color: 'var(--color-text-dim)', minWidth: 20 }} />
            <input
              className={styles.searchInput}
              placeholder="輸入你的需求，例如：從台北車站到永春，想走亮一點的路"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className={styles.searchBtn}>
              <Sparkles size={16} />
              AI 建議
            </button>
          </form>

          <div className={styles.heroHints}>
            <span className={styles.hint} onClick={() => setQuery('演唱會結束要回景美')}>
              演唱會散場
            </span>
            <span className={styles.hint} onClick={() => setQuery('補習班下課要回家，想走安全的路')}>
              晚自習返家
            </span>
            <span className={styles.hint} onClick={() => setQuery('士林夜市回西門町飯店')}>
              夜市返程
            </span>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className={styles.scenarios}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag} style={{ background: 'var(--color-cyan-soft)', color: 'var(--color-cyan)' }}>
              <Map size={14} />
              情境快選
            </div>
            <h2 className={styles.sectionTitle}>你今晚要去哪？</h2>
            <p className={styles.sectionDesc}>選擇你的夜間情境，快速取得最適合的移動建議</p>
          </div>

          <div className={styles.scenarioGrid}>
            {scenarios.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div
                  key={s.id}
                  className={styles.scenarioCard}
                  onClick={() => handleScenario(s.id)}
                >
                  <div className={styles.scenarioIcon} style={{ background: s.gradient }}>
                    <Icon size={24} />
                  </div>
                  <h3 className={styles.scenarioTitle}>{s.title}</h3>
                  <p className={styles.scenarioDesc}>{s.description}</p>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-cta)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    開始規劃 <ArrowRight size={14} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag} style={{ background: 'var(--color-green-soft)', color: 'var(--color-cta)' }}>
              <Sparkles size={14} />
              核心功能
            </div>
            <h2 className={styles.sectionTitle}>不只是導航</h2>
            <p className={styles.sectionDesc}>我們幫你在夜間做出更好的移動決策</p>
          </div>

          <div className={styles.featureGrid}>
            {features.map((f, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.featureIcon} style={{ background: f.bg, color: f.color }}>
                  {f.icon}
                </div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag} style={{ background: 'var(--color-blue-soft)', color: 'var(--color-blue)' }}>
              <Database size={14} />
              開放資料
            </div>
            <h2 className={styles.sectionTitle}>以真實資料為基礎</h2>
            <p className={styles.sectionDesc}>整合台北市政府開放資料平臺的即時與靜態資料</p>
          </div>

          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statCard}>
                <div className={styles.statNumber} style={{ color: s.color }}>
                  {s.value}
                </div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Data Sources */}
      <section className={styles.trust}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustContent}>
              <h2>資料驅動的<br /><span className="gradient-text">夜間城市服務</span></h2>
              <p>
                NightSafe 不做治安保證，也不做犯罪預測。我們是一個資料驅動的決策輔助工具，
                幫助使用者將城市的開放資料轉化為可行動的夜間移動建議。
              </p>
              <div className={styles.trustList}>
                <div className={styles.trustItem}>
                  <div className={styles.trustItemIcon} style={{ background: 'var(--color-green-soft)', color: 'var(--color-cta)' }}>
                    <CheckCircle size={20} />
                  </div>
                  <div className={styles.trustItemText}>
                    <h4>決策輔助，非安全保證</h4>
                    <p>提供多方案比較，保留人工判斷空間</p>
                  </div>
                </div>
                <div className={styles.trustItem}>
                  <div className={styles.trustItemIcon} style={{ background: 'var(--color-cyan-soft)', color: 'var(--color-cyan)' }}>
                    <Database size={20} />
                  </div>
                  <div className={styles.trustItemText}>
                    <h4>政府開放資料為基礎</h4>
                    <p>所有資料均來自台北市資料大平臺</p>
                  </div>
                </div>
                <div className={styles.trustItem}>
                  <div className={styles.trustItemIcon} style={{ background: 'var(--color-amber-soft)', color: 'var(--color-amber)' }}>
                    <Clock size={20} />
                  </div>
                  <div className={styles.trustItemText}>
                    <h4>即時更新</h4>
                    <p>YouBike 站點等即時資訊定期更新</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.trustVisual}>
              {dataSources.map((ds, i) => (
                <div key={i} className={styles.dataSource}>
                  <div className={styles.dataSourceIcon} style={{ background: ds.bg, color: ds.color }}>
                    {ds.icon}
                  </div>
                  <div className={styles.dataSourceText}>
                    <span className={styles.dataSourceName}>{ds.name}</span>
                    <span className={styles.dataSourceDesc}>{ds.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>開始你的<span className="gradient-text">夜間移動規劃</span></h2>
            <p>輸入起終點與偏好，讓 AI 幫你找到更適合夜間的移動方案</p>
            <div className={styles.ctaButtons}>
              <Link href="/plan" className="btn btn-primary btn-lg">
                <Sparkles size={18} />
                開始規劃
              </Link>
              <Link href="/about" className="btn btn-secondary btn-lg">
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
