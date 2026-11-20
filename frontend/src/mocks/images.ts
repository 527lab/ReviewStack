import type { ImageAsset } from '../types/image.ts'

/**
 * 假圖片清單。只放資料，頁面不要直接 import 這個檔案。
 * 換成真 API 時改 `src/api/images.ts`。
 */
export const mockImages: ImageAsset[] = [
  {
    id: 'img-01',
    filename: 'poster-spring-festival.png',
    uploadedAt: '2026-11-20T09:15:00+08:00',
    status: 'pending',
    thumbnailUrl: '/thumbnails/poster-spring-festival.svg',
  },
  {
    id: 'img-02',
    filename: 'armor-detail-closeup.png',
    uploadedAt: '2026-11-19T21:40:00+08:00',
    status: 'reviewing',
    thumbnailUrl: '/thumbnails/armor-detail-closeup.svg',
  },
  {
    id: 'img-03',
    filename: 'hero-portrait-v3.png',
    uploadedAt: '2026-11-19T15:12:00+08:00',
    status: 'pending',
    thumbnailUrl: '/thumbnails/hero-portrait-v3.svg',
  },
  {
    id: 'img-04',
    filename: 'creature-concept-03.png',
    uploadedAt: '2026-11-19T11:03:00+08:00',
    status: 'resubmitted',
    thumbnailUrl: '/thumbnails/creature-concept-03.svg',
  },
  {
    id: 'img-05',
    filename: 'city-night-rain-04.png',
    uploadedAt: '2026-11-18T19:47:00+08:00',
    status: 'reviewing',
    thumbnailUrl: '/thumbnails/city-night-rain-04.svg',
  },
  {
    id: 'img-06',
    filename: 'logo-mark-final.png',
    uploadedAt: '2026-11-18T14:20:00+08:00',
    status: 'approved',
    thumbnailUrl: '/thumbnails/logo-mark-final.svg',
  },
  {
    id: 'img-07',
    filename: 'forest-spirit-v2.png',
    uploadedAt: '2026-11-17T16:55:00+08:00',
    status: 'resubmitted',
    thumbnailUrl: '/thumbnails/forest-spirit-v2.svg',
  },
  {
    id: 'img-08',
    filename: 'product-shot-bottle.png',
    uploadedAt: '2026-11-17T10:08:00+08:00',
    status: 'reviewing',
    thumbnailUrl: '/thumbnails/product-shot-bottle.svg',
  },
  {
    id: 'img-09',
    filename: 'character-turnaround-sheet-front-a.png',
    uploadedAt: '2026-11-16T13:33:00+08:00',
    status: 'pending',
    thumbnailUrl: '/thumbnails/character-turnaround-sheet-front-a.svg',
  },
  {
    id: 'img-10',
    filename: 'background-temple-06.png',
    uploadedAt: '2026-11-15T18:22:00+08:00',
    status: 'rejected',
    thumbnailUrl: '/thumbnails/background-temple-06.svg',
  },
  {
    id: 'img-11',
    filename: 'ui-icon-set-export.png',
    uploadedAt: '2026-11-14T09:41:00+08:00',
    status: 'approved',
    thumbnailUrl: '/thumbnails/ui-icon-set-export.svg',
  },
  {
    id: 'img-12',
    filename: 'mech-sketch-lineart.png',
    uploadedAt: '2026-11-13T20:16:00+08:00',
    status: 'rejected',
    thumbnailUrl: '/thumbnails/mech-sketch-lineart.svg',
  },
]
