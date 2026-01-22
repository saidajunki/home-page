// サービス定義
export type Service = {
  id: string;
  name: string;
  description: string;
  url: string;
};

export const services: Service[] = [
  {
    id: 'q-a-linker',
    name: 'Q&A Linker',
    description: 'Q&Aリンカーサービス。質問と回答を効率的に管理・連携します。',
    url: 'https://q-a-linker.app.babl.tech',
  },
  {
    id: 'home-page',
    name: 'Home Page',
    description: 'BableAppのホームページ。各サービスの紹介とステータス確認。',
    url: 'https://app.babl.tech',
  },
];
