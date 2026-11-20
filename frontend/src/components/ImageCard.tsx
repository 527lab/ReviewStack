import type { ImageAsset } from '../types/image.ts'
import { formatUploadedAt } from '../utils/formatUploadedAt.ts'
import { StatusBadge } from './StatusBadge.tsx'

export function ImageCard({ image }: { image: ImageAsset }) {
  return (
    <article className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="aspect-square bg-slate-100">
        <img src={image.thumbnailUrl} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="space-y-2 p-3">
        <h2 className="truncate text-sm font-medium text-slate-900" title={image.filename}>
          {image.filename}
        </h2>
        <p className="text-xs text-slate-500">
          上傳時間{' '}
          <time className="tabular-nums text-slate-700" dateTime={image.uploadedAt}>
            {formatUploadedAt(image.uploadedAt)}
          </time>
        </p>
        <StatusBadge status={image.status} />
      </div>
    </article>
  )
}
