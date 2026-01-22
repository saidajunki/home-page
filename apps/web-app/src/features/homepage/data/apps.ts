// モックデータ: アプリ一覧
export type AppData = {
  id: string;
  name: string;
  description: string;
  url: string;
  gradient: {
    from: string;
    to: string;
  };
};

export const apps: AppData[] = [
  {
    id: 'app-1',
    name: 'Quantum',
    description: '次世代のデータ分析プラットフォーム。複雑なデータを美しく可視化します。',
    url: 'https://google.com',
    gradient: {
      from: '#722F37',
      to: '#0a0a0a',
    },
  },
  {
    id: 'app-2',
    name: 'Nebula',
    description: 'クラウドネイティブなプロジェクト管理ツール。チームの生産性を最大化。',
    url: 'https://google.com',
    gradient: {
      from: '#4a1f24',
      to: '#722F37',
    },
  },
  {
    id: 'app-3',
    name: 'Aurora',
    description: 'AIを活用したクリエイティブアシスタント。あなたのアイデアを形に。',
    url: 'https://google.com',
    gradient: {
      from: '#0a0a0a',
      to: '#4a1f24',
    },
  },
];
