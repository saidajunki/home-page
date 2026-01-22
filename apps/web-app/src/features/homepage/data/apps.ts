// アプリ一覧データ
export type AppFeature = {
  title: string;
  description: string;
};

export type AppData = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  gradient: {
    from: string;
    to: string;
  };
  features?: AppFeature[];
  isFeatured?: boolean;
};

export const apps: AppData[] = [
  {
    id: 'qalinker',
    name: 'QALinker',
    tagline: '人間の集合知 × AI仲介',
    description: '人間をAIモデルのように使う、新しいQ&Aプラットフォーム。AIは回答を生成せず、徹底的に「仲介」に徹する。複数の人間回答者からの知見を統合し、確実性の高い回答を提供します。',
    url: '#',
    gradient: {
      from: '#1a1a2e',
      to: '#16213e',
    },
    isFeatured: true,
    features: [
      {
        title: 'AIは仲介に徹する',
        description: 'AIは回答を生成しない。質問の構造化、回答の翻訳、複数意見の統合に専念。ハルシネーションのリスクを排除。',
      },
      {
        title: '人間の集合知',
        description: '複数の回答者 = 複数のモデル。統合回答 = アンサンブル学習。評価フィードバック = ファインチューニング。',
      },
      {
        title: '速度より確実性',
        description: '数時間〜1日待ってもいいから、確実な情報が欲しい。医療・法律・キャリアなど、重要な決断を支援。',
      },
      {
        title: '天才の社会参画',
        description: '埋もれている専門知識を社会に還元。AIが翻訳し、非同期・匿名で参加可能。コミュ力に依存しない評価。',
      },
      {
        title: '国境を越えた集合知',
        description: '世界中の専門家が協力し、誰もがその恩恵を受けられる社会へ。言語の壁はAIが翻訳。',
      },
    ],
  },
  {
    id: 'app-1',
    name: 'Quantum',
    tagline: 'データを美しく',
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
    tagline: 'チームの生産性を最大化',
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
    tagline: 'アイデアを形に',
    description: 'AIを活用したクリエイティブアシスタント。あなたのアイデアを形に。',
    url: 'https://google.com',
    gradient: {
      from: '#0a0a0a',
      to: '#4a1f24',
    },
  },
];
