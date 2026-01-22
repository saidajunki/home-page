'use client';

import { useState, useEffect, useCallback } from 'react';

export type ServiceStatus = {
  status: 'operational' | 'down' | 'unknown';
  cpuUsage: number;
  memoryUsage: number;
  memoryDetail: string;
};

export type CpuDataPoint = {
  time: string;
  value: number;
};

const MAX_DATA_POINTS = 60;
const STATUS_API_URL = 'https://status-api.app.babl.tech/api/status';

type ContainerStatus = {
  name: string;
  cpu: number;
  memory: number;
  memoryUsage: string;
  health: string;
};

type ApiResponse = {
  timestamp: string;
  containers: ContainerStatus[];
};

export function useServiceStatus(serviceId: string) {
  const [status, setStatus] = useState<ServiceStatus>({
    status: 'unknown',
    cpuUsage: 0,
    memoryUsage: 0,
    memoryDetail: '',
  });
  const [cpuHistory, setCpuHistory] = useState<CpuDataPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStatus = useCallback(async () => {
    try {
      const response = await fetch(STATUS_API_URL);
      if (!response.ok) throw new Error('API error');
      
      const data: ApiResponse = await response.json();
      const container = data.containers.find(c => c.name === serviceId);

      if (container) {
        const newStatus: ServiceStatus = {
          status: container.health === 'healthy' ? 'operational' : 'down',
          cpuUsage: Math.round(container.cpu * 100) / 100,
          memoryUsage: Math.round(container.memory * 100) / 100,
          memoryDetail: container.memoryUsage,
        };

        setStatus(newStatus);
        setIsLoading(false);

        const now = new Date();
        const timeLabel = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

        setCpuHistory((prev) => {
          const newHistory = [
            ...prev,
            { time: timeLabel, value: newStatus.cpuUsage },
          ];
          if (newHistory.length > MAX_DATA_POINTS) {
            return newHistory.slice(-MAX_DATA_POINTS);
          }
          return newHistory;
        });
      } else {
        setStatus({
          status: 'unknown',
          cpuUsage: 0,
          memoryUsage: 0,
          memoryDetail: '',
        });
        setIsLoading(false);
      }
    } catch {
      setStatus({
        status: 'unknown',
        cpuUsage: 0,
        memoryUsage: 0,
        memoryDetail: '',
      });
      setIsLoading(false);
    }
  }, [serviceId]);

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, [fetchStatus]);

  return { status, cpuHistory, isLoading };
}
