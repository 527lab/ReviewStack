import type { ImageAsset } from '../types/image.ts'
import { formatUploadedAt } from '../utils/formatUploadedAt.ts'
import { StatusBadge } from './StatusBadge.tsx'

export function ImageCard({ image }: { image: ImageAsset }) {
  return (
    <article className="min-w-0 border border-neutral-300 bg-white">
      <div className="aspect-[4/3] bg-neutral-200">
        <img src={image.thumbnailUrl} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="space-y-1 px-2 py-1.5">
        <p className="truncate text-[13px] text-neutral-900" title={image.filename}>
          {image.filename}
        </p>
        <p className="text-xs text-neutral-500">
          上傳{' '}
          <time className="tabular-nums" dateTime={image.uploadedAt}>
            {formatUploadedAt(image.uploadedAt)}
          </time>
        </p>
        <StatusBadge status={image.status} />
      </div>
    </article>
  )
}
