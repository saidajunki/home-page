type StatusBadgeProps = {
  status: 'operational' | 'down' | 'unknown';
};

const statusConfig = {
  operational: {
    label: 'Operational',
    bgColor: 'bg-green-100',
    textColor: 'text-green-700',
    dotColor: 'bg-green-500',
  },
  down: {
    label: 'Down',
    bgColor: 'bg-red-100',
    textColor: 'text-red-700',
    dotColor: 'bg-red-500',
  },
  unknown: {
    label: 'Unknown',
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-700',
    dotColor: 'bg-gray-500',
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${config.bgColor} ${config.textColor}`}
    >
      <span className={`w-2 h-2 rounded-full ${config.dotColor}`} />
      {config.label}
    </span>
  );
}
