# frontend

ReviewStack 前端。在 #3 專案骨架完成前，這個目錄可以獨立安裝與啟動。

技術：Vite、React、TypeScript、Tailwind CSS。

## 啟動

```bash
cd frontend
npm install
npm run dev
```

瀏覽器打開終端機顯示的網址（預設 http://localhost:5173）。

## 指令

- `npm run dev`：開發伺服器
- `npm run lint`：oxlint
- `npm run build`：型別檢查並產出正式版
- `npm run preview`：預覽正式版產出

## 圖片清單

首頁顯示圖片縮圖網格。每張卡片有檔名、上傳時間、審圖狀態。上方可依狀態篩選。

假資料在 `src/mocks/images.ts`。頁面只呼叫 `src/api/images.ts` 的 `listImages()`。後端 API 完成後，改這一個函式即可，頁面不用重寫。

### 審圖狀態

這次先用的狀態，對應里程碑「上傳 → 審圖／框選瑕疵 → 退件 → 重交」。`approved` 是另外補上的通過終態。

| 代碼 | 畫面上的標籤 | 意義 |
| --- | --- | --- |
| `pending` | 待審圖 | 已上傳，等待開始審圖 |
| `reviewing` | 審圖中 | 正在看圖、框選瑕疵 |
| `rejected` | 已退件 | 已轉成退件單 |
| `resubmitted` | 已重交 | 依退件意見重新提交，等待再審 |
| `approved` | 已通過 | 審圖通過 |
