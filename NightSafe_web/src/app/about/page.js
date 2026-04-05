import {
  Shield, Database, AlertTriangle, Users, Code, Brain,
  Lightbulb, Bike, Camera, Bus, CheckCircle, Target
} from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from '../pages.module.css';

export const metadata = {
  title: '關於 NightSafe — AI 夜間移動建議平台',
  description: '了解 NightSafe 的理念、資料來源、技術架構與團隊。',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className={`container ${styles.pageContainer}`}>
        {/* Hero */}
        <div className={styles.aboutHero}>
          <div className={styles.pageTag} style={{ background: 'var(--color-green-soft)', color: 'var(--color-cta)' }}>
            <Shield size={14} />
            關於 NightSafe
          </div>
          <h1 className={styles.pageTitle}>
            讓夜間移動<br />
            <span className="gradient-text">更安心的選擇</span>
          </h1>
          <p className={styles.pageDesc} style={{ maxWidth: 600 }}>
            NightSafe 是一個以 Web 為核心的 AI 夜間移動建議平台。我們整合台北市開放資料與即時交通資訊，
            幫助使用者在夜間做出更好的移動決策。
          </p>
        </div>

        {/* Mission & Value */}
        <div className={styles.aboutGrid}>
          <div className={styles.aboutCard}>
            <h3 className={styles.aboutCardTitle}>
              <Target size={20} style={{ color: 'var(--color-cta)' }} />
              專案定位
            </h3>
            <div className={styles.aboutCardContent}>
              <p>NightSafe 是一個為夜間外出者提供 AI 夜間移動決策輔助的平台。</p>
              <ul>
                <li>更安心：提供夜間友善路線與移動策略</li>
                <li>更清楚：把複雜的交通與環境資訊變成能理解的建議</li>
                <li>更彈性：不只一條路，而是多種夜間方案比較</li>
                <li>更即時：結合即時站點與交通資料</li>
                <li>更落地：以台北真實開放資料為基礎</li>
              </ul>
            </div>
          </div>

          <div className={styles.aboutCard}>
            <h3 className={styles.aboutCardTitle}>
              <Brain size={20} style={{ color: 'var(--color-cyan)' }} />
              核心問題
            </h3>
            <div className={styles.aboutCardContent}>
              <p>大多數人夜間移動時面臨的疑問：</p>
              <ul>
                <li>哪條路比較適合晚上走？</li>
                <li>捷運、公車、YouBike 還是計程車？</li>
                <li>哪個出口或站點比較好？</li>
                <li>現在這個時間點，還有沒有車？</li>
                <li>附近哪裡比較亮、有人流、能求助？</li>
                <li>如果某站沒車、某路太暗，有替代方案嗎？</li>
              </ul>
            </div>
          </div>

          <div className={styles.aboutCard} id="data">
            <h3 className={styles.aboutCardTitle}>
              <Database size={20} style={{ color: 'var(--color-amber)' }} />
              資料來源
            </h3>
            <div className={styles.aboutCardContent}>
              <p>所有資料來自台北市政府開放資料平臺：</p>
              <ul>
                <li>路燈位置分布圖 — 照明密度與覆蓋分析</li>
                <li>YouBike 2.0 即時資訊 — 站點可借車數與空位</li>
                <li>警察局名稱及地址 — 派出所安全錨點</li>
                <li>CCTV 設施資料 — 攝影機位置座標</li>
                <li>公車路線軌跡 — 備援交通切換設計</li>
              </ul>
            </div>
          </div>

          <div className={styles.aboutCard}>
            <h3 className={styles.aboutCardTitle}>
              <Code size={20} style={{ color: 'var(--color-purple)' }} />
              夜間友善分數
            </h3>
            <div className={styles.aboutCardContent}>
              <p>每條路線的 Night Mobility Score 由五項指標計算：</p>
              <ul>
                <li>照明分數 (30%) — 路燈密度與間距</li>
                <li>安心錨點 (20%) — 派出所、CCTV 鄰近程度</li>
                <li>交通可用性 (20%) — 可切換的交通工具</li>
                <li>主要道路 (15%) — 是否走幹道</li>
                <li>步行暴露 (15%) — 純步行時間長短</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className={styles.disclaimerBox} id="disclaimer">
          <h3>
            <AlertTriangle size={20} />
            免責聲明
          </h3>
          <p>
            NightSafe 是一個夜間移動決策輔助工具，不保證絕對安全。開放資料更新頻率有限，
            CCTV、派出所、路燈只能作為輔助指標。夜間人流與治安是動態因素，本平台不做即時風險預測。
            我們使用「夜間友善」而非「絕對安全」措辭，提供多方案比較降低誤導，並保留人工判斷空間。
            所有資料來源為台北市政府開放資料平臺。
          </p>
        </div>

        {/* Team */}
        <div id="team">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <h2 style={{ marginBottom: 'var(--space-sm)' }}>
              <span className="gradient-text">團隊成員</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>YTP 2026 高中組參賽團隊</p>
          </div>

          <div className={styles.teamGrid}>
            {[
              { name: 'PM', role: '企劃 / 簡報', initial: 'P' },
              { name: 'Designer', role: 'UI/UX 設計', initial: 'D' },
              { name: 'Frontend', role: '前端開發', initial: 'F' },
              { name: 'Backend', role: '後端 / AI', initial: 'B' },
            ].map((m, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.teamAvatar}>{m.initial}</div>
                <div className={styles.teamName}>{m.name}</div>
                <div className={styles.teamRole}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className={styles.archSection}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <h2 style={{ marginBottom: 'var(--space-sm)' }}>
              <span className="gradient-text">技術架構</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>三層式 AI 推薦架構</p>
          </div>

          <div className={styles.archDiagram}>
            <div className={styles.archLayer} style={{ borderColor: 'rgba(34, 197, 94, 0.3)' }}>
              <div className={styles.archLayerTitle} style={{ color: 'var(--color-cta)' }}>前端層</div>
              <div className={styles.archLayerItems}>
                Next.js<br />
                React<br />
                Leaflet 地圖<br />
                CSS Modules
              </div>
            </div>
            <div className={styles.archLayer} style={{ borderColor: 'rgba(6, 182, 212, 0.3)' }}>
              <div className={styles.archLayerTitle} style={{ color: 'var(--color-cyan)' }}>資料計算層</div>
              <div className={styles.archLayerItems}>
                路燈密度計算<br />
                站點距離分析<br />
                步行比例<br />
                安心錨點覆蓋
              </div>
            </div>
            <div className={styles.archLayer} style={{ borderColor: 'rgba(245, 158, 11, 0.3)' }}>
              <div className={styles.archLayerTitle} style={{ color: 'var(--color-amber)' }}>評分模型層</div>
              <div className={styles.archLayerItems}>
                Night Mobility Score<br />
                多指標加權<br />
                路線排序<br />
                替代方案生成
              </div>
            </div>
            <div className={styles.archLayer} style={{ borderColor: 'rgba(168, 85, 247, 0.3)' }}>
              <div className={styles.archLayerTitle} style={{ color: 'var(--color-purple)' }}>AI 說明層</div>
              <div className={styles.archLayerItems}>
                LLM API<br />
                白話解釋<br />
                行前提醒<br />
                替代方案說明
              </div>
            </div>
          </div>
        </div>

        {/* YTP Alignment */}
        <div style={{ marginBottom: 'var(--space-3xl)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <h2 style={{ marginBottom: 'var(--space-sm)' }}>
              <span className="gradient-text">YTP 2026 主題對應</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>用 AI 翻轉城市樣貌</p>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard} style={{ borderColor: 'rgba(34, 197, 94, 0.3)' }}>
              <h3 className={styles.aboutCardTitle}>
                <CheckCircle size={20} style={{ color: 'var(--color-cta)' }} />
                行善台北
              </h3>
              <div className={styles.aboutCardContent}>
                <p>改善市民，尤其青年夜間移動時的安心感與可近性。提升夜間交通決策品質，展現開放資料的實際應用。</p>
              </div>
            </div>
            <div className={styles.aboutCard} style={{ borderColor: 'rgba(6, 182, 212, 0.3)' }}>
              <h3 className={styles.aboutCardTitle}>
                <CheckCircle size={20} style={{ color: 'var(--color-cyan)' }} />
                行旅台北
              </h3>
              <div className={styles.aboutCardContent}>
                <p>夜間移動建議對晚間活動、觀光、演唱會散場、夜市移動、陌生地區返程都很有用。讓台北的夜間移動更友善。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
