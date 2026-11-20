import { useEffect, useState } from 'react'
import { listImages } from '../api/images.ts'
import { ImageCard } from '../components/ImageCard.tsx'
import { StatusFilterBar } from '../components/StatusFilter.tsx'
import { countByStatus, filterImages, sortByUploadedAtDesc } from '../lib/images.ts'
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
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4 sm:px-6">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-900 text-sm font-semibold text-white">
            RS
          </span>
          <div>
            <p className="text-sm font-semibold leading-tight">ReviewStack</p>
            <p className="text-xs text-slate-500">審圖資產</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">圖片清單</h1>
          <p className="mt-1 text-sm text-slate-600">
            依上傳時間由新到舊排列。後端 API 完成前，這份清單使用假資料。
          </p>
        </div>

        {error ? (
          <p role="alert" className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
            {error}
          </p>
        ) : images === null ? (
          <p role="status" className="text-sm text-slate-600">
            正在載入圖片清單…
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
    <div className="space-y-5">
      <StatusFilterBar value={filter} counts={counts} onChange={onFilterChange} />
      <p className="text-sm text-slate-600" aria-live="polite">
        顯示 {filtered.length} 張圖片
      </p>
      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-12 text-center text-sm text-slate-500">
          {filter === 'all' ? '目前沒有圖片。' : `沒有「${filterLabel}」的圖片。`}
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
