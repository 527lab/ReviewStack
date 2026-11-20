/**
 * 審圖狀態。對應里程碑：上傳 → 審圖／框選瑕疵 → 退件 → 重交。
 * `approved`（已通過）是另外假設的成功終態，里程碑沒有寫死這個名稱。
 *
 * - pending：已上傳，等待開始審圖
 * - reviewing：審圖中，正在框選瑕疵
 * - rejected：已退件（已轉成退件單）
 * - resubmitted：依退件意見重新提交，等待再審
 * - approved：審圖通過
 */
export const REVIEW_STATUSES = [
  'pending',
  'reviewing',
  'rejected',
  'resubmitted',
  'approved',
] as const

export type ReviewStatus = (typeof REVIEW_STATUSES)[number]

export const REVIEW_STATUS_LABEL: Record<ReviewStatus, string> = {
  pending: '待審圖',
  reviewing: '審圖中',
  rejected: '已退件',
  resubmitted: '已重交',
  approved: '已通過',
}

export function isReviewStatus(value: string): value is ReviewStatus {
  return (REVIEW_STATUSES as readonly string[]).includes(value)
}

/** 清單上的一張圖片。之後對接 API 時維持這個形狀即可。 */
export type ImageAsset = {
  id: string
  filename: string
  /** ISO 8601，含時區。 */
  uploadedAt: string
  status: ReviewStatus
  thumbnailUrl: string
}

export type StatusFilter = ReviewStatus | 'all'
