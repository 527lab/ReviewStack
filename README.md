# ReviewStack

ReviewStack 是給 AI 繪圖團隊使用的審圖與資產管理平台。目標是讓審圖者能在圖上標出瑕疵，並一鍵轉成退件單，同時管理團隊的圖片資產。

## 預定技術

- 前端：Vue 3 或 React，搭配 Tailwind CSS
- 後端：FastAPI
- 資料庫：SQLite 或 PostgreSQL
- 物件儲存：MinIO
- AI：外掛式評分／瑕疵偵測

技術選型尚未全部鎖定，實作時以當時已確認的 Issue 為準。

## 協作方式

本 repo 採多人開發，組員與 coding agent 都依 GitHub 上的 Issue、Pull Request 與 Review 傳遞資訊。

**請先閱讀 [CONTRIBUTING.md](./CONTRIBUTING.md)**，其中包含：

- Commit、分支、Issue、Pull Request 規則與範本
- 標籤說明
- Code Review 與合併：只由 David（@DavidWu94）核准並合併

## 授權與貢獻

此專案由 [527lab](https://github.com/527lab) 開發。要參與開發，請先開 Issue 討論，再依協作規範送出 Pull Request。
