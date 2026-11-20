import { mockImages } from '../mocks/images.ts'
import type { ImageAsset } from '../types/image.ts'

/**
 * 取得圖片清單。
 *
 * 後端 API 還沒有，所以現在回傳假資料。之後只改這個函式，例如：
 *
 * ```ts
 * const response = await fetch('/api/images')
 * if (!response.ok) throw new Error('無法取得圖片清單')
 * return response.json() as Promise<ImageAsset[]>
 * ```
 *
 * 頁面繼續呼叫 `listImages()`，回傳格式維持 `ImageAsset[]` 即可。
 */
export async function listImages(): Promise<ImageAsset[]> {
  return mockImages.map((image) => ({ ...image }))
}
