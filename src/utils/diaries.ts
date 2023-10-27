import { Visibility, Weather } from '../enums'
import { type DiaryWithoutId } from '../types'

const validateDate = (date: any): string => {
  const isDate = Boolean(Date.parse(date))
  if (!isDate) throw new Error('invalid date')
  return date
}

const isString = (str: any): boolean => {
  return (typeof str === 'string' || str instanceof String)
}
const validateComment = (comment: any): string => {
  if (!isString(comment)) throw new Error('invalid comment')
  return comment
}

const validateWeather = (w: any): Weather => {
  if (!Object.values(Weather).includes(w)) throw new Error('invalid weather value')
  return w
}

const validateVisibility = (visibility: any): Visibility => {
  if (!Object.values(Visibility).includes(visibility)) throw new Error('invalid visibility value')
  return visibility
}

export const validateDiary = (obj: any): DiaryWithoutId => {
  const date = validateDate(obj.date)
  const weather = validateWeather(obj.weather)
  const visibility = validateVisibility(obj.visibility)
  const comment = validateComment(obj.comment)
  return {
    date,
    weather,
    visibility,
    comment
  }
}
