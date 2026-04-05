'use client';

import { useEffect, useState } from 'react';
import styles from './NightScore.module.css';

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function getScoreLevel(score) {
  if (score >= 75) return 'high';
  if (score >= 50) return 'medium';
  return 'low';
}

function getScoreColor(score) {
  if (score >= 75) return 'var(--color-cta)';
  if (score >= 50) return 'var(--color-amber)';
  return 'var(--color-rose)';
}

export default function NightScore({
  score,
  lightingScore,
  safetyAnchorScore,
  transitScore,
  mainRoadScore,
  walkingPenalty,
  size = 'normal',
  showMetrics = true,
}) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const isSmall = size === 'small';
  const r = isSmall ? 30 : RADIUS;
  const circ = 2 * Math.PI * r;
  const offset = circ - (animated ? (score / 100) * circ : 0);
  const center = isSmall ? 40 : 70;

  const metrics = [
    { label: '照明', value: lightingScore, color: getScoreColor(lightingScore) },
    { label: '安心錨點', value: safetyAnchorScore, color: getScoreColor(safetyAnchorScore) },
    { label: '交通可用', value: transitScore, color: getScoreColor(transitScore) },
    { label: '主要道路', value: mainRoadScore, color: getScoreColor(mainRoadScore) },
    { label: '步行風險', value: 100 - walkingPenalty, color: getScoreColor(100 - walkingPenalty) },
  ];

  return (
    <div className={styles.scoreContainer}>
      <div className={`${styles.ringWrapper} ${isSmall ? styles.small : ''}`}>
        <svg className={styles.ringSvg} viewBox={`0 0 ${center * 2} ${center * 2}`}>
          <circle
            className={styles.ringBg}
            cx={center}
            cy={center}
            r={r}
            strokeWidth={isSmall ? 6 : 8}
          />
          <circle
            className={`${styles.ringFill} ${styles[getScoreLevel(score)]}`}
            cx={center}
            cy={center}
            r={r}
            strokeWidth={isSmall ? 6 : 8}
            strokeDasharray={circ}
            strokeDashoffset={offset}
          />
        </svg>
        <div className={styles.scoreValue}>
          <div className={`${styles.scoreNumber} ${isSmall ? styles.small : ''}`}
            style={{ color: getScoreColor(score) }}
          >
            {animated ? score : 0}
          </div>
          <div className={`${styles.scoreLabel} ${isSmall ? styles.small : ''}`}>
            夜間友善
          </div>
        </div>
      </div>

      {showMetrics && (
        <div className={styles.metrics}>
          {metrics.map((m) => (
            <div key={m.label} className={styles.metric}>
              <span className={styles.metricLabel}>{m.label}</span>
              <span className={styles.metricValue} style={{ color: m.color }}>
                {m.value}
              </span>
              <div className={styles.metricBar}>
                <div
                  className={styles.metricBarFill}
                  style={{
                    width: animated ? `${m.value}%` : '0%',
                    backgroundColor: m.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
