import { REVIEW_STATUSES, REVIEW_STATUS_LABEL, type StatusFilter } from '../types/image.ts'

const OPTIONS: { value: StatusFilter; label: string }[] = [
  { value: 'all', label: '全部' },
  ...REVIEW_STATUSES.map((status) => ({
    value: status,
    label: REVIEW_STATUS_LABEL[status],
  })),
]

type StatusFilterBarProps = {
  value: StatusFilter
  counts: Record<StatusFilter, number>
  onChange: (value: StatusFilter) => void
}

export function StatusFilterBar({ value, counts, onChange }: StatusFilterBarProps) {
  return (
    <div>
      <p id="status-filter-label" className="mb-2 text-sm font-medium text-slate-700">
        審圖狀態
      </p>
      <div className="flex flex-wrap gap-2" role="group" aria-labelledby="status-filter-label">
        {OPTIONS.map((option) => {
          const selected = option.value === value
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.value)}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 ${
                selected
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {option.label}
              <span
                className={`rounded-full px-1.5 text-xs tabular-nums ${
                  selected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {counts[option.value]}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
