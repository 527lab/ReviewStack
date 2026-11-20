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
    <div
      className="inline-flex flex-wrap gap-px bg-neutral-300 p-px"
      role="group"
      aria-labelledby="status-filter-label"
    >
      <span id="status-filter-label" className="sr-only">
        審圖狀態
      </span>
      {OPTIONS.map((option) => {
        const selected = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option.value)}
            className={`px-2.5 py-1 text-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-800 ${
              selected ? 'bg-neutral-800 text-white' : 'bg-white text-neutral-700 hover:bg-neutral-100'
            }`}
          >
            {option.label}
            <span className={`ml-1 tabular-nums ${selected ? 'text-neutral-300' : 'text-neutral-500'}`}>
              {counts[option.value]}
            </span>
          </button>
        )
      })}
    </div>
  )
}
