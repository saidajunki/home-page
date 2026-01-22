import Link from 'next/link';
import { ServiceCard } from '@/features/status/components/ServiceCard';
import { services } from '@/features/status/data/services';

export const metadata = {
  title: 'Status | app.babl.tech',
  description: 'サービスの稼働状況を確認できます',
};

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            <span className="text-wine-light">app.</span>
            <span className="text-gray-900">babl</span>
            <span className="text-wine">.tech</span>
          </Link>
          <span className="text-sm text-gray-500">Status</span>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            サービスステータス
          </h1>
          <p className="text-gray-600">
            各サービスの稼働状況とリソース使用状況を確認できます。
          </p>
        </div>

        {/* サービス一覧 */}
        <div className="space-y-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </main>

      {/* フッター */}
      <footer className="border-t border-gray-100 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} app.babl.tech
          </p>
        </div>
      </footer>
    </div>
  );
}
