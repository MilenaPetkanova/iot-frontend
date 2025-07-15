export function useDateFormat() {
  function formatDateTimeToBG(dateRaw: Date | string | null): string {
    const formatDate = dateRaw ? new Date(dateRaw).toLocaleString('bg-BG') : ''
    return formatDate
  }

  function formatDateToBG(dateRaw: Date | string | null): string {
    const formatDate = dateRaw
      ? new Date(dateRaw).toLocaleDateString('bg-BG')
      : ''
    return formatDate
  }

  return {
    formatDateTimeToBG,
    formatDateToBG
  }
}
