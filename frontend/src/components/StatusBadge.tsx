import { REVIEW_STATUS_LABEL, type ReviewStatus } from '../types/image.ts'

const BADGE_CLASS: Record<ReviewStatus, string> = {
  pending: 'bg-slate-100 text-slate-700 ring-slate-300',
  reviewing: 'bg-amber-50 text-amber-900 ring-amber-200',
  rejected: 'bg-rose-50 text-rose-800 ring-rose-200',
  resubmitted: 'bg-sky-50 text-sky-900 ring-sky-200',
  approved: 'bg-emerald-50 text-emerald-800 ring-emerald-200',
}

export function StatusBadge({ status }: { status: ReviewStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${BADGE_CLASS[status]}`}
    >
      {REVIEW_STATUS_LABEL[status]}
    </span>
  )
}
