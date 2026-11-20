import { REVIEW_STATUS_LABEL, type ReviewStatus } from '../types/image.ts'

const MARK_CLASS: Record<ReviewStatus, string> = {
  pending: 'bg-neutral-400',
  reviewing: 'bg-amber-700',
  rejected: 'bg-red-700',
  resubmitted: 'bg-blue-800',
  approved: 'bg-green-700',
}

export function StatusBadge({ status }: { status: ReviewStatus }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-neutral-800">
      <span className={`inline-block h-2 w-2 ${MARK_CLASS[status]}`} aria-hidden="true" />
      {REVIEW_STATUS_LABEL[status]}
    </span>
  )
}
