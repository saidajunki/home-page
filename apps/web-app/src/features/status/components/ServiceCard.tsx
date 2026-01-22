'use client';

import { StatusBadge } from './StatusBadge';
import { CpuChart } from './CpuChart';
import { useServiceStatus } from '../hooks/useServiceStatus';
import type { Service } from '../data/services';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const { status, cpuHistory, isLoading } = useServiceStatus(service.id);

  return (
    <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
      {/* ヘッダー */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{service.name}</h2>
          <p className="text-gray-600 mt-1">{service.description}</p>
        </div>
        {isLoading ? (
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-500">
            <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
            Loading...
          </span>
        ) : (
          <StatusBadge status={status.status} />
        )}
      </div>

      {/* リソース使用状況 */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <span className="text-sm font-medium text-gray-500">CPU使用率</span>
          <div className="mt-1">
            <span className="text-2xl font-bold text-wine">{status.cpuUsage}%</span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <span className="text-sm font-medium text-gray-500">メモリ使用率</span>
          <div className="mt-1">
            <span className="text-2xl font-bold text-wine">{status.memoryUsage}%</span>
            {status.memoryDetail && (
              <span className="text-xs text-gray-400 block mt-1">{status.memoryDetail}</span>
            )}
          </div>
        </div>
      </div>

      {/* CPU使用率グラフ */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">CPU使用率推移</span>
        </div>
        <CpuChart data={cpuHistory} />
        <p className="text-xs text-gray-400 mt-2">
          ※ 1分ごとに更新されます。ページを開いている間のみデータが蓄積されます。
        </p>
      </div>

      {/* リンクボタン */}
      <a
        href={service.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-wine hover:bg-wine-dark text-white font-medium rounded-lg transition-colors duration-200"
      >
        <span>サービスを開く</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );
}
