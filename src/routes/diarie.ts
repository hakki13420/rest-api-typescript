import express from 'express'
import { validateDiary } from '../utils/diaries'
import { addDiary, getDiaries, getDiariesWithoutComments, getOneDiary, getOneDiaryWithoutComment } from '../controllers/diaries'
import { type DiaryWithoutId } from '../types'

const router = express.Router()

router.get('/', (_req, res) => {
  return res.status(200).json(getDiaries())
})

router.get('/without-comment', (_req, res) => {
  return res.status(200).json(getDiariesWithoutComments())
})

router.get('/:id', (req, res) => {
  const diary = getOneDiary(+req.params.id)
  if (diary !== undefined) return res.json(diary)
  return res.status(404).json('diary not found')
})

router.get('/without-comment/:id', (req, res) => {
  const diary = getOneDiaryWithoutComment(+req.params.id)
  if (diary != null) return res.status(200).json(diary)
  return res.status(404).json('diary not found')
})

router.post('/', (req, res) => {
  try {
    const valideDiary: DiaryWithoutId = validateDiary(req.body)
    res.status(201).json(addDiary(valideDiary))
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message)
    }
  }
})

export default router
