'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { CpuDataPoint } from '../hooks/useServiceStatus';

type CpuChartProps = {
  data: CpuDataPoint[];
};

export function CpuChart({ data }: CpuChartProps) {
  if (data.length === 0) {
    return (
      <div className="h-48 flex items-center justify-center text-gray-400">
        データを収集中...
      </div>
    );
  }

  return (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis
            dataKey="time"
            tick={{ fontSize: 12, fill: '#666' }}
            tickLine={{ stroke: '#ccc' }}
            axisLine={{ stroke: '#ccc' }}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fontSize: 12, fill: '#666' }}
            tickLine={{ stroke: '#ccc' }}
            axisLine={{ stroke: '#ccc' }}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
            formatter={(value) => [`${value}%`, 'CPU使用率']}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#722F37"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: '#722F37' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
