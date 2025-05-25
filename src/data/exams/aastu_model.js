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
    {
      id: '3',
      text: 'Software maintenance includes:',
      options: [
        'Error corrections',
        'Enhancements of capabilities',
        'Deletion of obsolete capabilities',
        'All of the mentioned',
      ],
      correctAnswerIndex: 3,
      explanation:
        'Includes corrective, perfective, adaptive, and preventive maintenance.',
    },
    {
      id: '4',
      text: 'Improving software performance is called:',
      options: [
        'Corrective Maintenance',
        'Perfective Maintenance',
        'Adaptive Maintenance',
        'Preventive Maintenance',
      ],
      correctAnswerIndex: 1,
      explanation: 'Perfective maintenance enhances performance.',
    },
    {
      id: '5',
      text: 'A method requiring excessive information from another class demonstrates:',
      options: ['Lazy Method', 'Long Method', 'Feature Envy', 'Inline Method'],
      correctAnswerIndex: 2,
      explanation:
        'Feature Envy suggests the method should belong to the other class.',
    },

    // ... more questions
  ],
}

export default aastuMock1
