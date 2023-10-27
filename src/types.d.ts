// export type Weather = 'rainy' | 'couldy' | 'sunny' | 'windy'
// export type Visibility = 'good' | 'bad' | 'poor'

import { type Weather, type Visibility } from './enums'

export interface Diary {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export type DiaryWithoutId = Omit<Diary, 'id'>
export type DiaryWithoutComment = Omit<Diary, comment>
