// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
   return number.toString().padStart(2, "0")
}

export function FormatTime(time) {
   const date = new Date(time)
   const hours = padZero(date.getHours())
   const minutes = padZero(date.getMinutes())

   return `${hours}:${minutes}`
}
