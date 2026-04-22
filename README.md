# NightSafe

## 專案簡介

NightSafe 是一個夜間移動安全分析平台，結合地圖路徑規劃、官方開放資料與 AI 說明層，協助使用者在臺北市與新北市情境下評估夜間移動風險，並比較不同移動方案的安全性、時間與成本。

目前版本以 `NightSafe_web` 為主要可執行模組，提供前端介面、API 路由與路線評估邏輯。

## 功能列表

- 依出發地、目的地、時間與偏好產生夜間路線規劃
- 整合警局、監視器、醫療據點、YouBike 等安全相關資料
- 以路段分數與說明文字呈現風險評估結果
- 提供附近安全資源查詢與地圖圖層資料 API
- 支援 AI 補充說明層，將路線結果轉為可讀性較高的摘要

## 技術架構

- 前端框架：`Next.js 16`
- UI：`React 19`
- 地圖：`Leaflet`、`react-leaflet`
- 伺服器端 API：`Next.js App Router Route Handlers`
- 測試：`ESLint`、`Node.js Test Runner`
- 容器化部署：`Dockerfile`（位於 `NightSafe_web/`）

## 專案結構

```text
.
├── LICENSE
├── README.md
└── NightSafe_web
    ├── Dockerfile
    ├── package.json
    ├── src
    │   ├── app
    │   ├── components
    │   ├── data
    │   └── lib
    └── tests
```

## 本地測試教學

1. 安裝 Node.js `22` 或以上版本。
2. 安裝依賴：

```bash
cd NightSafe_web
npm ci
```

3. 啟動開發環境：

```bash
npm run dev
```

4. 執行檢查：

```bash
npm run lint
npm run test
```

5. 若要驗證正式建置：

```bash
npm run build
npm run start
```

預設開發網址為 `http://localhost:3000`。

## 環境變數

前端模組的環境變數範本位於 `NightSafe_web/.env.local.example`，可複製為 `NightSafe_web/.env.local` 後填入。

| 變數名稱 | 用途 | 是否必要 |
| --- | --- | --- |
| `NIGHTSAFE_AI_API_KEY` | AI 說明層 API 金鑰 | 選填 |
| `NIGHTSAFE_AI_BASE_URL` | AI API Base URL | 選填 |
| `NIGHTSAFE_AI_MODEL` | AI 模型名稱 | 選填 |
| `OPENAI_API_KEY` | 與既有整合相容的備援金鑰欄位 | 選填 |
| `OPENAI_BASE_URL` | 與既有整合相容的備援 Base URL | 選填 |
| `TDX_CLIENT_ID` | 未來交通資料整合保留欄位 | 選填 |
| `TDX_CLIENT_SECRET` | 未來交通資料整合保留欄位 | 選填 |
| `CWA_API_KEY` | 氣象署資料來源 API 金鑰 | 選填 |
| `MOENV_API_KEY` | 環境部空氣品質資料 API 金鑰 | 選填 |

未提供 `CWA_API_KEY`、`MOENV_API_KEY` 或 AI 相關金鑰時，系統會使用程式內建 fallback 值回應。

## Coolify 部署教學

目前專案已補上 `NightSafe_web/Dockerfile`，可作為 Coolify Docker 模式部署基礎。

1. 在 Coolify 建立新專案並連接此 GitHub Repository。
2. 類型選擇 `Dockerfile`。
3. `Base Directory` 設定為 `NightSafe_web`。
4. `Dockerfile Location` 設定為 `Dockerfile`。
5. 於 Coolify 環境變數頁面補上 `NightSafe_web/.env.local.example` 中實際需要的變數。
6. 對外埠使用容器內的 `3000`。
7. 觸發部署，待健康檢查通過後即可對外提供服務。

目前已驗證 `NightSafe_web` 可在本地通過 `npm run build`；但本機未啟動 Docker daemon，因此尚未完成本地 `docker build` 驗證。正式部署前，建議先在具備 Docker 環境的機器執行一次映像建置確認。

## 前端 / 後端詳細文件連結

- 前端：[`NightSafe_web/README.md`](./NightSafe_web/README.md)
- 後端：目前無獨立後端目錄，API 與規劃邏輯已包含於 `NightSafe_web` 內
