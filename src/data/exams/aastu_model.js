// src/data/examModel.js
const aastuMock1 = {
  id: 'aastuMock1',
  title: 'AASTU MOCK-1',
  year: 2024,
  type: 'mock',
  image: 'aastu.png',
  questions: [
    {
      id: '1',
      text: 'The evolution of software is not to be comprised of:',
      options: [
        'Development activities',
        'Re-engineering activities',
        'Maintenance activities',
        'Negotiating with client',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Client negotiation is a business activity, not part of technical software evolution.',
    },
    {
      id: '2',
      text: 'Program modularization and source code translation are activities of:',
      options: [
        'Forward engineering',
        'Reverse Engineering',
        'Reengineering',
        'Reverse Engineering and Reengineering',
      ],
      correctAnswerIndex: 2,
      explanation:
        'Reengineering involves restructuring while preserving functionality.',
    },
    // ... more questions
  ],
}

export default aastuMock1
