export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + "万"
  } else return count
}

export function formatImageUrlBySize(
  imageUrl: string,
  width: number,
  height: number = width
) {
  return imageUrl + `?param=${width}y${height}`
}

export function formatMillisecondsToTime(milliseconds: number = 0) {
  const seconds = milliseconds / 1000
  const minute = Math.floor(seconds / 60)
  const second = Math.floor(seconds % 60)
  return `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`
}
