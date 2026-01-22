# L3: 技術仕様 - ステータスページ

## エンドポイント

### ページ
- URL: `/status`
- レンダリング: Client Component（定期更新のため）

### ステータス取得API（モック）
初期実装ではモックデータを使用。後で実際のAPIに差し替え。

```typescript
// モックレスポンス
{
  "status": "operational" | "down",
  "cpuUsage": 0-100 // パーセンテージ
}
```

---

## データ構造

### サービス定義
```typescript
type Service = {
  id: string;
  name: string;
  description: string;
  url: string;
  statusEndpoint: string; // 将来的にAPIエンドポイントを設定
};
```

### ステータスデータ
```typescript
type ServiceStatus = {
  status: 'operational' | 'down' | 'unknown';
  cpuUsage: number;
  timestamp: Date;
};

type CpuHistory = {
  timestamp: Date;
  value: number;
}[];
```

---

## 実装方針

### データ取得
- 初期: モックデータ（ランダム値）
- 将来: 実際のAPIエンドポイントから取得

### CPU履歴の管理
- `useState`でブラウザ側に保持
- 最大60データポイント（1時間分）
- 1分ごとに`setInterval`で更新

### グラフ描画
- Recharts または Chart.js を使用
- シンプルな折れ線グラフ

---

## ディレクトリ構成

```
apps/web-app/src/
├── app/
│   └── status/
│       └── page.tsx           # ステータスページ
│
└── features/
    └── status/
        ├── components/
        │   ├── ServiceCard.tsx
        │   ├── StatusBadge.tsx
        │   └── CpuChart.tsx
        ├── hooks/
        │   └── useServiceStatus.ts
        └── data/
            └── services.ts    # サービス定義
```

---

## 依存ライブラリ

- recharts: グラフ描画
