export function useDateFormat() {
  function formatDateToBG(dateStr: string): string {
    const date = new Date(dateStr)
    const bgTime = new Date(
      date.toLocaleString('en-US', { timeZone: 'Europe/Sofia' })
    )

    const year = bgTime.getFullYear()
    const month = String(bgTime.getMonth() + 1).padStart(2, '0')
    const day = String(bgTime.getDate()).padStart(2, '0')
    const hours = String(bgTime.getHours()).padStart(2, '0')
    const minutes = String(bgTime.getMinutes()).padStart(2, '0')
    const seconds = String(bgTime.getSeconds()).padStart(2, '0')

    const result = `${year}.${month}.${day}, ${hours}:${minutes}:${seconds}`
    return result
  }

  return {
    formatDateToBG
  }
}
