# L3: 技術仕様 - ホームページ

## 技術スタック

| カテゴリ | 技術 | 理由 |
|---------|------|------|
| フレームワーク | Next.js 15 (App Router) | SSG対応、パフォーマンス |
| 言語 | TypeScript | 型安全性 |
| スタイリング | Tailwind CSS | ユーティリティファースト、レスポンシブ対応 |
| アニメーション | Framer Motion | スクロールアニメーション、パララックス |
| ホスティング | Vercel（予定） | Next.jsとの親和性 |

## ビルド設定

### レンダリング戦略
- **Static Site Generation (SSG)** を使用
- DBアクセスなし、動的コンテンツなしのため静的生成で十分
- `next build` で静的HTMLを生成

### 出力
```
out/
├── index.html
├── _next/
│   ├── static/
│   └── ...
└── ...
```

## アニメーション実装

### スクロールアニメーション
- Framer Motion の `useScroll` + `useTransform` を使用
- Intersection Observer でビューポート検知

```typescript
// 例: フェードインアニメーション
const { scrollYProgress } = useScroll();
const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
```

### 背景色トランジション
- CSS `scroll-snap` または Framer Motion でセクション検知
- 背景色を `transition` で滑らかに変更

### パフォーマンス考慮
- `will-change` プロパティの適切な使用
- GPU アクセラレーション（transform, opacity）
- `prefers-reduced-motion` 対応

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## ディレクトリ構成

```
apps/web-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # ルートレイアウト
│   │   ├── page.tsx            # ホームページ
│   │   └── globals.css         # グローバルスタイル
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       └── Button.tsx
│   │
│   └── features/
│       └── homepage/
│           ├── components/
│           │   ├── HeroSection.tsx
│           │   ├── AppSection.tsx
│           │   └── ScrollIndicator.tsx
│           ├── hooks/
│           │   └── useScrollAnimation.ts
│           └── data/
│               └── apps.ts      # モックデータ
│
├── public/
│   └── images/
│
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## カラー定義（Tailwind）

```typescript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: '#722F37',
          dark: '#4a1f24',
          light: '#8b3a42',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a1a',
          lighter: '#2a2a2a',
        },
      },
    },
  },
};
```

## 非機能要件

### 優先順位
1. **かっこよさ・ビジュアル体験** ← 最優先
2. 動作の安定性
3. パフォーマンス（後回しでOK）
4. SEO（後回しでOK）

### ブラウザサポート
- Chrome, Safari, Firefox, Edge（最新2バージョン）
- iOS Safari, Android Chrome
