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
    {
      id: '3',
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
    {
      id: '4',
      text: 'Given the Student class UML diagram, which instantiation would NOT raise an error?',
      options: [
        'Student st1 = new Student("john", "SE", "0913222222", 20)',
        'st1 Student = new Student("john", "CS", "02085332455", 23)',
        'Student st1 = new Student("john", "IT", "2000")',
        'Student st1 = new Student("john", "CS", "0913222222", "25")',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Only option A provides all required parameters with correct data types.',
    },
    {
      id: '5',
      text: 'What will be the output of: var a = "exitexam"; var result = a.substring(2,6);',
      options: ['texam', 'xite', 'itex', 'xitex'],
      correctAnswerIndex: 2,
      explanation:
        'substring(2,6) extracts characters from index 2 to 5 ("itex").',
    },
    // ... more questions
  ],
}

export default exitExam2015
