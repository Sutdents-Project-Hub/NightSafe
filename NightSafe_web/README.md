# NightSafe Web

## 模組簡介

`NightSafe_web` 是 NightSafe 的主應用模組，使用 `Next.js` 建立使用者介面、地圖互動、路線規劃 API 與安全評估邏輯。

此模組同時包含：

- 前端頁面與互動元件
- `App Router` API 路由
- 路線規劃與安全評分服務
- 測試與容器化部署設定

## 使用技術

- `Next.js 16`
- `React 19`
- `Leaflet`
- `react-leaflet`
- `framer-motion`
- `ESLint 9`
- `Node.js Test Runner`
- `Docker`

## 資料夾結構

```text
NightSafe_web
├── Dockerfile
├── public
├── src
│   ├── app
│   │   ├── api
│   │   ├── about
│   │   ├── detail
│   │   ├── map
│   │   ├── plan
│   │   ├── results
│   │   └── saved
│   ├── components
│   ├── data
│   └── lib
│       └── server
├── tests
└── package.json
```

## 本地開發流程

1. 安裝 Node.js `22` 或以上版本。
2. 建立本機環境變數檔：

```bash
cp .env.local.example .env.local
```

3. 安裝依賴：

```bash
npm ci
```

4. 啟動開發伺服器：

```bash
npm run dev
```

5. 開啟 `http://localhost:3000`。

## 環境變數

| 變數名稱 | 用途 | 是否必要 |
| --- | --- | --- |
| `NIGHTSAFE_AI_API_KEY` | AI 說明層 API 金鑰 | 選填 |
| `NIGHTSAFE_AI_BASE_URL` | AI API Base URL | 選填 |
| `NIGHTSAFE_AI_MODEL` | AI 模型名稱 | 選填 |
| `OPENAI_API_KEY` | 相容備援欄位 | 選填 |
| `OPENAI_BASE_URL` | 相容備援欄位 | 選填 |
| `TDX_CLIENT_ID` | 交通資料整合預留欄位 | 選填 |
| `TDX_CLIENT_SECRET` | 交通資料整合預留欄位 | 選填 |
| `CWA_API_KEY` | 氣象署資料 API 金鑰 | 選填 |
| `MOENV_API_KEY` | 環境部資料 API 金鑰 | 選填 |

未設定部分外部資料來源金鑰時，系統會回傳內建 fallback 資料，不會阻止本地開發。

## 建置 / 啟動方式

本地正式模式：

```bash
npm run build
npm run start
```

測試與檢查：

```bash
npm run lint
npm run test
```

Docker 建置：

```bash
docker build -t nightsafe-web .
docker run --rm -p 3000:3000 --env-file .env.local nightsafe-web
```

目前版本庫已提供上述 Docker 設定，但本次整理時所在機器未啟動 Docker daemon，因此尚未在本機完成容器建置驗證。

## 部署細節

### Coolify

使用目前模組根目錄的 `Dockerfile` 進行部署：

1. Repository 連接到 GitHub 上的 NightSafe 專案。
2. `Base Directory` 設為 `NightSafe_web`。
3. 以 `Dockerfile` 模式建置。
4. 在 Coolify 設定必要環境變數。
5. 將公開連接埠指向 `3000`。

### Docker 映像內容

- 建置階段使用 `npm ci` 安裝依賴
- 透過 `next.config.mjs` 的 `output: 'standalone'` 產生可部署映像
- 執行階段以 `node server.js` 啟動

## 常見問題

### 啟動後地圖沒有資料

先確認瀏覽器是否能正常連到外部地圖與開放資料來源；若外部來源短暫失敗，部分資料會退回內建資料或 fallback。

### AI 說明沒有出現

請確認已設定 `NIGHTSAFE_AI_API_KEY`，或提供 `OPENAI_API_KEY` 作為相容備援。

### 部署後無法啟動

請先在本地執行 `npm run build`，確認建置可成功，再檢查部署環境是否有正確帶入環境變數與對外埠 `3000`。
