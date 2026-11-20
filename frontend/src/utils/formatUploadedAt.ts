const uploadedAtFormatter = new Intl.DateTimeFormat('zh-TW', {
  timeZone: 'Asia/Taipei',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
})

/** 把 ISO 時間格式化成台北時間，例如 2026/11/20 09:15。 */
export function formatUploadedAt(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return '時間不明'

  const parts = uploadedAtFormatter.formatToParts(date)
  const pick = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? ''

  return `${pick('year')}/${pick('month')}/${pick('day')} ${pick('hour')}:${pick('minute')}`
}
