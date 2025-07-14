export function useDateFormat() {
  function formatDateToBG(dateStr: string | Date): string {
    const result = new Date(dateStr).toLocaleString('bg-BG')
    return result
  }

  return {
    formatDateToBG
  }
}
