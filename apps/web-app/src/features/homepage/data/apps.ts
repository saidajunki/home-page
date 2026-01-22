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
    url: 'https://q-a-linker.app.babl.tech',
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
    id: 'git-nl',
    name: 'git-nl',
    tagline: '自然言語駆動開発のためのGitホスティング',
    description: '仕様書（specs/）とルール（rules/）を中心に管理・閲覧できるGitリモートリポジトリ。AI駆動開発を見据え、要件定義書やコーディングルールの可視化に特化。',
    url: 'https://git-nl.app.babl.tech',
    gradient: {
      from: '#1e3a5f',
      to: '#0d1b2a',
    },
    features: [
      {
        title: '仕様書の可視化',
        description: 'リポジトリ内のspecs/ディレクトリを読みやすく表示。要件定義書を中心とした開発フローを支援。',
      },
      {
        title: 'ルール管理',
        description: 'rules/ディレクトリのルール種類（security/coding/testing等）の割合を可視化。チームの品質基準を一目で把握。',
      },
      {
        title: '自前Gitホスティング',
        description: 'clone/fetch/pushをサポート。PATによる認証でセキュアなpush操作を実現。',
      },
      {
        title: 'カバレッジ表示',
        description: 'テストカバレッジレポートを取り込み、品質指標を可視化。',
      },
    ],
  },

];
