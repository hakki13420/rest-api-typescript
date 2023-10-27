import diarieData from '../data/diaries.json'
import { type DiaryWithoutComment, type Diary, type DiaryWithoutId } from '../types'

const diaries: Diary[] = diarieData as Diary[]

export const getDiaries = (): Diary[] => diaries

export const getDiariesWithoutComments = (): DiaryWithoutComment => diaries.map(
  diary => ({
    id: diary.id,
    date: diary.date,
    weather: diary.weather,
    visibility: diary.visibility
  })
)

export const getOneDiary = (id: number): Diary | undefined => {
  return diaries.find(d => d.id === id)
}

export const getOneDiaryWithoutComment = (id: number): DiaryWithoutComment | undefined => {
  const diary = diaries.find(d => d.id === id)
  if (diary != null) {
    const { comment, ...rest } = diary
    return rest
  }
  return diary
}

export const addDiary = (diary: DiaryWithoutId): Diary => {
  const id: number = Math.max(...diaries.map(key => key.id)) + 1
  const newDiary = { id, ...diary }
  diaries.push(newDiary)
  return newDiary
}
