const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/ // match [02:39.906]

export interface ILyric {
  time: number
  text: string
}

export function parseLyric(lyricStr: string) {
  const lyricLines: string[] = lyricStr.split("\n")

  return lyricLines
    .map((lyricLine) => {
      const result = timeRegExp.exec(lyricLine)
      if (!result) return false

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, minute, second, millisecond] = result
      const time =
        Number(minute) * 60 * 1000 +
        Number(second) * 1000 +
        Number(
          millisecond.length === 2 ? millisecond.padEnd(3, "0") : millisecond
        )
      const text = lyricLine.replace(timeRegExp, "")
      return { text, time }
    })
    .filter((lyric) => lyric) as ILyric[]
}
