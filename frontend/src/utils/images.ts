import type { ImageAsset, StatusFilter } from '../types/image.ts'

export function sortByUploadedAtDesc(images: ImageAsset[]): ImageAsset[] {
  return [...images].sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt))
}

export function filterImages(images: ImageAsset[], status: StatusFilter): ImageAsset[] {
  if (status === 'all') return images
  return images.filter((image) => image.status === status)
}

export function countByStatus(images: ImageAsset[]): Record<StatusFilter, number> {
  const counts: Record<StatusFilter, number> = {
    all: images.length,
    pending: 0,
    reviewing: 0,
    rejected: 0,
    resubmitted: 0,
    approved: 0,
  }

  for (const image of images) {
    counts[image.status] += 1
  }

  return counts
}
