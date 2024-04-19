export function formAcronym(text: string, qtdLetter: number = 1) {
  const arrayWords = text.split(" ")
  let acronym: string
  if (arrayWords.length === 1 || qtdLetter === 1) {
    acronym = arrayWords.at(0)!.charAt(0)
  } else {
    acronym = arrayWords.at(0)!.charAt(0) + arrayWords.at(arrayWords.length - 1)!.charAt(0)
  }
  return acronym.toUpperCase()
}