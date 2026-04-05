import './globals.css';

export const metadata = {
  title: 'NightSafe — AI 夜間移動建議平台',
  description: '整合台北市開放資料與即時交通資訊，透過 AI 幫助使用者在夜間做出更安心、更清楚、更有效率的移動選擇。',
  keywords: 'NightSafe, 夜間移動, AI, 台北, 路線推薦, YouBike, 安全路線',
  openGraph: {
    title: 'NightSafe — AI 夜間移動建議平台',
    description: '讓台北青年與市民在夜間更安心、更清楚、更有效率地做出移動選擇',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>
        {children}
      </body>
    </html>
  );
}
