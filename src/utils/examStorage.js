export const saveExamResult = (examId, examTitle, score) => {
  const newResult = {
    examId,
    examTitle,
    score,
    date: new Date().toISOString(),
    timeTaken: score.timeTaken,
  }

  try {
    const existingResults = localStorage.getItem('examResults')
    let results = []

    if (existingResults) {
      try {
        results = JSON.parse(existingResults)
        if (!Array.isArray(results)) {
          results = []
        }
      } catch {
        results = []
      }
    }

    const now = new Date()
    const recentDuplicate = results.some((result) => {
      const resultDate = new Date(result.date)
      return result.examId === examId && Math.abs(now - resultDate) < 1000
    })

    if (!recentDuplicate) {
      localStorage.setItem(
        'examResults',
        JSON.stringify([...results, newResult])
      )
    }
  } catch (error) {
    console.error('Failed to save exam result:', error)
    localStorage.setItem('examResults', JSON.stringify([newResult]))
  }
}

export const getExamResults = () => {
  try {
    const results = localStorage.getItem('examResults')
    if (!results) return []

    const parsed = JSON.parse(results)
    return Array.isArray(parsed) ? parsed : []
  } catch (error) {
    console.error('Failed to load exam results:', error)
    return []
  }
}
