// src/data/examModel.js
const exitExam2015 = {
  id: 'exit_exam_2015',
  title: 'Exit 2015',
  year: 2015,
  type: 'final',
  image: 'ju.png',
  questions: [
    {
      id: '1',
      text: 'Which parameter is used to assess and evaluate software architectures?',
      options: [
        'Responsiveness of Architectures',
        'Durability of Architectures',
        'Architectural quality in attribute',
        'Number of components in the Architecture',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Architectural quality attributes are the primary metrics for evaluation.',
    },
    {
      id: '2',
      text: 'What we use to pass the data between activities in Android?',
      options: [
        'Broadcast receiver',
        'PostgreSQL Database',
        'Intent',
        'Content provider',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Intents are the messaging objects used for communication between Android components.',
    },
    // ... more questions
  ],
}

export default exitExam2015
