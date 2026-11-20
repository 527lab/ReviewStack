import { useEffect, useState } from 'react'
import { listImages } from '../api/images.ts'
import { ImageCard } from '../components/ImageCard.tsx'
import { StatusFilterBar } from '../components/StatusFilter.tsx'
import { countByStatus, filterImages, sortByUploadedAtDesc } from '../utils/images.ts'
import { REVIEW_STATUS_LABEL, type ImageAsset, type StatusFilter } from '../types/image.ts'

export function ImageListPage() {
  const [filter, setFilter] = useState<StatusFilter>('all')
  const [images, setImages] = useState<ImageAsset[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    listImages()
      .then((result) => {
        if (!active) return
        setImages(sortByUploadedAtDesc(result))
      })
      .catch(() => {
        if (!active) return
        setError('圖片清單載入失敗。請重新整理頁面。')
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <header className="border-b border-neutral-300 bg-white">
        <div className="flex h-10 items-center gap-2 px-4 text-sm">
          <span className="font-medium">ReviewStack</span>
          <span className="text-neutral-400" aria-hidden="true">
            /
          </span>
          <h1 className="font-normal">圖片清單</h1>
        </div>
      </header>

      <main className="px-4 py-3">
        {error ? (
          <p role="alert" className="border-l-2 border-red-700 px-3 py-2 text-sm text-red-800">
            {error}
          </p>
        ) : images === null ? (
          <p role="status" className="py-2 text-sm text-neutral-600">
            載入中…
          </p>
        ) : (
          <ImageList images={images} filter={filter} onFilterChange={setFilter} />
        )}
      </main>
    </div>
  )
}

function ImageList({
  images,
  filter,
  onFilterChange,
}: {
  images: ImageAsset[]
  filter: StatusFilter
  onFilterChange: (value: StatusFilter) => void
}) {
  const filtered = filterImages(images, filter)
  const counts = countByStatus(images)
  const filterLabel = filter === 'all' ? '全部' : REVIEW_STATUS_LABEL[filter]

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <StatusFilterBar value={filter} counts={counts} onChange={onFilterChange} />
        <p className="text-xs tabular-nums text-neutral-500" aria-live="polite">
          {filtered.length} 張
        </p>
      </div>
      {filtered.length === 0 ? (
        <p className="py-8 text-sm text-neutral-500">
          {filter === 'all' ? '目前沒有圖片。' : `沒有${filterLabel}的圖片。`}
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((image) => (
            <li key={image.id}>
              <ImageCard image={image} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
