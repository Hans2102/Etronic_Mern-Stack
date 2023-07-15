export function formatVND(num) {
  return num
    .toString()
    .replace(/(\d{1,3}(?=(\d{3})+(?!\d)))/g, '$1.')  
}