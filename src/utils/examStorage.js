export const saveExamResult = (examId, examTitle, score) => {
  const newResult = {
    examId,
    examTitle,
    score,
    date: new Date().toISOString(),
  }

  try {
    // Get existing results or initialize empty array
    const existingResults = localStorage.getItem('examResults')
    let results = []

    if (existingResults) {
      try {
        results = JSON.parse(existingResults)
        // Ensure we have an array
        if (!Array.isArray(results)) {
          results = []
        }
      } catch {
        results = []
      }
    }

    // Prevent duplicate entries for the same exam at the same time
    // (within 1 second to account for quick multiple calls)
    const now = new Date()
    const recentDuplicate = results.some((result) => {
      const resultDate = new Date(result.date)
      return (
        result.examId === examId && Math.abs(now - resultDate) < 1000 // 1 second threshold
      )
    })

    if (!recentDuplicate) {
      localStorage.setItem(
        'examResults',
        JSON.stringify([...results, newResult])
      )
    }
  } catch (error) {
    console.error('Failed to save exam result:', error)
    // If all else fails, just store the new result
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
